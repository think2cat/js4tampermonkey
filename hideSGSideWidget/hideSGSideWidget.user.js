// ==UserScript==
// @name         hideSGSideWidget
// @name:zh-CN   隐藏segmentfault右边微博微信分享
// @namespace    cat
// @version      0.1
// @description  隐藏左边微博微信分享，不然阅读比较碍眼
// @author       Gavin
// @include      https://segmentfault.com/*
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

	let timer = 0;
	let clearAlert = () => {
        try{
            let widgetDom = document.getElementById('side-widget-votes-btn')
            if(widgetDom){
                widgetDom.parentNode.innerHTML = ''
            }
        }catch(e){
        }
	};

    window.onload = function(){
		timer = setInterval(clearAlert, 3000);
		setTimeout(()=>{
			clearInterval(timer);
		},60000);
    };
})();
