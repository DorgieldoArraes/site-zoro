// mobile search box 
const searchIcon = document.querySelector('.search-icon');
const searchBox = document.querySelector('.search-box');

searchIcon.addEventListener('click', () => {
    searchBox.classList.toggle('active')
})

// header menu 
const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');

menuIcon.addEventListener('click' , () => {
    if(menuIcon.classList.contains('bx-menu-alt-right')){
        menuIcon.classList.remove('bx-menu-alt-right');
        menuIcon.classList.add('bx-chevrons-right');
        menu.classList.toggle('active');
    }else{
        menuIcon.classList.remove('bx-chevrons-right');
        menuIcon.classList.add('bx-menu-alt-right');
        menu.classList.toggle('active');
    }
})   
// user login // 
const userIcon = document.querySelector('.bx-user');

userIcon.addEventListener('click', () => {
    window.location.href = 'tela-de-login.html'; // Redireciona para a página de login
});

// mode change  
const modeChangeIcon = document.querySelector('.mode-change-icon');

modeChangeIcon.addEventListener('click' , () => {
    if(modeChangeIcon.classList.contains('bx-moon')){
        modeChangeIcon.classList.remove('bx-moon');
        modeChangeIcon.classList.add('bxs-moon');
        modeChangeIcon.classList.toggle('active');
        document.body.classList.toggle('dark-theme');
    }else{
        modeChangeIcon.classList.remove('bxs-moon');
        modeChangeIcon.classList.add('bx-moon');
        modeChangeIcon.classList.toggle('active');
        document.body.classList.toggle('dark-theme');
    }
})
