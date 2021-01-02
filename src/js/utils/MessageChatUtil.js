export const getContentHtml = (chatOpened, config, css) => {
    return `
      <div 
        class="chatbot"
      >
        <button 
          id="${config.btnToOpenChat}" 
          class="chatbot--icon"
          data-position="${css.chatbotIcon.position}"
          style="background: ${css.chatbotIcon.background}"
          ></button>

        <div 
          id="${config.contentChat}" 
          class="chatbot__content"
          data-opened="${chatOpened}" 
          data-position="${css.chatbot.position}"
          style="background: ${css.chatbot.background}"
        >
          <div class="chatbot__content--header">
            <span>
              BOT TITLE TEST
            </span>
            <div id="${config.btnToCloseChat}" 
              class="chatbot__content--close">
              <img 
                src="http://localhost:8080/close-button-bot.png"
                />
            </div>
          </div>

          <div
            id="${config.contentMessage}"
            class="chatbot__content__messages">
            </div>
          
          ${getWaitingHtml(css.botWriting)}

          <div class="chatbot__content__inputs">
            <input 
              type="text" 
              id="${config.inputText}"
              class="chatbot__content__inputs--text"
              placeholder="Digite aqui"
              style="
                color: ${css.chatbotInputText.color};
                background: ${css.chatbotInputText.background}
              "
            />
          </div>
        </div>
      </div>
    `
}

export const getWaitingHtml = (css) => {
  const line = `
    <span 
      class="message-chat-waiting--text-waiting"
      style="
        background: ${css.backgroundCircle};
      "
    ></span>
  `

  return `
      <div 
        class="message-chat-waiting" 
        data-writing="false"
        style="background: ${css.backgroundBlock};"
      >
        ${line.repeat(3)}
      </div>
    `
}

export const getTextHtml = (message, css) => {
  return `
      <div 
        class="message-chat" 
        data-side="${css.side}"
      >
        <span 
          class="message-chat--text"
          style="
            background: ${css.background};
            color: ${css.color};
          "
        >${message}</span>
      </div>
    `
}

export const getImageCarrouselHtml = (message, links, css) => {
  return `
      <div>
        <h2>Image Carrousel</h2>
      </div>
    `
}

export const getVideoCarrouselHtml = (message, links, css) => {
  return `
      <div>
        <h2>Video Carrousel</h2>
      </div>
    `
}
