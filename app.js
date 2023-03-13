let main, form, boton, label, dificultad, casillas, nCasillas, tablero

let input = document.createElement('input');

let arrayCasillas = [];
main = document.getElementsByTagName('main')[0];
tablero = document.getElementsByClassName('tablero')[0];



// function inicio() {

//     form = document.createElement('form');
//     form.setAttribute('class', 'form');
//     main.appendChild(form);

//     label = document.createElement('label')
//     label.setAttribute('class', 'label')
//     label.textContent = 'Elige tu dificultad 1/10'
//     form.appendChild(label)

//     input.setAttribute('type', 'text');
//     input.setAttribute('class', 'input');
//     form.appendChild(input);

//     boton = document.createElement('button')
//     boton.setAttribute('class', 'boton')
//     boton.setAttribute('type', 'button');
//     boton.textContent = 'JUGAR';
//     main.appendChild(boton);

//     boton.addEventListener('click', crearCasillas);
// }


function crearCasillas() {

    // dificultad = input.value
    console.log(nCasillas)
    for (let i = 0; i < 10; i++) {
        arrayCasillas.push([])
        for (let j = 0; j < 15; j++) {
            arrayCasillas[i].push(casillas)
            casillas = document.createElement('div');
            casillas.setAttribute('class', 'casilla');
            tablero.appendChild(casillas);
        }
    }
    console.log(arrayCasillas);

}
crearCasillas()

function pintarJugadores() {
    let posicionJugador1, posicionJugador2, objetivo

    posicionJugador1 = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 15)]
    posicionJugador2 = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 15)]
    objetivo = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 15)]

    arrayCasillas[posicionJugador1[0]][posicionJugador1[1]].style.backgroundColor = 'green'
    arrayCasillas[posicionJugador2[0]][posicionJugador2[1]].style.backgroundColor = 'orange'
    arrayCasillas[objetivo[0]][objetivo[1]].style.backgroundColor = 'blue'

    if (posicionJugador1 == posicionJugador2) {
        pintarJugadores()
    }
}
pintarJugadores();

document.addEventListener('keydown', mover)

function mover(parametro) {
    switch (parametro['key']) {
        case 'ArrowUp':
            console.log('tecla arriba');
            break;
        case 'ArrowDown':
            console.log('tecla abajo');
            break;
        case 'ArrowLeft':
            console.log('tecla izquierda');
            break;
        case 'ArrowRight':
            console.log('tecla derecha');
            break;

        default: 
        
            break;
    }
}