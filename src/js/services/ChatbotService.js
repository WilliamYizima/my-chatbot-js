class ChatbotService {
  constructor() {}

  async handleMessage(message) {
    return new Promise((resolve) => {
      setTimeout(() => {
        if(message == 'blip') {
          resolve({
            type: 'getTextHtml',
            message: `blip ativado`,
            links: [],
            blipActivate:true,
          })
        }
        resolve({
          type: 'getTextHtml',
          message: `Hi, I received the message: ${message}`,
          links: []
        })
      }, 5000)
    })
  }
}

export default new ChatbotService()