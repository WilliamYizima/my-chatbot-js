import { iconOpenChat } from './helpers/icon-open-chat';
import { bubble } from './helpers/bubble-greetings';


export default class IconOpenChat {
    constructor(iconImgTop, iconImgBotton){
        this._iconImgTop = iconImgTop
        this._iconImgBotton = iconImgBotton
    }

    createIconOpenChat(){

    var body = document.querySelector('body')
    var iframeIbot = document.createElement('div');
    iframeIbot.setAttribute('id','iframe-ibot');

    //Create Elements
    var iconChatOpen = iconOpenChat.create( CONFIG_BOTTOM_IMAGE_URL, CONFIG_TOP_IMAGE_URL);    
    iframeIbot.appendChild(iconChatOpen);
    
    var bubbleContainer = bubble.create('Olá, posso te ajudar?');
    iframeIbot.prepend(bubbleContainer);
    body.appendChild(iframeIbot);

    let bubbleGreeting = setTimeout(
        function() {
            bubble.changeBubble();
            },2000)

    return iframeIbot;
    }

    

}