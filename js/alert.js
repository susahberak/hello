!function(){"use strict";var e={addClass:function(e,t){var n=e.className,l=""!==n?" ":"",o=n+l+t;e.className=o},removeClass:function(e,t){var n=" "+e.className+" ";n=n.replace(/(\s+)/gi," ");var l=n.replace(" "+t+" "," ");l=l.replace(/(^\s+)|(\s+$)/g,""),e.className=l},hasClass:function(e,t){var n=e.className,l=n.split(/\s+/),o=0;for(o in l)if(l[o]==t)return!0;return!1},addEvent:function(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent?e.attachEvent("on"+t,n):e["on"+t]=n},removeEvent:function(e,t,n){e.removeEventListener?e.removeEventListener(t,n,!1):e.detachEvent?e.detachEvent("on"+t,n):delete e["on"+t]},removeElement:function(e){e&&e.parentNode&&e.parentNode.removeChild(e)},setUid:function(e){do e+=Math.floor(1e6*Math.random());while(document.getElementById(e));return e}},t=function(){var t={defaults:{okLabel:"OK",cancelLabel:"BATAL",time:2e3},previousCallback:null,template:'<div class="alerty-overlay" tabindex="-1"></div><div class="alerty"><div class="alerty-title"></div><div class="alerty-content"><p class="alerty-message"></p><div class="alerty-prompt"><input type="text" placeholder="" value=""><div class="input-line"></div></div></div><div class="alerty-action"><a class="btn-cancel"></a><a class="btn-ok"></a></div></div>',setup:function(t,n,l,o,a){var r="function"==typeof l;r&&(a=o,o=l);var i=document.querySelector(".alerty");if(i){e.removeElement(i);var s=this.previousCallback;s&&s()}var c=document.createElement("div");for(c.innerHTML=this.template;c.firstChild;)document.body.appendChild(c.firstChild);var d=document.querySelector(".alerty"),u=document.querySelector(".alerty-overlay"),m=d.querySelector(".alerty-title"),v=d.querySelector(".alerty-message"),p=d.querySelector(".alerty-action"),f=d.querySelector(".btn-ok"),y=d.querySelector(".btn-cancel"),b=d.querySelector(".alerty-prompt"),h=b.querySelector("input");d.id=e.setUid("alerty"),u.id="overlay-"+d.id,e.addClass(u,"active"),e.addClass(d,"alerty-show"),v.innerHTML=n,l&&l.time&&(this.defaults.time=l.time),"prompt"!==t?e.removeElement(b):(h.focus(),l&&l.inputType&&h.setAttribute("type",l.inputType),l&&l.inputPlaceholder&&h.setAttribute("placeholder",l.inputPlaceholder),l&&l.inputValue&&h.setAttribute("value",l.inputValue)),"toasts"===t?(this.previousCallback=o,e.removeElement(m),e.removeElement(p),e.removeElement(u),e.addClass(d,"toasts"),l&&"top"===l.place&&e.addClass(d,"place-top"),l&&l.bgColor&&(d.style.backgroundColor=l.bgColor),l&&l.fontColor&&(v.style.color=l.fontColor)):(e.addClass(document.body,"no-scrolling"),l&&l.title?m.innerHTML=l.title:e.removeElement(m),l&&l.okLabel?f.innerHTML=l.okLabel:f.innerHTML=this.defaults.okLabel,d.style.marginTop=-d.offsetHeight/2+"px","confirm"===t||"prompt"===t?l&&l.cancelLabel?y.innerHTML=l.cancelLabel:y.innerHTML=this.defaults.cancelLabel:e.removeElement(y)),this.bindEvent(d,o,a)},bindEvent:function(t,n,l){var o=this,a=t.querySelector(".btn-ok"),r=t.querySelector(".btn-cancel");e.hasClass(t,"toasts")&&setTimeout(function(){null!==document.getElementById(t.id)&&o.close(t,n)},o.defaults.time),a&&e.addEvent(a,"click",function(){o.close(t,n)}),r&&e.addEvent(r,"click",function(){o.close(t,l)})},close:function(t,n){var l=t.querySelector("input"),o=document.getElementById("overlay-"+t.id);e.removeClass(t,"alerty-show"),e.addClass(t,"alerty-hide"),setTimeout(function(){o&&e.removeClass(o,"active"),e.removeClass(document.body,"no-scrolling"),e.removeElement(t),e.removeElement(o),n&&setTimeout(function(){l?n(l.value):n()},100)},100)}};return{toasts:function(e,n,l){t.setup("toasts",e,n,l)},alert:function(e,n,l){t.setup("alert",e,n,l)},confirm:function(e,n,l,o){t.setup("confirm",e,n,l,o)},prompt:function(e,n,l,o){t.setup("prompt",e,n,l,o)}}};if("undefined"!=typeof module&&module&&module.exports){module.exports=function(){return new t};var n=new t;for(var l in n)module.exports[l]=n[l]}else"function"==typeof define&&define.amd?define(function(){return new t}):window.alerty=new t}();
