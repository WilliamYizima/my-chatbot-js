export default class Chatbot {

    constructor() {
        this._visible = true;
    }

    toggleChat() {
        let iconChatOpen = document.querySelector('#blip-chat-open-iframe');
        iconChatOpen.onclick = () => {
            var mainDiv = document.getElementById("start-screen");
            if (this._visible) {
                console.log('estou entrando no closeChat')
                this.closeChat();
                console.log(this._visible)
            }
            if (!this._visible) {
                //TODO - inserir effect de fade in
                console.log('estou entrando no Open chat')
                mainDiv.style.display = "";
                mainDiv.classList.remove("fade-out");
                this._visible = true;
            }
        }
    }


    closeChat() {
        var mainDiv = document.getElementById("start-screen");
        mainDiv.classList.add("fade-out");

        mainDiv.addEventListener("animationend", (ev) => {
            if (ev.type === "animationend" && this._visible == true) {
                mainDiv.style.display = "none";
                this._visible = false;
            }
        }
            , false);

    }
}
// }