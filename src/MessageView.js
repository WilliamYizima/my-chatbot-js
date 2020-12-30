import ListMessage from './ListMessage';
import Message from './Message';
import { clearBlipSDK } from './helpers/clear-id-blip'
 
export default class MessageView{
    constructor(element){
        this._element = element;
        this._listMessage = new ListMessage();
    }

    createChat(){
        return `
        <form id="chat" onsubmit="messagesView.sendMessage()">
                
                <div class="messages">
                    ${this._listMessage.listMessage.map(n => `
                    <div class="message"><strong> ${n.from} </strong>: ${n.message}</div>
                    `).join('')}
                </div>
                <input type="text" name="message" placeholder="Digite seu usuário">
                <button type="submit">Enviar</button>
            </form>
            
            `
    }

    update(){
        this._element.innerHTML = this.createChat();
        this.sendMessage();
        
    }

    sendMessage(){
        
        let iconChatOpen = document.querySelector('#chat');
        iconChatOpen.onclick = (event) => {
            event.preventDefault();
            
            var message = document.querySelector('input[name=message]').value;
            
    
            if(message.length){
                // var messageObj = new Message(message,author,'text');
                var messageObj = new Message(message);
            
                this._listMessage.insertMessage(messageObj);
                this._listMessage.listMessage;
                this.update();

                if(message==="blip"){
                    document.querySelector('#chat').setAttribute('style','display:none');
                    document.querySelector('#blip-container-ifc').setAttribute('style','display:inline');
                    
                    this.changeBlip();
                }
            }
        }
    }

    changeBlip(){
            clearBlipSDK();
            
                
                  var chatbot = new BlipChat()
                  .withAppKey('bW9kZWxvYXR1YWw6OGQzY2ZjODctNDk0My00MjMxLWJhZWEtOGViYjQ5YzNkYjlm')
                  .withTarget("blip-container-ifc")
                  .withEventHandler(BlipChat.CREATE_ACCOUNT_EVENT, function () {
                      console.log('enviando')
                      chatbot.sendMessage({
                          "type": "text/plain",
                          "content": "GAMA~|~form",
                          metadata: {
                              "#blip.hiddenMessage": true
                          }
                      });
                  });
                  chatbot.build();         
    }
    

    
}