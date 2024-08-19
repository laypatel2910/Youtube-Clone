var menuIorn = document.querySelector(".menu-icon");
var Sidebar = document.querySelector(".Sidebar");
var mainContainer = document.querySelector(".mainContainer");
// var card = document.querySelectorAll(".card");

menuIorn.onclick = function () {
    Sidebar.classList.toggle("smaller-sidebar")
    mainContainer.classList.toggle("larger-mainContainer")
    // card.classList.toggle("larger-card")
}