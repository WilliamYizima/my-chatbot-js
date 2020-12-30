export default class ChatbotView {
    constructor(element){
        this._element = element;
    }

    template(){

    //     return`
        
    //     <div class="header-interface">
    //     <div class="header-greeting">
    //         Atendente virtual da Infra
    //     </div>
    //     <div class="close-button">
    //         <!-- <img close-start-screen="true" src='https://image.flaticon.com/icons/png/512/106/106830.png' alt="" /> -->
    //         <img close-start-screen="true" src='' alt="" />
    //     </div>
    // </div>
    // <div class="start-screen-content">
    //     <div class="content-interface">
    //         <div class="content-section-cpf">
    //             <div class="content-cpf-input-box">
    //                 <div class="content-cpf-input-button">
    //                     <input id="question-input-recall" class="content-cpf-input" type="text" placeholder="Digite o número do CPF" />
    //                     <button id="click-question-recall" payload="recall:question-input-recall" class="content-cpf-button">Enviar </button>
    //                 </div>
    //             </div>
    //         </div>
    //         <div class="content-section-follow">
    //             <div payload="Acompanhar pedido" class="content-follow-box">
    //                 <img payload="Acompanhar pedido" src='https://cdn1.vectorstock.com/i/1000x1000/84/50/thin-line-delivery-truck-icon-vector-17698450.jpg' alt="" />
    //                 <span payload="Acompanhar pedido" class="content-follow-phrase">Acompanhar seu pedido</span>
    //             </div>
    //         </div>
    //         <div class="content-section-exchange">
    //             <div class="content-exchange-box">
    //                 <div class="content-exchange-phrase-box">
    //                     <div class="content-exchange-phrase">
    //                         Trocas e Devoluções
    //                     </div>
    //                 </div>

    //                 <div class="content-exchange-options-box">
    //                     <div payload="Ver sobre Política de troca" class="content-exchange-options-phrase">
    //                         Política de troca
    //                     </div>
    //                 </div>
    //                 <div class="content-exchange-options-box">
    //                     <div payload="Troca de produto" class="content-exchange-options-phrase">
    //                         Trocar Produto
    //                     </div>
    //                 </div>
    //                 <div class="content-exchange-options-box">
    //                     <div payload="Pedir Reembolso" class="content-exchange-options-phrase">
    //                         Pedir Reembolso
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //         <div class="content-section-question-phrase">
    //             <div class="content-question-phrase-box">
    //                 <div class="content-question-prhase">
    //                     Não encontrou o que procurava?
    //                 </div>
    //             </div>
    //         </div>
    //     </div>

    // </div>
    // <div class="footer-interface">

    //     <div class="footer-section-question">
    //         <textarea id="question-input" rows="1" data-min-rows="1" placeholder="Digite sua mensagem aqui" class="footer-input"></textarea>
    //     </div>
    // </div>
    //     `
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