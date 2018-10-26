(function() {
	const navToggle = document.querySelector(".nav__toggle");
	const mainNav = document.querySelector(".nav");
	const navLinks = document.querySelectorAll(".nav__item");

	// открытие-закрытие меню по кнопке
	navToggle.addEventListener("click", function(event) {
		if(mainNav.classList.contains("nav--closed")) {
			mainNav.classList.remove("nav--closed");
			mainNav.classList.add("nav--opened");
			} else {
				mainNav.classList.add("nav--closed");
				mainNav.classList.remove("nav--opened");
			};
	});

	// закрываем меню после клика по его пункту
	[].forEach.call(navLinks, function(link) {
		link.addEventListener('click', function() {
			if(mainNav.classList.contains("nav--opened")) {
				mainNav.classList.remove("nav--opened");
				mainNav.classList.add("nav--closed");
			}
		});
	});

	// закрытие по клику вне меню
	document.addEventListener("click", function(event) {
		if (!mainNav.contains(event.target)) { 
			if(mainNav.classList.contains("nav--opened")) {
				mainNav.classList.remove("nav--opened");
				mainNav.classList.add("nav--closed");
			}
		}
	});

  // закрытие меню по esc
  window.addEventListener("keydown", function(event) {
  	if (event.keyCode === 27 && mainNav.classList.contains("nav--opened")) {
  		mainNav.classList.remove("nav--opened");
			mainNav.classList.add("nav--closed");
  	}
  });

  // показ страницы с эффектом медленного появления
	document.body.classList.remove('body-hidden');
})();
