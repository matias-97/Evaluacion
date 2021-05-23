document.addEventListener('DOMContentLoaded', function() {

    reproducirVideo();
    pausarVideo();

});

// Funcion que reproduce el video
function reproducirVideo(nombre) {
    const reproductor = document.querySelector('.triangulo');
    const boton = document.querySelector('.btn');

    reproductor.addEventListener('click', function() {

        const play = document.querySelector('video');
        play.play();
        // se quitan las clases que generan el boton
        reproductor.classList.remove('triangulo');
        boton.classList.remove('btn');
    });

}

// Funcion que pausa el video
function pausarVideo() {
    const reproductor = document.querySelector('video');
    const boton = document.querySelector('.btn');
    const triangulo = document.querySelector('span');

    reproductor.addEventListener('click', function() {
        reproductor.pause();
        // se agregan las clases que generan el boton
        triangulo.classList.add('triangulo');
        boton.classList.add('btn');
    });

}