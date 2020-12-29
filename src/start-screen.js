export var startScreen = (()=>{

    let $create = document.createElement.bind(document);
    
    var createHeaderInterface = (iconCloseButton, botName)=>{
        var headerInterface = $create('div');
        headerInterface.setAttribute('class','header-interface');
    
        var headerGreeting = $create('div');
        headerGreeting.setAttribute('class', "header-greeting");
        headerGreeting.innerHTML += botName;
        
        var closeButton = $create('div');
        closeButton.setAttribute('class', "close-button");
    
        var closeStartScreen = $create('img');
        closeStartScreen.setAttribute('close-start-screen', 'true');
        closeStartScreen.setAttribute('src', iconCloseButton);
        closeStartScreen.setAttribute('alt', 'close button');
        
        closeButton.append(closeStartScreen);

        headerInterface.append(headerGreeting);
        headerInterface.append(closeButton);
        
        return headerInterface;
    }

    var createStartScreenContentHeader = () => {


        var contentSectionCpf = $create('div');
        contentSectionCpf.setAttribute('class', 'content-section-cpf');
        

        var contentCpfInputBox = $create('div');
        contentCpfInputBox.setAttribute('class', 'content-cpf-input-box');
        contentSectionCpf.append(contentCpfInputBox);

        var contentCpfInputButton = $create('div');
        contentCpfInputButton.setAttribute('class','content-cpf-input-button');
        var questionInputRecall = $create('input');
        questionInputRecall.setAttribute('id','question-input-recall');
        questionInputRecall.setAttribute('class','content-cpf-input');
        questionInputRecall.setAttribute('type','text');
        questionInputRecall.setAttribute('placeholder','Digite o número do CPF');
        var clickQuestionRecall = $create('button');
        clickQuestionRecall.setAttribute('id','click-question-recall');
        clickQuestionRecall.setAttribute('payload','recall:question-input-recall');
        clickQuestionRecall.setAttribute('class','content-cpf-button');
        clickQuestionRecall.innerText += 'Enviar'
        contentCpfInputButton.append(questionInputRecall);
        contentCpfInputButton.append(clickQuestionRecall);
        contentCpfInputBox.append(contentCpfInputButton);

        return contentSectionCpf;

    }
    var createStartScreenContentBodyFollow = (srcImgTrackOrder) => {
        var contentSectionFollow = $create('div');
        contentSectionFollow.setAttribute('class','content-section-follow');

        var contentFollowBox = $create('div');
        contentFollowBox.setAttribute('class','content-follow-box');
        contentFollowBox.setAttribute('payload','Acompanhar pedido');
        contentSectionFollow.append(contentFollowBox);

        var imageTrackerOrder = $create('img');
        imageTrackerOrder.setAttribute('payload','Acompanhar pedido');
        imageTrackerOrder.setAttribute('src',srcImgTrackOrder);
        contentFollowBox.append(imageTrackerOrder);

        var contentFollowPhrase = $create('span');
        contentFollowPhrase.setAttribute('payload','Acompanhar pedido');
        contentFollowPhrase.setAttribute('class','content-follow-phrase');
        contentFollowPhrase.innerHTML += 'Acompanhar seu pedido';
        contentFollowBox.append(contentFollowPhrase);

        return contentSectionFollow;
    }
    var createStartScreemContentBodyExchange = () =>{
        var contentSectionExchange = $create('div');
        contentSectionExchange.setAttribute('class','content-section-exchange');

        var contentExchangeBox = $create('div');
        contentExchangeBox.setAttribute('class','content-exchange-box');
        contentSectionExchange.append(contentExchangeBox);

        var contentExchangePhraseBox = $create('div');
        contentExchangePhraseBox.setAttribute('class','content-exchange-phrase-box');
        contentExchangeBox.append(contentExchangePhraseBox)

        var contentExchangePhrase = $create('div');
        contentExchangePhrase.setAttribute('class',"content-exchange-phrase");
        contentExchangePhrase.innerHTML += 'Trocas e Devoluções';
        contentExchangePhraseBox.append(contentExchangePhrase);

        var contentExchangeOptionsBox01 = $create("div");
        contentExchangeOptionsBox01.setAttribute('class','content-exchange-options-box');
        var contentExchangeOptionsPhrase01 = $create("div");
        contentExchangeOptionsPhrase01.setAttribute('class','content-exchange-options-phrase');
        contentExchangeOptionsPhrase01.setAttribute('payload','Ver sobre Política de troca');
        contentExchangeOptionsPhrase01.innerHTML += 'Política de troca';
        contentExchangeOptionsBox01.append(contentExchangeOptionsPhrase01);
        contentExchangeBox.append(contentExchangeOptionsBox01);

        var contentExchangeOptionsBox02 = $create("div");
        contentExchangeOptionsBox02.setAttribute('class','content-exchange-options-box');
        var contentExchangeOptionsPhrase02 = $create("div");
        contentExchangeOptionsPhrase02.setAttribute('class','content-exchange-options-phrase');
        contentExchangeOptionsPhrase02.setAttribute('payload','Troca de produto');
        contentExchangeOptionsPhrase02.innerHTML += 'Troca de produto';        
        contentExchangeOptionsBox02.append(contentExchangeOptionsPhrase02);
        contentExchangeBox.append(contentExchangeOptionsBox02);

        var contentExchangeOptionsBox03 = $create("div");
        contentExchangeOptionsBox03.setAttribute('class','content-exchange-options-box');
        var contentExchangeOptionsPhrase03 = $create("div");
        contentExchangeOptionsPhrase03.setAttribute('class','content-exchange-options-phrase');
        contentExchangeOptionsPhrase03.setAttribute('payload','Pedir Reembolso');
        contentExchangeOptionsPhrase03.innerHTML += 'Pedir Reembolso';        
        contentExchangeOptionsBox03.append(contentExchangeOptionsPhrase03);
        contentExchangeBox.append(contentExchangeOptionsBox03);



        return contentSectionExchange
    }

    var createStartScreemContentBodyQuestion = () =>{

        var contentSectionQuestionPhrase = $create("div");
        contentSectionQuestionPhrase.setAttribute('class',"content-section-question-phrase");
        var contentQuestionPhraseBox = $create("div");
        contentQuestionPhraseBox.setAttribute('class',"content-question-phrase-box");
        var contentQuestionPrhase = $create("div");
        contentQuestionPrhase.setAttribute('class',"content-question-prhase");
        contentQuestionPrhase.innerHTML += 'Não encontrou o que procurava?';
        
        contentQuestionPhraseBox.append(contentQuestionPrhase);
        contentSectionQuestionPhrase.append(contentQuestionPhraseBox)

        return contentSectionQuestionPhrase;
    }

    var createStartScreenContentFooter = () => {
        var footerInterface = $create("div");
        footerInterface.setAttribute('class','footer-interface');

        var footerSectionQuestion = $create("div");
        footerSectionQuestion.setAttribute('class','footer-section-question');
        footerInterface.append(footerSectionQuestion);
        var textAreaQuestionInput = $create("textarea");
        textAreaQuestionInput.setAttribute('id','question-input');
        textAreaQuestionInput.setAttribute('rows','1');
        textAreaQuestionInput.setAttribute('data-min-rows','1');
        textAreaQuestionInput.setAttribute('placeholder','Digite sua mensagem aqui');
        textAreaQuestionInput.setAttribute('class','footer-input');
        footerInterface.append(textAreaQuestionInput)

        return footerInterface;

    }
    var createStartScreenContent = (srcImgTrackOrder)=>{
        var startScreenContent = $create('div');
        startScreenContent.setAttribute('class','start-screen-content');
        
        var contentInterface = $create('div');
        contentInterface.setAttribute('class','content-interface');
        startScreenContent.append(contentInterface);

        var startScreenContentHeaderDiv = createStartScreenContentHeader();
        var startScreenContentBodyFollowDiv = createStartScreenContentBodyFollow(srcImgTrackOrder);
        var startScreenContentBodyExchengeDiv = createStartScreemContentBodyExchange();
        var startScreenContentBodyQuestionDiv = createStartScreemContentBodyQuestion();
        contentInterface.append(startScreenContentHeaderDiv);
        contentInterface.append(startScreenContentBodyFollowDiv);
        contentInterface.append(startScreenContentBodyExchengeDiv);
        contentInterface.append(startScreenContentBodyQuestionDiv);



        return startScreenContent;
    }

    
    var create = (iconCloseButton, botName,srcImgTrackOrder)=>{

        var startScreenDiv = $create('div');
        startScreenDiv.setAttribute('id','start-screen');
        
        var headerInterfaceDIv = createHeaderInterface(iconCloseButton, botName);
        startScreenDiv.append(headerInterfaceDIv)

        var contentInterfaceDiv = createStartScreenContent(srcImgTrackOrder);
        startScreenDiv.append(contentInterfaceDiv);

        var footerInterfaceDIv = createStartScreenContentFooter();
        startScreenDiv.append(footerInterfaceDIv);

        return startScreenDiv;
    }

    
    return{
        create: create,
    }

})();