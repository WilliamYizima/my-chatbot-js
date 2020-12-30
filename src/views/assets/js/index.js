import '../sass/styles.scss'

import { Chatbot } from './classes/Chatbot'

const storageConfig = {
    PREFIX_STORAGE: '@CHATBOT/',
    SESSION_ID_STORAGE: 'SESSION_ID_STORAGE'
}

const styleConfig = { 
    chatbot: {
        position: 'right-bottom',
        background: '#e2e0e0',
    },
    chatbotIcon: {
        position: 'right-bottom',
        background: '#e2e0e0'
    },
    chatbotInputText: {
        color: '#040404',
        background: '#d2d1d1'
    },
    chatbotUserMessage: {
        background: '#000000',
        color: '#fff',
        side: 'left'
    },
    chatbotBotMessage: {
        background: '#000000',
        color: '#fff',
        side: 'right'
    },
    botWriting: {
        backgroundCircle: 'red', 
        backgroundBlock: 'blue'
    }
}

const chatbot = new Chatbot('chatbot', 'Leonardo', false, styleConfig, storageConfig)
chatbot.init()

/**
 * Others events
 */
const btnShowChatbotInfo = document.querySelector('#btnShowChatbotInfo')

btnShowChatbotInfo.addEventListener('click', () => chatbot.getInfo())