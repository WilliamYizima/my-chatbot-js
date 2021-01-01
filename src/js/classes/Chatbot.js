import { SessionIdStorage } from './SessionIdStorage'
import chatbotService from '../services/ChatbotService'

import * as MessageChatUtil from '../utils/MessageChatUtil'

export class Chatbot {
  
  constructor(idToInsertChat, name, chatOpen, styleConfig, storageConfig) {
    if (!idToInsertChat || !name || !styleConfig) {
      throw new Error('Invalid params. Required idToInsertChat, name, chatOpen, styleConfig')
    }

    this.id = idToInsertChat
    this.name = name
    this.chatOpened = chatOpen
    this.styleConfig = styleConfig
    this.storageConfig = storageConfig
  }

  init() {
    this.container = document.querySelector(`#${this.id}`)

    if (!this.container) {
      throw new Error(`Not found element with Id: ${this.id}`)
    }

    // Generate dinamic ID's to elements HTML
    this.configIds = this.generateIds()
    
    this.insertChat()
    this.contentChat = document.querySelector(`#${this.configIds.contentChat}`)
    this.contentMessage = document.querySelector(`#${this.configIds.contentMessage}`)
    this.inputText = document.querySelector(`#${this.configIds.inputText}`)
    this.botWriting = document.querySelector(`#${this.configIds.contentMessage} ~ .message-chat-waiting`)

    this.addListeners()

    // Session ID
    const { PREFIX_STORAGE, SESSION_ID_STORAGE } = this.storageConfig
    this.sessionIdStorage = new SessionIdStorage(PREFIX_STORAGE, SESSION_ID_STORAGE)
    this.sessionId = this.sessionIdStorage.restoreSession()
  }

  getInfo() {
    console.info(`
      I'm a chatbot and my name is ${this.name}.
      Your session ID: ${this.sessionId}
      Styles:
    `, this.styleConfig
    )
  }

  generateIds() {
    const idWithFirstLetterUpper = this.id[0].toUpperCase()
    const newId = `${idWithFirstLetterUpper}${this.id.slice(1)}`

    return {
      btnToOpenChat: `btn${newId}OpenChat`,
      btnToCloseChat: `btn${newId}CloseChat`,
      btnToToggleChat: `btn${newId}ToggleChat`,
      contentChat: `${this.id}ContentChat`,
      contentMessage: `${this.id}ContentMessage`,
      inputText: `${this.id}InputText`,
    }
  }

  insertChat() {
    const { chatOpened, configIds: config, styleConfig: css } = this

    this.container.innerHTML = MessageChatUtil.getContentHtml(chatOpened, config, css)
  }

  resetChat() {
    this.sessionId = this.sessionIdStorage.generateSessionId()
    this.closeChat()
  }

  openChat(){
    this.chatOpened = true
    this.updateChatStatusOpened()
  }

  closeChat(){
    this.chatOpened = false
    this.updateChatStatusOpened()
  }

  toggleChat(){
    this.chatOpened = !this.chatOpened
    this.updateChatStatusOpened()
  }

  updateChatStatusOpened() {
    this.contentChat.dataset.opened = this.chatOpened
  }

  handleUserMessage(type, message){
    try {
      if(!type || !message) {
        throw new Error(`${this.handleUserMessage.name}: Invalid params`)
      }

      const { chatbotUserMessage: styleConfig } = this.styleConfig

      this.updateContentMessage(type, message, styleConfig, [])

      setTimeout(() => {
        this.botWriting.dataset.writing = true
      }, 1000)
      
      chatbotService
      .handleMessage(message)
      .then((response) => {
        this.handleResponseBot(response)
        })
    } catch (err) {
      console.error('Invalid message type')
    }
  }

  handleResponseBot({ type, message, links }) {
    const { chatbotBotMessage: styleConfig } = this.styleConfig
    this.updateContentMessage(type, message, styleConfig, links)
  }

  updateContentMessage(type, message, styleConfig, links) {
    const content = MessageChatUtil[type](message, styleConfig, links)
    
    this.botWriting.dataset.writing = false

    const textContent = this.contentMessage.innerHTML

    this.contentMessage.innerHTML = `
      ${content}
      ${textContent}
    `
  }

  addListeners() {
    this.addListenerToOpenChat()
    this.addListenerToCloseChat()
    this.addListenerToInputText()
  }
  
  addListenerToOpenChat() {
    const { configIds: config } = this

    const btnOpenChat = document.querySelector(`#${config.btnToOpenChat}`)
    if(!btnOpenChat) {
      throw new Error(`Not found ${config.btnToOpenChat}`)
    }
    btnOpenChat.addEventListener('click', () => this.toggleChat())
  }

  addListenerToCloseChat() {
    const { configIds: config } = this

    const btnCloseChat = document.querySelector(`#${config.btnToCloseChat}`)
    const btnOpenChat = document.querySelector(`#${config.btnToOpenChat}`)
    
    if(!btnCloseChat) {
      throw new Error(`Not found ${config.btnToCloseChat}`)
    }
    btnCloseChat.addEventListener('click', () => this.closeChat())

      
  }

  addListenerToInputText() {
    const { configIds: config } = this

    const inputText = document.querySelector(`#${config.inputText}`)
    if(!inputText) {
      throw new Error(`Not found ${config.inputText}`)
    }

    // TODO - Add debounce
    inputText.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' && this.inputText.value) {
        this.handleUserMessage('getTextHtml', this.inputText.value)
        this.inputText.value = ''
      }
    })
  }
}
