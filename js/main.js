
const header_section = document.getElementById('header_section');

window.addEventListener('scroll', () => {
    console.log(window.scrollY)
    if(window.scrollY >= 350) {
        header_section.classList.add('hide');
        console.log('350 > : ',window.scrollY)
    }
    else {
        header_section.classList.remove('hide');
    }
});



// mobile menu 
/* const menu_bar = document.getElementById('menu_bar_icon');
const menu_bar_close = document.getElementById('menu_bar_close_icon');
const menu_bar_overlay = document.getElementById('menu_bar_close_overlay');
const mobile_menu = document.getElementById('mobile_menu');
menu_bar.addEventListener('click', () => {
    mobile_menu.classList.add('active');
    mobile_menu.classList.add('active');
});
menu_bar_close.addEventListener('click', () => {
    mobile_menu.classList.remove('active');
    mobile_menu.classList.remove('active');
});
mobile_menu.addEventListener('click', () => {
    mobile_menu.classList.remove('active');
    mobile_menu.classList.remove('active');
}); */







