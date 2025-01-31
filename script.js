let hamburgerIcon =document.getElementById("hamburgerIcon");
let closeIcon =document.getElementById("closeIcon");

hamburgerIcon.onclick=function(){
    closeIcon.classList.toggle("nav-bar-item-xmark-visibility");
    hamburgerIcon.classList.toggle("nav-bar-item-hamburger-visibility");
};

closeIcon.onclick=function(){
    closeIcon.classList.toggle("nav-bar-item-xmark-visibility");
    hamburgerIcon.classList.toggle("nav-bar-item-hamburger-visibility");
};