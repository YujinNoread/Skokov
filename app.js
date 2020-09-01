/* slider*/

// $('.slider-block').slick({
// 	dots:true,
// 	infinite:true,
// 	rows:2,
// 	slidesPerRow:3,
// 	slidesToShow:1,
// 	arrows:false,
// });

/* video-block-modal */

let videoButton = document.querySelector(".video__button");
let videoContent = document.querySelector(".video__content")
let video = document.querySelector(".youtube-video1")
function openVideo(){
	videoContent.classList.add("show");
	videoContent.classList.remove("hide");
}
function closeVideo(){
	videoContent.classList.remove("show");
	videoContent.classList.add("hide");
}
videoButton.addEventListener("click",openVideo);
videoContent.addEventListener("click", function(event){
	if(event.target === videoContent){
		closeVideo();
		video.src=video.src;
	}
})

// mobile menu

let mobileMenu = document.querySelector(".nav-mobile-menu");
let mainMenu = document.querySelector(".navigation");

mobileMenu.addEventListener("click",function(){
	mobileMenu.classList.toggle("active-menu");
	if(mobileMenu.classList.contains("active-menu")){
		mainMenu.classList.add("active-menu");
	}else{
		mainMenu.classList.remove("active-menu");
	}
})

// change header color by scroll

let headerColor = document.querySelector(".header")
function changeColorHeaderByScroll (){
	if(window.pageYOffset > ((document.documentElement.scrollHeight/100)*0.1)){
		headerColor.classList.add("color-black");
	}else{
		headerColor.classList.remove("color-black");
	}
}
document.addEventListener("DOMContentLoaded", changeColorHeaderByScroll);
window.addEventListener("scroll", changeColorHeaderByScroll);