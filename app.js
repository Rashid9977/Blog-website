let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
    searhIcon.classList.remove('fa-times');
    searchForm.classList.remove('active')

}
let searhIcon = document.querySelector('#search-icon');
let searchForm = document.querySelector('.search-form');

searhIcon.onclick = () => {
    searhIcon.classList.toggle('fa-times');
    searchForm.classList.toggle('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active')
}
window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    searhIcon.classList.remove('fa-times');
    searchForm.classList.remove('active')
}