(function() {
	const select = document.querySelector(".js-select");

	const placeholder = select.querySelector(".js-select__placeholder");
	const valuesBlock = select.querySelector(".js-select__values");
	const values = select.querySelectorAll(".js-select__values li");
	const input = select.querySelector("input[name='birth']");

	// убираем активный класс
	const removeActiveValue = function() {
		[].forEach.call(values, function(value) {
			if (value.classList.contains("form__select-value--active")) {
				value.classList.remove("form__select-value--active");
				return;
			}
		});
	};

	// открываем-закрываем select по клику на весь placeholder
	placeholder.onclick = function () {
		select.classList.toggle("form__select--opened");
	};

	// обработчик на выбор значения из списка
	[].forEach.call(values, function(value) {
		value.onclick = function () {
			placeholder.innerHTML = value.dataset.value;
			input.value = value.dataset.value;
			
			removeActiveValue();
			value.classList.add("form__select-value--active");
			placeholder.classList.add("form__select-placeholder--choosen");
			select.classList.remove("form__select--opened");
		}
	});

	// закрытие по клику вне окна
	document.addEventListener("click", function(event) {
		if (!select.contains(event.target)) { 
			if (select.classList.contains("form__select--opened")) {
				select.classList.remove("form__select--opened");
			}
		}
	});

  // закрытие по esc
  window.addEventListener("keydown", function(event) {
  	if (event.keyCode === 27 && select.classList.contains("form__select--opened")) {
  		select.classList.remove("form__select--opened");
  	}
  });
})();