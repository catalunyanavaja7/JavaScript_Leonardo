
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

function ej6(cadena) {
    let numeros = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    let sumaTotal = 0;

    for (let i = 0; i < cadena.length; i++) {
        for (let j = 0; j < numeros.length; j++) {
            if (cadena[i] === numeros[j]) {
                let numero = parseInt(numeros[j])
                sumaTotal = sumaTotal + numero
            }
        }
    }
    console.log("Suma Total: " + sumaTotal)
}

// Sé que hay formas mas faciles de hacerlo pero queria hacerlo a mano para practicar, tambien lo podria haber hecho con match
console.log("Ejercicio 6")
ej6("tengo 7 manzanas 7 coches")

function ej7(n1, n2, n3) {
    let numeros = [n1, n2, n3]
    console.log("Numeros desordenados: " + numeros)
    numeros.sort((a, b) => b - a)
    console.log("Numeros ordenados: " + numeros)
}

console.log("Ejercicio 7")
ej7(20, 10, 30)

function ej8(x) {
    let parells = 0
    let senars = 0


    for (let i = 0; i < x; i++) {
        if (i % 2 === 0) {
            parells++
        }
        if (i % 2 !== 0) {
            senars++
        }
    }
    console.log("Parells: " + parells)
    console.log("Senars: " + senars)
}

console.log("Ejercicio 8")
ej8(10)

function ej9() {
    let ast = "* "
    for (let i = 0; i < 5; i++) {
        console.log(ast)
        ast += "* "
    }
}

console.log("Ejercicio 9")
ej9()

function ej10() {
    let suma = 0
    let contador = 0

    do {
        if (contador % 3 === 0 && contador % 5 === 0) {
            suma = suma + contador
            console.log("Contador: " + contador)
            console.log(suma)
        }
        ++contador
    } while (suma < 1000)
}

console.log("Ejercicio 10")
ej10()

