export var bubble = (function () {
  let $create = document.createElement.bind(document);

    var create = function(messageBubble) {
        var bubbleContainer = $create("div");
        bubbleContainer.setAttribute("id","bubble-container");
    
        var _bubble = $create("div");
        _bubble.setAttribute("id","message-bubble")
        _bubble.classList.add('display');
    
        var triangle = $create("div");
        triangle.setAttribute("id","triangle")
    
        var message = $create("div");
        message.setAttribute("id","message");
        message.innerHTML = messageBubble;
    
        _bubble.appendChild(message);
        _bubble.appendChild(triangle);
        bubbleContainer.appendChild(_bubble);
    
        return bubbleContainer;
    };


    var hide = function(idBubble="message-bubble"){
        let _bubble = document.querySelector(`#${idBubble}`);
        _bubble.classList.add('hide');
        _bubble.classList.remove('display');
    }
  
    var changeBubble = function(idBubble="message-bubble"){
        let _bubble = document.querySelector(`#${idBubble}`);
        if (_bubble.classList.contains('display')) hide();
};
    return {
      create: create,
      hide: hide,
      changeBubble:changeBubble
    }
  })();





    //TODO - implementar a função - Click
    // self._bubble.onclick = function() {
    //     self.chat.widget._openChat(); //função específica do blip
    // };
