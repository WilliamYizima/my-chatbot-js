export default class Chatbot {
    
    constructor(){
        
    }

    openChat(){
        let iconChatOpen = document.querySelector('#blip-chat-open-iframe');
        iconChatOpen.onclick = () => {
            var mainDiv = document.getElementById("start-screen"); 
            mainDiv.classList.add("fade-out"); 

            mainDiv.addEventListener("animationend", (ev) => {
                        if (ev.type === "animationend") {
                            mainDiv.style.display = "none";
                        }
                    }, false);
        }
    }
}