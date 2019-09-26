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

//------------------------------------------LightBox------------------------------------------

//On click abre o toggle
//Cada função está associada a um item especifico, e a call da função provêm individualmente de cada Item

function toggleLightbox() {
    document.getElementById('lightbox').classList.toggle("show--lightbox");
    
}

function toggleLightbox2(){
    document.getElementById('lightbox2').classList.toggle("show--lightbox");
    
}
function toggleLightbox3(){
    document.getElementById('lightbox3').classList.toggle("show--lightbox");
    
}

function toggleLightbox4(){
    document.getElementById('lightbox4').classList.toggle("show--lightbox");
    
}

function toggleLightbox5(){
    document.getElementById('lightbox5').classList.toggle("show--lightbox");
    
}

function toggleLightbox6(){
    document.getElementById('lightbox6').classList.toggle("show--lightbox");
    
}










