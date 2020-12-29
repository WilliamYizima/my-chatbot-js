export var iconOpenChat = (function () {
    let $create = document.createElement.bind(document);


    var create = function (iconChatButtonTop, iconChatButtonBotton) {

        var iconChatOpen = $create("div");
        iconChatOpen.setAttribute("id", "blip-chat-open-iframe");
        iconChatOpen.classList.add("icon-chat-open")

        var iconChat = $create("div");
        iconChat.setAttribute("id", "blip-chat-icon");

        var iconChatImageTop = $create("img");
        iconChatImageTop.setAttribute("src", iconChatButtonTop);
        iconChatImageTop.classList.add("top")

        var iconChatImageBotton = $create("img");
        iconChatImageBotton.setAttribute("src", iconChatButtonBotton);
        iconChatImageBotton.classList.add("bottom")

        var iconChatClose = $create("svg");
        iconChatClose.setAttribute('id', 'blip-chat-close-icon');
        iconChatClose.setAttribute('viewBox', '0 0 40 40');
        iconChatClose.setAttribute('style', 'display:none;');
        iconChatClose.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        var svgContent = `
                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="Close" fill="#FFFFFF" fill-rule="nonzero">
                            <g id="close" transform="translate(14.000000, 14.000000)">
                                <path
                                    d="M7.62601627,5.78918918 L11.8536585,1.54054054 C12.0487805,1.34594595 12.0487805,1.05405406 11.8536585,0.859459461 L11.203252,0.178378378 C11.00813,-0.0162162161 10.7154471,-0.0162162161 10.5203252,0.178378378 L6.26016258,4.42702704 C6.13008127,4.55675677 5.93495933,4.55675677 5.80487802,4.42702704 L1.54471545,0.145945946 C1.34959349,-0.0486486486 1.05691057,-0.0486486486 0.861788617,0.145945946 L0.178861788,0.827027029 C-0.0162601625,1.02162162 -0.0162601625,1.31351352 0.178861788,1.50810811 L4.43902439,5.75675678 C4.56910569,5.88648652 4.56910569,6.08108111 4.43902439,6.21081085 L0.146341463,10.4918919 C-0.0487804876,10.6864865 -0.0487804876,10.9783784 0.146341463,11.172973 L0.829268292,11.8540541 C1.02439024,12.0486486 1.31707317,12.0486486 1.51219512,11.8540541 L5.77235773,7.60540544 C5.90243904,7.4756757 6.09756098,7.4756757 6.22764229,7.60540544 L10.4878049,11.8540541 C10.6829268,12.0486486 10.9756098,12.0486486 11.1707317,11.8540541 L11.8536585,11.172973 C12.0487805,10.9783784 12.0487805,10.6864865 11.8536585,10.4918919 L7.62601627,6.24324324 C7.49593496,6.1135135 7.49593496,5.91891892 7.62601627,5.78918918 Z"
                                    id="path-1"></path>
                            </g>
                        </g>
                    </g>
                    `
        iconChatClose.innerHTML = svgContent;


        iconChat.appendChild(iconChatImageTop);
        iconChat.appendChild(iconChatImageBotton);
        iconChatOpen.appendChild(iconChat);
        iconChatOpen.appendChild(iconChatClose);

        return iconChatOpen;
    };
    //TODO - Implmeentar abertura do chat TOOGGLE
    var openChat = () => {
        let iconChatOpen = document.querySelector('#blip-chat-open-iframe');
        iconChatOpen.onclick = () => {
            var mainDiv = document.getElementById("start-screen"); //o menu principal
            mainDiv.classList.add("fade-out"); //movo para esquerda(ele some) o menu principal

            mainDiv.addEventListener("animationend", (ev) => {
                        if (ev.type === "animationend") {
                            mainDiv.style.display = "none";
                        }
                    }, false);
        }
    }

    return {
        create: create,
        openChat: openChat
    }
})();





//     //TODO - implementar a função - Click
//     // self._bubble.onclick = function() {
//     //     self.chat.widget._openChat(); //função específica do blip
//     // };


// export const insertOpenChatButton = (iconChatButtonTop, iconChatButtonBotton) => {

//     //create icon-button
//     var iconChatOpen = $create("div");
//     iconChatOpen.setAttribute("id", "blip-chat-open-iframe");
//     iconChatOpen.classList.add("icon-chat-open")

//     var iconChat = document.createElement("div");
//     iconChat.setAttribute("id", "blip-chat-icon");

//     var iconChatImageTop = document.createElement("img");
//     iconChatImageTop.setAttribute("src", iconChatButtonTop);
//     iconChatImageTop.classList.add("top")

//     var iconChatImageBotton = document.createElement("img");
//     iconChatImageBotton.setAttribute("src", iconChatButtonBotton);
//     iconChatImageBotton.classList.add("bottom")

//     var iconChatClose = document.createElement("svg");
//     iconChatClose.setAttribute('id','blip-chat-close-icon');
//     iconChatClose.setAttribute('viewBox','0 0 40 40');
//     iconChatClose.setAttribute('style','display:none;');
//     iconChatClose.setAttribute('xmlns','http://www.w3.org/2000/svg');
//     var svgContent =   `
//                 <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
//                     <g id="Close" fill="#FFFFFF" fill-rule="nonzero">
//                         <g id="close" transform="translate(14.000000, 14.000000)">
//                             <path
//                                 d="M7.62601627,5.78918918 L11.8536585,1.54054054 C12.0487805,1.34594595 12.0487805,1.05405406 11.8536585,0.859459461 L11.203252,0.178378378 C11.00813,-0.0162162161 10.7154471,-0.0162162161 10.5203252,0.178378378 L6.26016258,4.42702704 C6.13008127,4.55675677 5.93495933,4.55675677 5.80487802,4.42702704 L1.54471545,0.145945946 C1.34959349,-0.0486486486 1.05691057,-0.0486486486 0.861788617,0.145945946 L0.178861788,0.827027029 C-0.0162601625,1.02162162 -0.0162601625,1.31351352 0.178861788,1.50810811 L4.43902439,5.75675678 C4.56910569,5.88648652 4.56910569,6.08108111 4.43902439,6.21081085 L0.146341463,10.4918919 C-0.0487804876,10.6864865 -0.0487804876,10.9783784 0.146341463,11.172973 L0.829268292,11.8540541 C1.02439024,12.0486486 1.31707317,12.0486486 1.51219512,11.8540541 L5.77235773,7.60540544 C5.90243904,7.4756757 6.09756098,7.4756757 6.22764229,7.60540544 L10.4878049,11.8540541 C10.6829268,12.0486486 10.9756098,12.0486486 11.1707317,11.8540541 L11.8536585,11.172973 C12.0487805,10.9783784 12.0487805,10.6864865 11.8536585,10.4918919 L7.62601627,6.24324324 C7.49593496,6.1135135 7.49593496,5.91891892 7.62601627,5.78918918 Z"
//                                 id="path-1"></path>
//                         </g>
//                     </g>
//                 </g>
//                 `
//     iconChatClose.innerHTML = svgContent;


//     iconChat.appendChild(iconChatImageTop);
//     iconChat.appendChild(iconChatImageBotton);
//     iconChatOpen.appendChild(iconChat);
//     iconChatOpen.appendChild(iconChatClose);

//     return iconChatOpen;
// }