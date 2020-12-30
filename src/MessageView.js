import ListMessage from './ListMessage';

export default class MessageView{
    constructor(element){
        this._element = element;
        let $ = document.querySelector.bind(document);
        this._listMessage = new ListMessage();
    }

    createChat(){
        return `
        Message<form id="chat">
                <input type="text" name="username" placeholder="Digite seu usuário">
                <div class="messages">
                    ${this._listMessage.listMessage.map(n => `
                    <div class="message"><strong> Naruto </strong>: ${n}</div>
                    `).join('')}
                </div>
                <input type="text" name="message" placeholder="Digite seu usuário">
                <button type="submit">Enviar</button>
            </form>
            `
    }

    update(){
        this._element.innerHTML = this.createChat();
        
    }

    renderMessage(message){
        document.querySelector('.messages')
            .append('<div class="message"><strong>' + message.author + '</strong>:' + message.message+'</div>')
    }

    sendMessage(){
        
        let iconChatOpen = document.querySelector('#chat');
        iconChatOpen.onclick = (event) => {
            event.preventDefault();
            
            var author = document.querySelector('input[name=username]').value;
            var message = document.querySelector('input[name=message]').value;
            
    
            if(author.length && message.length){
                var messageObject = {
                    author,
                    message,
                };
            
                this._listMessage.insertMessage(message);
                this._listMessage.listMessage;
                console.log('inseri essa msg',message);
                this.update();
            }
        }
    }
    

    
}