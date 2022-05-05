let numeroMaquina = Math.floor(Math.random() * (10 - 1)) + 1;

console.log(numeroMaquina)

let vidas = 3

let numeroUsuario = parseInt(prompt('Adivina el número del 1 al 10: '))

while(numeroMaquina !== numeroUsuario && vidas > 1){

    let mensaje = (numeroMaquina > numeroUsuario) ? 'El número es mayor' : 'El número es menor'
    console.log(mensaje)

    console.log("Intentalo otra vez")

    numeroUsuario = parseInt(prompt('Adivina el número del 1 al 10: '))

    vidas --
}

if(numeroMaquina === numeroUsuario){
    console.log(`Felicidades!!! Has adivinado el número secreto 😁`)
}
else{
    console.log(`Mala suerte 😢`)
}