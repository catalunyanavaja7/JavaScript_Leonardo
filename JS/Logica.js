
// ******* EJERCICIOS LOGICA ******* //

function Ej1(a) {
    if (a % 3 === 0) {
        console.log("Multiple de 3")
    } else if (a % 7 === 0) {
        console.log("Multiple de 7")
    }
}

console.log("Ejercicio 1")
Ej1(9)


function Ej2(x, y) {
    console.log(x >= 10 && x <= 50 ? x + " esta dentro del rango" : x + " no esta dentro del rango");
    console.log(y >= 10 && y <= 50 ? y + " esta dentro del rango" : y + " no esta dentro del rango");
}

console.log("Ejercicio 2")
Ej2(20, 60)

function Ej3(x) {
    if (x >= 9 && x <= 11) {
        console.log("Excel·lent");
    } else if (x >= 7) {
        console.log("Notable");
    } else if (x >= 6) {
        console.log("Bé");
    } else if (x >= 5) {
        console.log("Suficient");
    } else if (x > 0) {
        console.log("Suspès");
    } else {
        console.log("No está dentro del rango de notas!");
    }
}

console.log("Ejercicio 3")
Ej3(7);

function Ej4(x) {
    switch (true) {
        case x % 3 === 0 && x % 7 === 0:
            console.log("Es multiple de 3 y 7")
            break
        case x % 3 === 0:
            console.log("Es multiple de 3")
            break
        case x % 7 === 0:
            console.log("Es multiple de 7")
            break
    }
}

console.log("Ejercicio 4")
Ej4(21)

function ej5(x) {
    let v1 = 0
    let suma = 0
    while(v1 < x) {
        suma++
        v1 = v1 + suma;
    }
    console.log("Total n: " + suma)
}

console.log("Ejercicio 5")
ej5(15)



