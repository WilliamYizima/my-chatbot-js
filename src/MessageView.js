import ListMessage from './ListMessage';
import Message from './Message';

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
            }
        }
    }
    

    
}