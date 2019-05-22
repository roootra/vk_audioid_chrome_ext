var popperURL = chrome.extension.getURL('/popper.min.js');
var tippyURL = chrome.extension.getURL('/tippy.min.js');

$.get(chrome.extension.getURL('/contentExt.js'), 
	function(data) {
    if(window.location.href.indexOf('vk.com') !== -1)
      //tippy js
      var popperElement = document.createElement("script")
      var tippyElement = document.createElement("script")
      popperElement.setAttribute("src", popperURL)
      tippyElement.setAttribute("src", tippyURL)
      document.getElementsByTagName("head")[0].appendChild(popperElement)
      document.getElementsByTagName("head")[0].appendChild(tippyElement)
      //injecting a script
      var script = document.createElement("script");
      script.setAttribute("type", "text/javascript");
      script.innerHTML = data;
      document.getElementsByTagName("head")[0].appendChild(script);
	}
);