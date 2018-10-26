(function() {
	const sliderBlock = document.querySelector('.js-levels');
	const slider = sliderBlock.querySelector('.js-levels__slider');
	const input = sliderBlock.querySelector('.js-lavels__input');
	const gragient = sliderBlock.querySelector('.js-levels__grad');
	const gragientStops = gragient.querySelectorAll('stop');
	const thumb = sliderBlock.querySelector('.js-levels__thumb');
	const labels = sliderBlock.querySelector('.js-levels__labels').children;
	const bg = sliderBlock.querySelector('.js-levels__bg');

	const levelsNumber = 4;
	const sliderBreakPoint = 564;
	const thumbWidth = thumb.getBoundingClientRect().width;
	const thumbOverflow = thumbWidth / 2;

	const checkSliderType = function() {
		return sliderBlock.classList.contains('levels--isHorisontal');
	}

	const changeSliderBg = function() {
		const isHorisontal = checkSliderType();

		if (isHorisontal) {
			bg.setAttribute("viewBox","0 0 100 140");
			gragient.setAttribute("gradientTransform", "rotate(0)");
		} else {
			bg.setAttribute("viewBox","0 0 140 100");
			gragient.setAttribute("gradientTransform", "rotate(90)");
		}
	};

	const getSliderSize = function() {
		const isHorisontal = checkSliderType();

		return (isHorisontal) ? slider.offsetWidth : slider.offsetHeight;
	};

	const getSectionSize = function() {
		const sliderSize = getSliderSize();

		return sliderSize / levelsNumber;
	};

	const getCoords = function(elem) {
	  const box = elem.getBoundingClientRect();

	  return {
	    top: box.top + pageYOffset,
	    left: box.left + pageXOffset
	  };
	}

	const getStopPoint = function(level) {
		const sectionSize = getSectionSize();

		switch(level) {
			case 0: 
				return -thumbOverflow;
			case 1:
				return sectionSize - thumbOverflow;
			case 2:
				return sectionSize * 2 - thumbOverflow;
			case 3:
				return sectionSize * 4 - thumbOverflow;
		}
	};

	const getLevel = function(coord, sliderLeft) {
		const left = coord - sliderLeft;
		const sectionSize = getSectionSize();

		if (left >= 0 && left <= (sectionSize * 0.5)) {
				return 0;
		} else if (left >= (sectionSize * 0.5) && left <= (sectionSize * 1.5)) {
				return 1;
		} else if (left >= (sectionSize * 1.5)  && left <= (sectionSize * 3)) {
				return 2;
		} else {
				return 3;
		}
	};

	const moveBg = function(stopPoint) {
		const sliderSize = getSliderSize();
	  const bgStopPoint = Math.round(((stopPoint + thumbOverflow) * 100 / sliderSize), -1);

		gragientStops[1].setAttribute("offset", bgStopPoint +'%');
		gragientStops[2].setAttribute("offset", bgStopPoint +'%');
	}

	const moveThumb = function(stopPoint) {
		const isHorisontal = checkSliderType();

		if (isHorisontal) {
			thumb.style.left = stopPoint + 'px';
		} else {
			thumb.style.top = stopPoint + 'px';
		}
	};

	const moveSlider = function(stopPoint) {
	  moveBg(stopPoint);
	  moveThumb(stopPoint);
	};

	const checkSlider = function() {
		const isHorisontal = checkSliderType();
	 	return (isHorisontal && window.innerWidth > sliderBreakPoint) || (!isHorisontal && window.innerWidth <= sliderBreakPoint);
	};

	const resetThumbPos = function() {
		const isHorisontal = checkSliderType();

		if (isHorisontal) {
				thumb.style.top = '15px';
			} else {
				thumb.style.left = '15px';
		}
	}

	// обработчик движения мышей
	thumb.onmousedown = function(e) {
		const isHorisontal = checkSliderType();
		const thumbCoords = getCoords(thumb);

		const thumbShift = (isHorisontal) 
			? e.pageX - thumbCoords.left 
			: e.pageY - thumbCoords.top;

		const sliderCoords = getCoords(slider);
    const sliderSize = (isHorisontal) ? slider.offsetWidth : slider.offsetHeight;
    const sliderMinEdge = (isHorisontal) ? sliderCoords.left : sliderCoords.top;
    const sliderMaxEdge = sliderSize - thumbWidth;

		document.onmousemove = function(e) {
      //  вычесть координату родителя, т.к. position: relative
      const mousePoint = (isHorisontal) ? e.pageX : e.pageY;
      let newThumbPos = mousePoint - thumbShift - sliderMinEdge;

      // курсор ушёл вне слайдера
      if (newThumbPos < -thumbOverflow) {
        newThumbPos = -thumbOverflow;
      } else if (newThumbPos > sliderMaxEdge + thumbOverflow) {
        newThumbPos = sliderMaxEdge + thumbOverflow;
      }

    	moveSlider(newThumbPos);
    };

		document.onmouseup = function(e) {
			document.onmousemove = null;
	    document.onmouseup = null;
	    
	    const thumbCoords = getCoords(thumb);
	    const thumbCoord = (isHorisontal) ? thumbCoords.left : thumbCoords.top;
	    const level = getLevel(thumbCoord, sliderMinEdge);
	    const stopPoint = getStopPoint(level);

	    input.value = level;
	    moveSlider(stopPoint);
		};
	};

	// выбор уровня при клике на шкалу
	slider.onclick = function(e) {
		const isHorisontal = checkSliderType();
		const sliderCoords = getCoords(slider);
		const clickPos = (isHorisontal) ? e.pageX : e.pageY;
		const sliderMinEdge = (isHorisontal) ? sliderCoords.left : sliderCoords.top;

    const level = getLevel(clickPos, sliderMinEdge);
    const stopPoint = getStopPoint(level);

    input.value = level;
    moveSlider(stopPoint);
	}

	thumb.ondragstart = function() {
	  return false;
	};

	// сохранение выбранного уровня при resize и изменение вида слайдера
	window.addEventListener('resize', function() {
		const isSliderFitted = checkSlider();

		if (!isSliderFitted) {
			sliderBlock.classList.toggle('levels--isHorisontal');
			resetThumbPos();
			changeSliderBg();
			
		}
		const choosenLevel = Number(input.value);
		const stopPoint = getStopPoint(choosenLevel);

    moveSlider(stopPoint);    

	});

	// переключение уровня при клике на label
	[].forEach.call(labels, function(label, index)  {
		label.onclick = function() {
			const stopPoint = getStopPoint(index);

			input.value = index;
    	moveSlider(stopPoint);
		}
	});

	const sliderInit = function() {
		if (window.innerWidth > sliderBreakPoint) {
			sliderBlock.classList.add('levels--isHorisontal');
			changeSliderBg();
		}

		// выставляю свой уровень владения JS
		const mylevel = 2;
		const stopPoint = getStopPoint(mylevel);

		input.value = mylevel;
		moveSlider(stopPoint);
	};
	
	sliderInit();
})();