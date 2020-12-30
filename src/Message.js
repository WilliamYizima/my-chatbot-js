export default class Message{

    constructor(message, from, type){
        this._message = message;
        this._from = from;
        this._type = type;

    }

    get message(){
        return this._message
    }

    get from(){
        return this._from
    }

    get type(){
        return this._type
    }
}