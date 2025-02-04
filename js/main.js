

const btnMenu = document.querySelector('.btn-menu');
const menu = document.querySelector('.list-container');
const containerMenu = document.querySelector('.menu');
let activador = true;

let enlaces = document.querySelectorAll('.lists li a');
let arriba;

// funcion para menu hamburgesa 
btnMenu.addEventListener('click', () => {
    //console.log("funciona"); 

    document.querySelector('.btn-menu i').classList.toggle('fa-times');

    if(activador){
        menu.style.left = "0";
        menu.style.transition = "0.5s";
        
        activador = false;
    } else {
        activador= false;

        menu.style.left = "-100%";
        menu.style.transition = "0.5s";

        activador = true;

    }


});

//enlaces menu de navegacion clase active

enlaces.forEach((e) => {
   
    e.addEventListener('click', (event) => {
        enlaces.forEach( (link) => {
            link.classList.remove('active');
        });

        event.target.classList.add('active');
    });
});

 //Funciones del scroll

let prevScrollPos = window.scrollY;
let goTop = document.querySelector('.go-top')

window.onscroll = () => {

    let currenScrollPos = window.scrollY;
    //mostrar y ocultar menu 

    if (prevScrollPos > currenScrollPos) {

        containerMenu.style.top = "0";
        containerMenu.style.transition = "0.5s";

    } else {

        containerMenu.style.top = "-60px";
        containerMenu.style.transition = "0.5s";
    }

    prevScrollPos = currenScrollPos;

    // MOstrar y ocultar scroll estilos 

     arriba = window.scrollY;

     if (arriba <= 600) {

        containerMenu.style.borderBottom = 'none';

        goTop.style.right = '-100%';

     } else {

        containerMenu.style.borderBottom = '2px solid #6a329f';

        goTop.style.right = '0';
        goTop.style.transition = '0.5s';
     }
};

goTop.addEventListener('click', () => {
    document.body.scrollTop = 0; //Safari
    document.documentElement.scrollTop = 0; //Resto de navegadores;
});

let quienesSomos = document.querySelector('#quienesSomos');

quienesSomos.addEventListener('click', () => {
    document.body.scrollTop = 600; 
    document.documentElement.scrollTop = 600;
    
});

 

//Fragmento que me dio Claudi

/* window.addEventListener('scroll', () => {
    const menu = document.querySelector('.menu');
    if (window.scrollY > 50) {
        menu.style.background = 'rgba(106, 50, 159, 0.95)';
        menu.style.padding = '0.5rem 2rem';
    } else {
        menu.style.background = 'rgba(255, 255, 255, 0.1)';
        menu.style.padding = '1rem 2rem';
    }
}); */



