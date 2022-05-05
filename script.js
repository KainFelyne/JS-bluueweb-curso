// //Alerta de prueba
// alert("Alerta desde archivo externo!!!")

// console.log("Este mensaje es para la consola 🤍")

// console.log(20 + 20)

// console.log("40")

// console.log(true)

// console.log(false)


// let nombreUsuario = "Brownie"
// let edadUsuario = 14

// console.log(nombreUsuario)

// console.log(edadUsuario)

// console.log(nombreUsuario + " tiene " + edadUsuario + " años." )


// //let numeroUno = 33

// //let numeroDos = 55


// let numeroUno = parseInt (prompt ("Ingrese el primer número"))
// let numeroDos = parseInt (prompt ("Ingrese el segundo número"))
// let resultado = numeroUno + numeroDos

// console.log(typeof numeroUno)

// console.log(resultado)


// //operadores aritmeticos

// let result = 10 + 50

// console.log(result)







// #######if######

// let stringUsuario = prompt('Escriba "JavaScript"')

// if(stringUsuario === "JavaScript"){
//     console.log("Has escrito la palabra correctamente 😀")
// }

// else{
//     console.log("Has fallado 😥")
// }


// let numUsuario = parseInt(prompt('Ingrese un número del 1 al 10'))

// if(numUsuario <= 10){
//     console.log("Perfecto")
// }
// else{
//     console.log("Mal")
// }






//###switch###

// let opcionUsuario = prompt(`Elija una opción: 
// 1: Libros
// 2: Peliculas
// 3: Juegos
// `)

// console.log(opcionUsuario)

// switch(opcionUsuario){
//     case '1':
//         console.log('Consolación de la filosofía')
//     break;

//     case '2':
//         console.log(`Jacob's ladder`)
//     break;
//     case '3':
//         console.log(`Soul Reaver`)
//     break;
//     default:
//         console.log(`😡Opción no valida😡`)
//     break;
// }





//###while###

let numero = 1

while (numero <= 10){
    console.log(numero)
    //numero = numero + 1
    numero ++
    
}

console.log(`fin del loop: ${numero}`)
console.log(numero)