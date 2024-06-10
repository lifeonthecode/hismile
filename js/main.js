
const header_section = document.getElementById('header_section');

window.addEventListener('scroll', () => {
    if(window.scrollY >= 350) {
        header_section.classList.add('hide');
    }
    else {
        header_section.classList.remove('hide');
    }
});



// mobile menu 
const menu_bar = document.getElementById('menu_bar_icon');
const menu_bar_close = document.getElementById('menu_bar_close_icon');

const mobile_menu_overlay = document.getElementById('mobile_menu_overlay');
const mobile_menu = document.getElementById('mobile_menu');
menu_bar.addEventListener('click', () => {
    mobile_menu.classList.add('active');
    mobile_menu_overlay.classList.add('active')
});

menu_bar_close.addEventListener('click', () => {
    mobile_menu.classList.remove('active');
    mobile_menu_overlay.classList.remove('active');
});

mobile_menu_overlay.addEventListener('click', () => {
    mobile_menu.classList.remove('active');
    mobile_menu_overlay.classList.remove('active');
})







