
import './sass/styles.scss'



import { Chatbot } from './js/classes/Chatbot'

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
        background: '#000'
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

// document.addEventListener("DOMContentLoaded", function() {
    
//     var iconOpenChat = new IconOpenChat();
//     var iframeIbot = iconOpenChat.createIconOpenChat();


//     var startScreenContent = document.createElement('div');
//     startScreenContent.setAttribute('id','start-screen');
//     iframeIbot.append(startScreenContent);
    
    
//     var chatbotView = new ChatbotView(startScreenContent);
//     chatbotView.update('oi');
    
//     var blipContainer = document.createElement('div');
//     blipContainer.setAttribute('id','blip-container-ifc');
//     startScreenContent.append(blipContainer);

//     // clearBlipSDK(MESSAGE_DEBUG);

//     var chatbot = new Chatbot();
//     chatbot.toggleChat();

    
//     var myChat = document.getElementById('myChat');
//     var messagesView = new MessageView(myChat);
//     messagesView.update();
//     messagesView.sendMessage();


// });
