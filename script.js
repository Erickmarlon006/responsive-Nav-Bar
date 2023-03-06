hamburguer = document.querySelector(".hamburguer");
hamburguer.onclick = function() {
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
    loginContainer = document.querySelector(".login");
    loginContainer.classList.toggle("not-active");
}
