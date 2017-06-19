(function common() {
	var navToggle = document.querySelector(".main-nav__toggle");
	var mainNav = document.querySelector(".main-nav");
	mainNav.classList.remove("main-nav--nojs");

	navToggle.addEventListener("click", function(event) {
		if(mainNav.classList.contains("main-nav--closed")) {
			mainNav.classList.remove("main-nav--closed");
			mainNav.classList.add("main-nav--opened");
			} else {
				mainNav.classList.add("main-nav--closed");
				mainNav.classList.remove("main-nav--opened");
			};
	});

})();

function main() {
  

};

if(document.location.href.indexOf('index') != -1) {
   main(); 
};