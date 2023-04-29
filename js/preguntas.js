const preguntas = [
    {
        pregunta: "¿Cuántos balones de oro tiene Lionel Messi?",
        respuestas: [
            {text: "5", correct: "false"},
            {text: "6", correct: "false"},
            {text: "7", correct: "true"},
            {text: "8", correct: "false"},
        ]
    },
    {
        pregunta: "¿Ronaldo Nazario es el máximo goleador de la copa mundial de futbol?",
        respuestas: [
            {text: "Si", correct: "false"},
            {text: "No", correct: "true"},
            {text: "¿Ese quién es?", correct: "false"},
            {text: "No sé", correct: "false"},
        ]
    },
    {
        pregunta: "¿Cuál fue el primer equipo de Cristiano Ronaldo?",
        respuestas: [
            {text: "Manchester United", correct: "false"},
            {text: "Benfica", correct: "false"},
            {text: "Real Madrid", correct: "false"},
            {text: "Sporting Lisboa", correct: "true"},
        ]
    },
]

const preguntaDinamica = document.getElementById("preguntaDinamica");
const botonDeRespuesta = document.getElementById("botonDeRespuesta")
const nextButton = document.getElementById("next-btn")

let marcadorPreguntaActual = 0;
let puntuacionActual = 0;

function iniciarQuiz(){
    marcadorPreguntaActual=0;
    score=0;
    mostrarPreguntas();
}

function mostrarPreguntas(){
    let preguntaActual = preguntas[marcadorPreguntaActual];
    let numeroDePregunta = marcadorPreguntaActual+1;
    preguntaDinamica.innerHTML = numeroDePregunta + ".- " + preguntaActual.pregunta;
    
    preguntaActual.respuestas.forEach(respuesta => {
        const button = document.createElement("button");
        button.innerHTML = respuesta.text;
        button.classList.add("btn");
        botonDeRespuesta.appendChild(button)

    });
        
    }

iniciarQuiz()
