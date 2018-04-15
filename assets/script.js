"use strict";
window.onload = function() {
	if ('serviceWorker' in navigator){
		navigator.serviceWorker.register('../service-worker.js');
	}


	/* Scroll events */
	var navs = document.getElementsByClassName("js-scroll");
	Array.prototype.forEach.call(navs, function(el) {
	    el.onclick = function(){ scroll( el.dataset.scroll ) };
	});
	document.getElementById('up-scroll-container').onclick = function(){ scroll( 'main-content' ) };

	function scroll(id){
		sidebarClose();
		var elmnt = document.getElementById(id);
		elmnt.scrollIntoView();
	}


	/* Open and close sidebar navigation */
	document.getElementById('open-aside').onclick = function(){
		var aside = document.getElementsByTagName("aside")[0];
		if( aside.id == 'open-sidebar' ){
			sidebarClose();
		}else{
			aside.id = 'open-sidebar';
			aside.style.height = document.getElementById('main-content').offsetHeight + 'px';
		}
	};

	window.onresize = function(){
		if( window.innerWidth > 1000){
			sidebarClose();
		}
	};

	function sidebarClose(){
		var aside = document.getElementsByTagName("aside")[0];
		aside.id = '';
		aside.style.height = 'initial';
	}


	/* Show source code */
	var sources = document.getElementsByClassName("source");
	Array.prototype.forEach.call(sources, function(el) {
	    el.onclick = function(){ showSource( el ) };
	});

	function showSource(el){
		var output = '<pre>' + el.parentElement.parentElement.childNodes[1].lastChild.innerHTML + '</pre>';
		window.open().document.write( output );
	}


	/* Copy source code */
	var copies = document.getElementsByClassName("copy");
	Array.prototype.forEach.call(copies, function(el) {
	    el.onclick = function(){ makeCopy( el.parentElement.parentElement.childNodes[1].lastChild.innerText ) };
	});

	function makeCopy(text){
		var input = document.createElement("TEXTAREA");
		var parent = document.getElementById("page");
		input.value = text;
		parent.appendChild(input);
		input.select();
		document.execCommand("Copy");
		parent.removeChild(input);
		alert("Code copied");
	}


};