export class BlipIFC {

    constructor(appKey, target, initialMessage){
        if(!appKey || !target || !initialMessage){
            throw new Error('Invalid params. Required appKey, target, initialMessage')
        }

        this.appKey = appKey;
        this.target = target;
        this.initialMessage = initialMessage;
        this.blipActivate = true;
        this._widgetLocation = "https://unpkg.com/blip-chat-widget";
    }

    init(){
        this.loadBlipExtension().then(function(){
            this.createBot();
        })
    }

    createBot(){
        // TODO melhorar o código de captação do css
        var PRIMARY_COLOR = '#000';
        const iframeStyle = function modifyCSSBlip(PRIMARY_COLOR) {
            return `
            div .preview {
                display: none !important;
            }
            .clip-icon{
                right: 42% !important;
            }
            #message-input textarea {
                            width: 90% !important
                    } 
             #message-input { 
                            background: ${PRIMARY_COLOR};
                            border-radius: 0px 0px 2px 20px;
                            width: 100%;height: 97px !important;
                            max-height: 97px !important
                    } 
            #thread{ 
                height:calc(100% - 97px)
                    } 
            #msg-textarea{
                        border-radius:20px 20px 2px 20px !important;
                        box-sizing: border-box !important;
                        border:1px solid ${PRIMARY_COLOR} !important;
                        height:57px !important;
                        position: relative !important;
                        top: 4px !important;
                        left: 5px !important;
                        background: #FFFFFF !important;
                        font-family: 'Roboto', sans-serif !important;
                        font-style: normal !important;
                        font-weight: bold !important;
                        font-size: 12px !important;
                        line-height: 18px !important;
                        padding: 15px !important;
                        color: #4D4D4F !important;
                    } 
            
            #msg-textarea::placeholder {
                        font-family: 'Roboto', sans-serif !important;
                        font-style: normal !important;
                        font-weight: bold !important;
                        color: #4D4D4F !important;
                    }
            #blip-chat-header{
                background: ${PRIMARY_COLOR} !important;
                    }
            .blip-chat-bot-status{
                display:none;
                    }
            .blip-card .bubble.left{
                box-shadow: 0px 4px 4px rgba(50, 50, 71, 0.08), 0px 4px 8px rgba(50, 50, 71, 0.06) !important;
                font-family: 'Roboto', sans-serif !important;
                font-style: normal !important;
                font-weight: bold !important;
                font-size: 13px !important;
                line-height: 18px !important;
                color: #4D4D4F !important;
                background: #F2F2F2 !important;
                    }
            .blip-card .bubble.right{
                background: #FFFFFF !important;
                font-family: 'Roboto', sans-serif !important;
                font-style: normal !important;
                font-weight: bold !important;
                color: #4D4D4F !important;
                font-size: 13px !important;
                line-height: 18px !important;
                border: 1px solid ${PRIMARY_COLOR} !important;
                box-sizing: border-box !important;
                box-shadow: 0px 4px 4px rgba(50, 50, 71, 0.08), 0px 4px 8px rgba(50, 50, 71, 0.06) !important;
                    }
            .disable-selection:not(.fixed-options):not(span){
                background: ${PRIMARY_COLOR} !important;
                box-shadow: 0px 4px 4px rgba(50, 50, 71, 0.08), 0px 4px 8px rgba(50, 50, 71, 0.06) !important;
                border-radius: 20px 20px 20px 2px !important;
                font-family: 'Roboto', sans-serif !important;
                font-style: normal !important;
                font-weight: bold !important;
                color: #FFFFFF !important;
                font-size: 13px !important;
                line-height: 18px !important;
                border: none !important;
            }
            .pointer span{
                background: ${PRIMARY_COLOR} !important;
                border-radius: 20px 20px 20px 2px !important;
                font-family: 'Roboto', sans-serif !important;
                font-style: normal !important;
                font-weight: bold !important;
                color: #FFFFFF !important;
                font-size: 13px !important;
                line-height: 18px !important;
                border: none !important;
            }
            .disable-selection:not(.fixed-options):not(span):hover{
                -webkit-transform: scale(1.05) !important;
                -ms-transform: scale(1.05);
                transform: scale(1.05) !important;
                background: #FFFFFF !important;
                color: #4D4D4F !important;
                border: 1px solid ${PRIMARY_COLOR} !important;
            }
            .blip-card .left .fixed-options li{
                background: ${PRIMARY_COLOR}  !important;
                border-radius: 10px !important;
                align-items: center !important;
                cursor: pointer !important;
                padding-bottom: 7px !important;
                width: 90% !important;
                margin-left: 5% !important;
                font-family: 'Roboto', sans-serif;
                font-style: normal;
                margin-bottom: 10px;
                
            }
            .blip-card .left .fixed-options li > div{
                color: #FFFFFF !important;
            }
            .blip-card .left .fixed-options li:hover {
                -webkit-transform: scale(1.10) !important;
                -ms-transform: scale(1.10);
                transform: scale(1.10) !important;
                color: #000000 !important;
            }
            .blip-card .bubble.left .text-left {
                font-family: 'Roboto', sans-serif;
                font-style: normal;
                font-weight: bold;
                font-size: 14px;
                line-height: 18px;
            }
            
            
            div .space-between-text{
            
            width: 220px;
            background-size: 220px;
            height: 130px;
            margin-left: auto;
            margin-right: auto;
            }
            .text-wrapper:before{
                content:none !important;
            }
            .text-wrapper:after{
                content:none !important;
            }
            .web-link .bubble .web-link-wrapper .link-description-wrapper .small-text{
                font-family: 'Roboto', sans-serif !important;
                font-style: normal !important;
                font-size: 12px !important;
            }
            .web-link .bubble .web-link-wrapper .link-description-wrapper .big-text{
                display: none !important;
            }
            
            .web-link .bubble .web-link-wrapper .link-description-wrapper .text-wrapper span{
                font-family: 'Roboto', sans-serif !important;
                font-style: normal !important;
                font-size: 16px !important;
                font-weight: bold !important;
                line-height: 18px !important;
                
                color: #4D4D4F !important;
            }
            
            .collection .next, div>.blip-card .left .next{
                padding:2px 10px !important;
                color:black !important;
            }
            
            .left{
                margin-top:10px;
            }
            
            .right{
                margin-top:10px;
            }
            
            .blip-card .left .title a{
                color:black !important;
            }
            
            .mr1 {
                margin-right: 2rem !important;
            }
            
            
            `
        }

        var chatbot = new BlipChat()
        .withAppKey(this.appKey)
        .withTarget(this.target)
        .withCustomStyle(iframeStyle(PRIMARY_COLOR))
        // .withCustomStyle(`#blip-chat-open-iframe {display: none !important;}`)
        .withEventHandler(BlipChat.CREATE_ACCOUNT_EVENT, function () {
            console.log('initial message:',this.initialMessage)
            chatbot.sendMessage({
                "type": "text/plain",
                "content": this.initialMessage,
                metadata: {
                    "#blip.hiddenMessage": true
                }
            });
        });
        chatbot.build();
        chatbot.toogleChat();
    }

    loadBlipExtension(){
        this.loadBlipExtension = function() {
            return new Promise(function(resolve, reject) {
                console.log('inserindo o script')
                var script = document.createElement("script");
                script.src = this._widgetLocation;
                script.onload = resolve;
                document.head.append(script);
                console.log('inseri esse carlaho')
            });
        };
    }
}

// clearBlipSDK();
            
                
// var chatbot = new BlipChat()
// .withAppKey('bW9kZWxvYXR1YWw6OGQzY2ZjODctNDk0My00MjMxLWJhZWEtOGViYjQ5YzNkYjlm')
// .withTarget("blip-container-ifc")
// .withEventHandler(BlipChat.CREATE_ACCOUNT_EVENT, function () {
//     console.log('enviando')
//     chatbot.sendMessage({
//         "type": "text/plain",
//         "content": "GAMA~|~form",
//         metadata: {
//             "#blip.hiddenMessage": true
//         }
//     });
// });
// chatbot.build(); 