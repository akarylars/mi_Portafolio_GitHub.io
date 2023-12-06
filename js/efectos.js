let animado = document.querySelectorAll(".animado");
let animado1 = document.querySelectorAll(".animado1");

document.addEventListener('DOMContentLoaded', function() {
    mostrarElementosIniciales();
    window.addEventListener('scroll', mostrarScroll);
});

function mostrarScroll() {
    let scrollTop = document.documentElement.scrollTop;
    for (var i = 0; i < animado.length; i++) {
        let alturaAnimado = animado[i].offsetTop;
        if (alturaAnimado - 200 < scrollTop) {
            animado[i].style.opacity = 1;
            animado[i].classList.add("mostrarArriba");
        }
    }
}

function mostrarElementosIniciales() {
    for (var i = 0; i < animado.length; i++) {
        animado[i].style.opacity = 1;
        animado[i].classList.add("mostrarArriba");
    }
}//los primeros elementos del div cv

function mostrarScroll1() {
    let windowHeight = window.innerHeight;
    
    if (animado1 && animado1.length > 0) {
        for (var i = 0; i < animado1.length; i++) {
            if (animado1[i] !== null && animado1[i] !== undefined) {
                let bounding = animado1[i].getBoundingClientRect();
                // Verifica si el elemento está en el área visible de la ventana
                if (bounding.top >= 0 && bounding.bottom <= windowHeight) {
                    animado1[i].style.opacity = 1;
                    animado1[i].classList.add("mostrarArriba1");
                }
            }
        }
    }
}
window.addEventListener('scroll', mostrarScroll1);

//animado pag inicio y skills entradas laterales


let animadoSide = document.querySelectorAll(".animadoSide");

document.addEventListener('DOMContentLoaded', function() {
    mostrarElementosLaterales();
    window.addEventListener('scroll', mostrarScroll2);
    window.addEventListener('resize', mostrarScroll2); // Añade el evento resize
});

function mostrarScroll2() {
    let scrollTop = document.documentElement.scrollTop;
    for (var i = 0; i < animadoSide.length; i++) {
        let alturaAnimadoSide = animadoSide[i].offsetTop;
        if (alturaAnimadoSide - 200 < scrollTop) {
            animadoSide[i].style.opacity = 1;
            animadoSide[i].classList.add("mostrarLateral");
        }
    }
}

function mostrarElementosLaterales() {
    for (var i = 0; i < animadoSide.length; i++) {
        animadoSide[i].style.opacity = 1;
        animadoSide[i].classList.add("mostrarLateral");
    }
}