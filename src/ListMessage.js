export default class ListMessage {

    constructor(){
        this._listMessage = [];
    }

    insertMessage(message){
        this._listMessage.push(message);
        console.log('mensagem inserida com sucesso')
    }

    get listMessage() {

        return [].concat(this._listMessage);
    }
}