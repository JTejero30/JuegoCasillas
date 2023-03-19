let main, form, boton, label, dificultad, casillas, nCasillas, tablero, icono, body, contador

let input = document.createElement('input');

let arrayCasillas = [];
let posicionJugador1, posicionJugador2, objetivo;
let marcador1 = 0, marcador2 = 0;

main = document.getElementsByTagName('main')[0];
tablero = document.getElementsByClassName('tablero')[0];
body = document.getElementsByTagName('body')[0];

icono = document.createElement('i')
icono.setAttribute('class', "far fa-flag")

boton = document.createElement('button')// el boton lleva a la funcion reset que repinta 
boton.addEventListener('click', reset)// boton insertado en el objetivo

contador = document.getElementsByClassName('contador')[0]




// tablero.appendChild(i);

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

/**********************************************************/
/*********************CREAR TABLERO************************ */
/**********************************************************/
crearCasillas();
cuentaAtras();

function cuentaAtras() {
    x = 4;
    contador.textContent = 'Preparados'
    var objeto = setInterval(function () {

        if (x == 0) {
            document.addEventListener('keydown', mover)
            contador.textContent = ""
        } else {
            x--;
            contador.textContent = x;

        }

    }, 1000);
}


body.addEventListener('load', cuentaAtras);

function crearCasillas() {

    for (let i = 0; i < 150; i++) {
        casillas = document.createElement('div');
        casillas.setAttribute('class', 'casilla');
        tablero.appendChild(casillas)
        arrayCasillas.push(casillas)
    }

}


/*******************************************************************/
/*********************POSICIONES ALEATORIAS************************ */
/****************************************************************/
function posicionJugadores() {

    posicionJugador1 = Math.floor(Math.random() * 150)
    posicionJugador2 = Math.floor(Math.random() * 150)
    objetivo = Math.floor(Math.random() * 150)


    if (posicionJugador1 != posicionJugador2 || posicionJugador1 != objetivo || posicionJugador2 != objetivo) {
        color();
    }

}
//si los jugadores se chocan se pinta de nuevo el tablero y no puntua nadie 

function choque() {
    if (posicionJugador1 == posicionJugador2) {
        reiniciarContador()
        quitarColor();
        posicionJugadores();
    }
}

/**********************************************************/
/*********************COLOR************************ */
/**********************************************************/

/*Funciones que sin parametros nos sirven para colorear y quitar color una vez sacadas las posiciones
en la funcion anterior. Estan separadas de las posiciones porque en ocasiones nos interesa una
y en ocasiones otra*/
function color() {
    if (posicionJugador1 != posicionJugador2 && posicionJugador1 != objetivo && posicionJugador2 != objetivo) {
        arrayCasillas[posicionJugador1].style.backgroundColor = '#3DBFF2'
        arrayCasillas[posicionJugador1].textContent = marcador1;//marcador incluido
        arrayCasillas[posicionJugador2].style.backgroundColor = 'orange'
        arrayCasillas[posicionJugador2].textContent = marcador2;//marcador incluido
        arrayCasillas[objetivo].style.backgroundColor = '#51D92B'

        arrayCasillas[objetivo].appendChild(boton);// un boton que se ubicara donde el objetivo y que reiniciara la partida
        // boton.textContent='Reset';
        boton.appendChild(icono);

        boton.setAttribute('class', 'reset');
    }else{
        choque()// si coinciden las posiciones llama a choque que es como repintar las casillas
    }
}
function quitarColor() {
    arrayCasillas[posicionJugador1].style.backgroundColor = 'aliceblue'
    arrayCasillas[posicionJugador1].textContent = "";//para ir quitandole el resultado a la que se mueve
    arrayCasillas[posicionJugador2].style.backgroundColor = 'aliceblue'
    arrayCasillas[posicionJugador2].textContent = "";
    arrayCasillas[objetivo].style.backgroundColor = 'aliceblue'
    arrayCasillas[objetivo].textContent = "";
}

posicionJugadores();

/**********************************************************/
/*********************MOVER FICHA************************ */
/**********************************************************/



/**Funcion que recibe una tecla y actua en base a ella
 * Para las posiciones de los bordes gira por el tablero, ejemplo si la casilla
 * es la 149 y presiona right se le resta 9 y vuelve a la 140.
 * Si la casilla es la 5 y presiona up se le suma 140 y pasa a la 145.
 */
function mover(parametro) {
    choque();
    switch (parametro['key']) {

        case 'ArrowUp':
            if (posicionJugador1 < 10) {
                quitarColor();
                posicionJugador1 = posicionJugador1 + 140
                color();
                ganar();

            } else {
                quitarColor();
                posicionJugador1 = posicionJugador1 - 10
                color();
                ganar();
            }
            break;
        case 'ArrowDown':
            if (posicionJugador1 >= 140) {
                quitarColor();
                posicionJugador1 = posicionJugador1 - 140
                color();
                ganar();

            } else {
                quitarColor();
                posicionJugador1 = posicionJugador1 + 10
                color();
                ganar();
            }
            break;
        case 'ArrowLeft':
            if (posicionJugador1 % 10 == 0) {
                quitarColor()
                posicionJugador1 = posicionJugador1 + 9
                color();
                ganar();
            } else {
                quitarColor();
                posicionJugador1 = posicionJugador1 - 1
                color();
                ganar();
            }
            break;
        case 'ArrowRight':
            if (posicionJugador1 % 10 == 9) {
                quitarColor()
                posicionJugador1 = posicionJugador1 - 9
                color();
                ganar();
            } else {
                quitarColor();
                posicionJugador1 = posicionJugador1 + 1
                color();
                ganar();
            }
            break;
        case 'w':
            if (posicionJugador2 < 10) {
                quitarColor();
                posicionJugador2 = posicionJugador2 + 140

                color();
                ganar();

            } else {
                quitarColor();
                posicionJugador2 = posicionJugador2 - 10
                color();
                ganar()
            }
            break;
        case 's':
            if (posicionJugador2 >= 140) {
                quitarColor();
                posicionJugador2 = posicionJugador2 - 140
                color();
                ganar();

            } else {
                quitarColor();
                posicionJugador2 = posicionJugador2 + 10
                color();
                ganar()
            }
            break;
        case 'a':
            if (posicionJugador2 % 10 == 0) {
                quitarColor()
                posicionJugador2 = posicionJugador2 + 9
                color();
                ganar();
            } else {
                quitarColor();
                posicionJugador2 = posicionJugador2 - 1
                color();
                ganar();
            }
            break;
        case 'd':
            if (posicionJugador2 % 10 == 9) {
                quitarColor()
                posicionJugador2 = posicionJugador2 - 9
                color();
                ganar();
            } else {
                quitarColor();
                posicionJugador2 = posicionJugador2 + 1
                color();
                ganar()
            }
            break;

        default:

            break;
    }

}

/*Funcion que comprueba si alguna de las dos fichas comparte posicion con el objetivo*/
function ganar() {
    if (posicionJugador1 == objetivo) {
        marcador1++
        quitarColor()
        posicionJugadores()
        reiniciarContador()// reiniciamos contador

    } else if (posicionJugador2 == objetivo) {
        marcador2++
        quitarColor()
        posicionJugadores()
        reiniciarContador()
        // reiniciamos contador
    }
}

function reiniciarContador() {
    x = 4
    document.removeEventListener('keydown', mover)
}

function reset() {
    quitarColor()
    posicionJugadores()
}