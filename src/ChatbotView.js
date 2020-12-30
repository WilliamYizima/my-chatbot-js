export default class ChatbotView {
    constructor(element){
        this._element = element;
    }

    template(){

    return `
    <div class="header-interface">
        <div class="header-greeting">
            Atendente virtual da Infra
        </div>
        <div class="close-button">
            <!-- <img close-start-screen="true" src='https://image.flaticon.com/icons/png/512/106/106830.png' alt="" /> -->
            <img close-start-screen="true" src='' alt="" />
        </div>
    </div>
    <div class="start-screen-content">
    <div id="myChat">
    </div>
    
    `
    }

    update(){
        this._element.innerHTML = this.template();
        
    }
}