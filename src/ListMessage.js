export default class ListMessage {

    constructor(){
        this._listMessage = [];
    }

    insertMessage(message){

        this._listMessage.push(message);
    }

    get listMessage() {

        return [].concat(this._listMessage);
    }
}