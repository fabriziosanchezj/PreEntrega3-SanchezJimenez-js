console.log ("Quiz de futbol")
let = nombreUsuario = (prompt("Ingrese su nombre"));
alert("¡Bienvenido " + nombreUsuario + "! \n Hoy conoceremos tu nivel de conocimiento de futbol" );

let = puntuacion = 0
let errores = 0
const numeroPreguntas = 6
do{
    let = resp1 = Number(prompt("¿Cuántos balones de oro tiene Lionel Messi?"))
    if (resp1===7){
        alert("Correcto")
        puntuacion++
        console.log(puntuacion)
        errores = 0
    } else if (resp1>=0 && resp1<=6 || resp1>7){
        alert("Incorrecto")
        console.log(puntuacion)
        errores = 0
    } else{
        alert("Por favor, ingrese un número")
        errores = errores + 1
        console.log(errores)
    }
} while(errores > 0)


let = resp2 = confirm("¿Ronaldo Nazario es el máximo goleador de la copa mundial de futbol")
if (resp2){
    alert("Incorrecto")
    console.log(puntuacion)
} else{
    alert("Correcto")
    puntuacion++
    console.log(puntuacion)
}   

let erroresDos = 0
do{
    let = resp3 = prompt("¿Cuál fue el primer equipo de Cristiano Ronaldo? \n Escriba solo la letra correspondiente \n a.- Manchester United \n b.- Sporting Lisboa \n c.- Real Madrid \n d.- Benfica") 
.toLocaleLowerCase()
    if (resp3==="b"){
        alert("Correcto")
        puntuacion++
        console.log(puntuacion)
        erroresDos = 0
    } else if (resp3==="a" || resp3==="c" || resp3==="d"){
        alert("Incorrecto")
        console.log(puntuacion)
        erroresDos = 0
    } else {
        alert("Ingrese una opción valida")
        erroresDos = erroresDos + 1
        console.log(erroresDos)
    }
} while(erroresDos > 0)

let erroresTres = 0
do{
let = resp4 = prompt("¿Cuál fue la primer selección en ser campeona del mundo \n Escriba solo la letra correspondiente \n a.- Argentina \n b.- Brasil \n c.- Uruguay \n d.- Alemania")
.toLocaleLowerCase()
if (resp4==="c"){
    alert("Correcto")
    puntuacion++
    console.log(puntuacion)
    erroresTres = 0
} else if (resp4==="a" || resp4==="b" || resp4==="d"){
    alert("Incorrecto")
    console.log(puntuacion)
    erroresTres = 0
} else {
    alert("Ingrese una opción valida")
    erroresTres = erroresTres + 1
    console.log(erroresTres)
}
} while(erroresTres > 0)

let erroresCuatro = 0
do{
let = resp5 = Number(prompt("¿Cuántas Champions League tiene el Real Madrid?"))
if (resp5===13){
    alert("Correcto")
    puntuacion++    
    console.log(puntuacion)
    erroresCuatro = 0
} else if (resp5>=0 && resp1<=12 || resp1>13){
    alert("Incorrecto")
    console.log(puntuacion)
    erroresCuatro = 0
} else{
    alert("Por favor, ingrese un número")
    erroresCuatro = erroresCuatro + 1
    console.log(erroresCuatro)
}
} while(erroresCuatro > 0)


class PreguntaSeis {
    constructor (nombre, ganoBalonDeOro){
        this.nombre = nombre;
        this.ganoBalonDeOro =  ganoBalonDeOro;
    }
}
//1 es NO lo ganó
//2 es SI lo ganó
const maradona = new PreguntaSeis ("1.- Diego Armando Maradona", 1);
const cannavaro= new PreguntaSeis ("2.- Fabio Cannavaro", 2);
const cruyff= new PreguntaSeis ("3.- Johan Cruyff", 2);
const modric = new PreguntaSeis ("4.- Luka Modric", 2);
const henry = new PreguntaSeis ("5.- Thierry Henry", 1); 
const iniesta = new PreguntaSeis ("6.- Andrés Iniesta", 1); 
const cr7 = new PreguntaSeis ("7.- Cristiano Ronaldo", 2); 
const gBest = new PreguntaSeis ("8.- George Best", 2); 
const neymar = new PreguntaSeis ("9.- Neymar Jr.", 1); 
const mbappe = new PreguntaSeis ("10.- Kyllian Mbappe", 1); 


const arrayRespuestasSeisPosibles= [maradona,cannavaro,cruyff,modric,henry,iniesta,cr7,gBest,neymar,mbappe];
console.log(arrayRespuestasSeisPosibles);


const arrayRespuestaSeisGanadores = arrayRespuestasSeisPosibles.filter(ganadores=> ganadores.ganoBalonDeOro==2);
console.log(arrayRespuestaSeisGanadores);

const arrayNombres = arrayRespuestaSeisGanadores.map(ganador=> ganador.nombre);
console.log(arrayNombres);


let arrayRespuestaSeis =[]
for (let i=0; i<5; i++){
    let = resp6 = Number(prompt(`Seleccione de estas opciones cinco jugadores que hayan ganado un balón de Oro \n Escriba solo un numero y luego aceptar \n 1.- Diego Armando Maradona \n 2.- Fabio Cannavaro \n 3.- Johan Cruyff \n 4.- Luka Modric \n 5.- Thierry Henry \n 6.- Andres Iniesta \n 7.- Cristiano Ronaldo \n 8.- George Best \n 9.- Neymar Jr \n 10.- Kyllian Mbappe`))
    arrayRespuestaSeis.push(resp6)
    console.log(arrayRespuestaSeis)
    let respuestaSeisRestantes = 4-i

    if (resp6 >= 1 && resp6 <=10) {
        if (resp6 === 2 || resp6 === 3 || resp6 === 4 || resp6 === 7 || resp6 === 8){
            puntuacion = puntuacion + (1/5)
            alert(`Seleccione ${respuestaSeisRestantes} respuestas más`)
            console.log (puntuacion) 
        }
        else {
            alert(`Seleccione ${respuestaSeisRestantes} respuestas más`)
            puntuacion = puntuacion + 0
            console.log (puntuacion)
        }

    } else {
        i=i-1; 
        alert("Escoja una opción correcta \n Se han seleccionado " + (i + 1) + " respuestas validas")
        arrayRespuestaSeis.pop()
        console.log("Se han seleccionado " + (i + 1) + " respuestas validas")
    }
}

console.log(arrayRespuestaSeis)

puntuacion = Number(puntuacion.toFixed(1));
console.log (puntuacion)

//FASE DE RESULTADOS //
function promedioPorcentaje (puntuacion){
    return (puntuacion/numeroPreguntas)*100;
}

let porcentajeFinal = promedioPorcentaje(puntuacion)
porcentajeFinal = Number(porcentajeFinal.toFixed(2));
console.log (porcentajeFinal)

const mensajeFinal = document.getElementById("Inicio")
const mensajePregunta1 = document.getElementById("pregunta1")
const mensajePregunta2 = document.getElementById("pregunta2")
const mensajePregunta3 = document.getElementById("pregunta3")
const mensajePregunta4 = document.getElementById("pregunta4")
const mensajePregunta5 = document.getElementById("pregunta5")
const mensajePregunta6 = document.getElementById("pregunta6")


if (porcentajeFinal==100){
    alert(`${nombreUsuario} tu puntuación es de ${puntuacion*10} puntos de ${numeroPreguntas*10} \n ¡Felicidades usted es un experto de futbol! ⚽💯 \n Obtuvo un promedio del ${porcentajeFinal}%`)
    mensajeFinal.innerText = `${nombreUsuario} tu puntuación es de ${puntuacion*10} puntos de ${numeroPreguntas*10} \n ¡Felicidades usted es un experto de futbol! ⚽💯 \n Obtuvo un promedio del ${porcentajeFinal}%`;

} else if (porcentajeFinal >=80 && porcentajeFinal <100){
    alert(`${nombreUsuario} tu puntuación es de ${puntuacion*10} puntos de ${numeroPreguntas*10} \n ¡Felicidades usted es un gran fan de futbol! ⚽ \n Obtuvo un promedio del ${porcentajeFinal}%`)
    mensajeFinal.innerText = `${nombreUsuario} tu puntuación es de ${puntuacion*10} puntos de ${numeroPreguntas*10} \n ¡Felicidades usted es un gran fan de futbol! ⚽ \n Obtuvo un promedio del ${porcentajeFinal}%`;


} else if (porcentajeFinal >=60 && porcentajeFinal <80){
    alert(`${nombreUsuario} tu puntuación es de ${puntuacion*10} puntos de ${numeroPreguntas*10} \n Usted es un fanatico del futbol mayor al promedio \n Obtuvo un promedio del ${porcentajeFinal}%`)
    mensajeFinal.innerText =`${nombreUsuario} tu puntuación es de ${puntuacion*10} puntos de ${numeroPreguntas*10} \n Usted es un fanatico del futbol mayor al promedio \n Obtuvo un promedio del ${porcentajeFinal}%`;


} else if (porcentajeFinal >=40 && porcentajeFinal <60){
    alert(`${nombreUsuario} tu puntuación es de ${puntuacion*10} puntos de ${numeroPreguntas*10} \n Usted es un fan casual \n Obtuvo un promedio del ${porcentajeFinal}%`)
    mensajeFinal.innerText =`${nombreUsuario} tu puntuación es de ${puntuacion*10} puntos de ${numeroPreguntas*10} \n Usted es un fan casual \n Obtuvo un promedio del ${porcentajeFinal}%`;

    
} else if (porcentajeFinal >=20 && porcentajeFinal <40){
    alert(`${nombreUsuario} tu puntuación es de ${puntuacion*10} puntos de ${numeroPreguntas*10} \n Usted deberia ver más futbol \n Obtuvo un promedio del ${porcentajeFinal}%`)
    mensajeFinal.innerText =`${nombreUsuario} tu puntuación es de ${puntuacion*10} puntos de ${numeroPreguntas*10} \n Usted deberia ver más futbol \n Obtuvo un promedio del ${porcentajeFinal}%`;

} else{
    alert(`${nombreUsuario} tu puntuación es de ${puntuacion*10} puntos de ${numeroPreguntas*10} \n ¿Sabe lo que es el futbol? \n Obtuvo un promedio del ${porcentajeFinal}%`)
    mensajeFinal.innerText =`${nombreUsuario} tu puntuación es de ${puntuacion*10} puntos de ${numeroPreguntas*10} \n ¿Sabe lo que es el futbol? \n Obtuvo un promedio del ${porcentajeFinal}%`;
}

pregunta1.innerHTML = `<h2>Pregunta 1</h2>
                        <p>¿Cuántos balones de oro tiene Lionel Messi?</p>
                        <h3>Su respuesta: </h2>
                        <p> ${resp1}</p>
                        <h3>Respuesta Correcta: </h2>
                        <p>7</p>`


pregunta2.innerHTML = `<h2>Pregunta 2</h2>
                        <p>¿Ronaldo Nazario es el máximo goleador de la copa mundial de futbol</p>
                        <h3>Su respuesta: </h2>
                        <p> ${resp2}</p>
                        <h3>Respuesta Correcta: </h2>
                        <p>False</p>`

pregunta3.innerHTML = `<h2>Pregunta 3</h2>
                        <p>¿Cuál fue el primer equipo de Cristiano Ronaldo? <br> a.- Manchester United <br> b.- Sporting Lisboa <br> c.- Real Madrid <br> d.- Benfica</p>
                        <h3>Su respuesta: </h2>
                        <p> ${resp3}</p>
                        <h3>Respuesta Correcta: </h2>
                        <p>b.- Sporting Lisboa</p>`

pregunta4.innerHTML = `<h2>Pregunta 4</h2>
                        <p>¿Cuál fue la primer selección en ser campeona del mundo <br> a.- Argentina <br> b.- Brasil <br> c.- Uruguay <br> d.- Alemania</p>
                        <h3>Su respuesta: </h2>
                        <p> ${resp4}</p>
                        <h3>Respuesta Correcta: </h2>
                        <p>c.- Uruguay</p>`

pregunta5.innerHTML = `<h2>Pregunta 5</h2>
                        <p>¿Cuántas Champions League tiene el Real Madrid?</p>
                        <h3>Su respuesta: </h2>
                        <p> ${resp5}</p>
                        <h3>Respuesta Correcta: </h2>
                        <p>13</p>`

pregunta6.innerHTML = `<h2>Pregunta 6</h2>
                        <p>¿Seleccione de estas opciones cinco jugadores que hayan ganado un balón de Oro <br>  1.- Diego Armando Maradona <br> 2.- Fabio Cannavaro <br> 3.- Johan Cruyff <br> 4.- Luka Modric <br> 5.- Thierry Henry <br> 6.- Andres Iniesta <br> 7.- Cristiano Ronaldo <br> 8.- George Best <br> 9.- Neymar Jr <br> 10.- Kyllian Mbappe?</p>
                        <h3>Su respuesta: </h2>
                        <p> ${arrayRespuestaSeis}</p>
                        <h3>Respuesta Correcta: </h2>
                        ${JSON.stringify(arrayNombres)}`