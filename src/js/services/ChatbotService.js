class ChatbotService {
  constructor() {}

  async handleMessage(message) {
    return new Promise((resolve) => {
      setTimeout(() => {
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