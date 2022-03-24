"use strict"

//! MENU BURGER 

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}


// const animItems = document.querySelectorAll('_anim-items');

// if (animItems.length > 0) {
// 	window.addEventListener('scroll', animOnScroll);

// 	function animOnScroll(params) {
// 		for (let index = 0; index < animItems.length; index++) {
// 			const animItem = animItems[index];
// 			const animItemHeight = animItem.offsetHeight;
// 			const animItemOffet = offset(animItem).top;
// 			const animStart = 4;

// 			let animItemPoint = window.innerHeight - animItemHeight / animStart;

// 			if (animItemHeight > window.innerHeight) {
// 				animItemPoint = window.innerHeight - window.innerHeight / animStart;
// 			}

// 			if ((pageYOffset > animItemOffet - animItemPoint) && pageYOffset < (animItemOffet + animItemHeight)) {
// 				animItem.classList.add('_anim');
// 			} else {
// 				animItem.classList.add('_anim');
// 			}
// 		}
// 	}
// 	function offset(el) {
// 		const rect = el.getBoundingClientRect(),
// 			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
// 			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
// 		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
// 	}
// }

function onEntry(entry) {
	entry.forEach(change => {
		if (change.isIntersecting) {
			change.target.classList.add('element-show');
		}
	});
}



let options = {
	threshold: [0.5]
};
let observer = new
	IntersectionObserver(onEntry, options);
let elements =
	document.querySelectorAll('.element-animation');

for (let elm of elements) {
	observer.observe(elm);
}

// alert("hello world!");

$(document).ready(function () {
	$('.price__box').slick({
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: false,
		initialSlide: 1,
		waitForAnimate: false,
		centerMode: true,
		adaptiveHeight: true,
	});

	$('.question__title').click(function (event) {
		$(this).toggleClass('_show').next().slideToggle(300);
	});

});

const screenWidth = window.screen.availWidth;
const revieClass = document.querySelector('.review__body');
if (screenWidth <= 1250) {
	revieClass.classList.add('_container');
}

// const iconMenu = document.querySelector('.menu__icon');
// const menuBody = document.querySelector('.menu__body');
// if (iconMenu) {
// 	iconMenu.addEventListener("click", function (e) {
// 		document.body.classList.toggle('_lock');
// 		iconMenu.classList.toggle('_active');
// 		menuBody.classList.toggle('_active');
// 	});
// }

// const questionItem = document.getElementById("swiper");
// if(questionItem){
// 	questionItem.addEventListener("click" , function(e){
// 	questionItem.classList.toggle('_show');
// 	});
// } 