import '../assets/styles/icon-open-chat.css';
import '../assets/styles/bubble-greetings.css';
import '../assets/styles/index.css';
import '../assets/styles/start-screen.css'
import '../assets/styles/messageView.css'
import '../assets/styles/blip-container.css'

import Chatbot  from './Chatbot';
import ChatbotView  from './ChatbotView';
import IconOpenChat from './IconOpenChat'
import MessageView from './MessageView'
// import { clearBlipSDK } from './helpers/clear-id-blip';


const MESSAGE_DEBUG = 'Versão 4.0000.0-15-12-2020';

document.addEventListener("DOMContentLoaded", function() {
    
    var iconOpenChat = new IconOpenChat();
    var iframeIbot = iconOpenChat.createIconOpenChat();


    var startScreenContent = document.createElement('div');
    startScreenContent.setAttribute('id','start-screen');
    iframeIbot.append(startScreenContent);
    
    
    var chatbotView = new ChatbotView(startScreenContent);
    chatbotView.update('oi');
    
    var blipContainer = document.createElement('div');
    blipContainer.setAttribute('id','blip-container-ifc');
    startScreenContent.append(blipContainer);

    // clearBlipSDK(MESSAGE_DEBUG);

    var chatbot = new Chatbot();
    chatbot.toggleChat();

    
    var myChat = document.getElementById('myChat');
    var messagesView = new MessageView(myChat);
    messagesView.update();
    messagesView.sendMessage();


});
