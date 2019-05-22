function getAudioId(){
    var embeder = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if(mutation.type === "childList" && mutation.target.classList.contains("audio_row__info") && 
            mutation.addedNodes.length !== 0 && mutation.previousSibling.classList.contains("audio_row__duration") &&
            !mutation.addedNodes[0].classList.contains("audio_row__action_audioidRevealer")){
                audioid = mutation.target.parentNode.parentNode.parentNode.getAttribute("data-full-id")
                //creating a link
                audioidButton = document.createElement("button")
                audioidButton.setAttribute("type", "button")
                audioidButton.setAttribute("id", "audioidRevealerButton")
                audioidButton.setAttribute("class", "audio_row__action audio_row__action_audioidRevealer")
                audioidButton.setAttribute("aria-label", "audioidRevealer")
                audioidButton.setAttribute("audioid", audioid)
                audioidButton.setAttribute("onmouseover", "audioidPopupShow(this.getAttribute('audioid'))")
                audioidButton.setAttribute("onClick", "copyAudioidToClipboard(this.getAttribute('audioid'))")
                audioidButton.setAttribute("contentEditable", "inherit")
                audioidButton.textContent = ""
                //css block
                audioidButton.style.cssText = `
                    color: blue; 
                    text-align: center; 
                    position: absolute; 
                    margin: 5px;
                    border: 2px;
                    left: -30px;
                    top: -2px;
                    padding: 2px;
                    height: 17px;
                    background: url("https://image.flaticon.com/icons/svg/149/149201.svg") center no-repeat;`
                //end of css block
                //inserting a button
                mutation.addedNodes[0].insertBefore(audioidButton, mutation.addedNodes[0].childNodes[0])
            }
        })
    })
    embeder.observe(document.querySelector("#page_layout"), {
        attributes: true,
        subtree: true,
        childList: true
    })
}

var audioidPopupShow = function(audioid){
    tippy('#audioidRevealerButton', {
        content: "audioid: " + audioid + "<br> Click to copy to clipboard!",
      })
}

var copyAudioidToClipboard = function(audioid){
    window.event.stopPropagation()
    navigator.clipboard.writeText(audioid)
    tippy('#audioidRevealerButton', {
        content: "Copied to clipboard!",
      })
}

getAudioId()

