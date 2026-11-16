// Ejercicio 1

function Ej1(a) {
    if (a % 3 === 0) {
        console.log("Multiple de 3")
    } else if (a % 7 === 0) {
        console.log("Multiple de 7")
    }
}

Ej1(9)


function Ej2(x, y) {
    console.log(x >= 10 && x <= 50 ? x + " esta dentro del rango" : x + " no esta dentro del rango");
    console.log(y >= 10 && y <= 50 ? y + " esta dentro del rango" : y + " no esta dentro del rango");
}

Ej2(20, 60)

