// ? ============================== Responsie Navbar ====================

let tglBtn = document.querySelector(".icons");
let header = document.querySelector("header");

tglBtn.addEventListener('click', ()=>{
    header.classList.toggle("active");
})


// todo ========================== Dark mode ============================

let themeBtn = document.querySelector(".theme-btn");
let body = document.querySelector("body");
let solidBtn = document.querySelector(".fa-solid");
let regularBtn = document.querySelector(".fa-regular");
themeBtn.addEventListener('click', ()=> {
    body.classList.toggle('light-dark-mode');
    if(body.classList.contains('light-dark-mode')){
        regularBtn.style.display = "none"
        solidBtn.style.display = "block"
    } else{
        regularBtn.style.display = "block"
        solidBtn.style.display = "none"
    }
});