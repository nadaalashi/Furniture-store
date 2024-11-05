let menu = document.getElementById('menu-icon');
let navBar = document.querySelector('.navbar');

menu.onclick = () =>{
    navBar.classList.toggle('active');
}

window.onscroll = () =>{
    navBar.classList.remove('active');
}


