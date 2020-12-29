import '../assets/styles/icon-open-chat.css';
import '../assets/styles/bubble-greetings.css';
import '../assets/styles/index.css';
import '../assets/styles/start-screen.css'

import { iconOpenChat } from './icon-open-chat';
import { bubble } from './bubble-greetings';
import { startScreen } from './start-screen';
// import { clearBlipSDK } from './helpers/clear-id-blip';


const MESSAGE_DEBUG = 'Versão 4.0000.0-15-12-2020';

document.addEventListener("DOMContentLoaded", function() {
    
    var body = document.querySelector('body')
    var iframeIbot = document.createElement('div');
    iframeIbot.setAttribute('id','iframe-ibot');

    //Create Elements
    var iconChatOpen = iconOpenChat.create( CONFIG_BOTTOM_IMAGE_URL, CONFIG_TOP_IMAGE_URL);    
    iframeIbot.appendChild(iconChatOpen);
    
    var bubbleContainer = bubble.create('Olá, posso te ajudar?');
    iframeIbot.prepend(bubbleContainer);
   

    var startScreenContainer = startScreen
                                    .create(
                                        'https://image.flaticon.com/icons/png/512/106/106830.png',
                                        'TEST-BOT',
                                        'https://cdn1.vectorstock.com/i/1000x1000/84/50/thin-line-delivery-truck-icon-vector-17698450.jpg'
    );
    iframeIbot.prepend(startScreenContainer);
    //Controllers
    body.appendChild(iframeIbot);
    // clearBlipSDK(MESSAGE_DEBUG);

    var iconChatOpen = iconOpenChat.openChat();

    let bubbleGreeting = setTimeout(
        function() {
            bubble.changeBubble();
            },2000)


});
