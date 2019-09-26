//Menu e lightbox

// Foi selecionado os objetos que seriam modificados no toggle de abertura
function clickBurger() {
    document.getElementById('navtop__menu').classList.toggle("navtop--menu--active");
    document.getElementById('logo').classList.toggle("header--main__title--active");
    document.getElementById('search').classList.toggle("header--main__search--active");    
    document.getElementById('shopad').classList.toggle("shop--ad--active");    
    document.getElementById('burger').classList.toggle("header--main__burger--active");    
    document.getElementById('close').classList.toggle("header--main__close--active");    
    document.getElementById('bag').classList.toggle("header--main__bag--active");    
}

//