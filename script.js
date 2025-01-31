document.addEventListener("DOMContentLoaded", function () {

let hamburgerIcon =document.getElementById("hamburgerIcon");
let closeIcon =document.getElementById("closeIcon");
let menuDrawerContainer=document.getElementById("menuDrawerContainer");


    hamburgerIcon.onclick=function(){
    closeIcon.classList.toggle("nav-bar-item-xmark-visibility");
    hamburgerIcon.classList.toggle("nav-bar-item-hamburger-visibility");
    menuDrawerContainer.classList.toggle("nav-bar-item-xmark-visibility");

};

    closeIcon.onclick=function(){
    closeIcon.classList.toggle("nav-bar-item-xmark-visibility");
    hamburgerIcon.classList.toggle("nav-bar-item-hamburger-visibility");
    menuDrawerContainer.classList.toggle("nav-bar-item-xmark-visibility");
};
});
