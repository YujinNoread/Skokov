
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


	