console.log("THREE JS RUNNING")
import * as THREE from "./build/three.module.js";
import { GLTFLoader } from "./jsm/loaders/GLTFLoader.js"

const preguntas = [

    {
        "pregunta": "¿Quién pintó la Mona Lisa?",
        "respuestas": ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Claude Monet"],
        "respuesta_correcta": "Leonardo da Vinci"
    },
    {
        "pregunta": "¿Cuál es el metal más caro del mundo?",
        "respuestas": ["Oro", "Platino", "Rodio", "Iridio"],
        "respuesta_correcta": "Rodio"
    },
    {
        "pregunta": "¿En qué país se encuentra la Gran Muralla China?",
        "respuestas": ["China", "India", "Rusia", "Japón"],
        "respuesta_correcta": "China"
    },
    {
        "pregunta": "¿Quién fue el primer ser humano en viajar al espacio?",
        "respuestas": ["Yuri Gagarin", "Neil Armstrong", "Buzz Aldrin", "Alan Shepard"],
        "respuesta_correcta": "Yuri Gagarin"
    },
    {
        "pregunta": "¿Cuál es el país más grande del mundo?",
        "respuestas": ["Rusia", "Canadá", "Estados Unidos", "China"],
        "respuesta_correcta": "Rusia"
    },
    {
        "pregunta": "¿Quién escribió 'Hamlet'?",
        "respuestas": ["William Shakespeare", "Fiodor Dostoievski", "Charles Dickens", "Jane Austen"],
        "respuesta_correcta": "William Shakespeare"
    },
    {
        "pregunta": "¿Cuál es la capital de Australia?",
        "respuestas": ["Canberra", "Sídney", "Melbourne", "Brisbane"],
        "respuesta_correcta": "Canberra"
    },
    {
        "pregunta": "¿Qué famoso científico formuló la teoría de la relatividad?",
        "respuestas": ["Albert Einstein", "Isaac Newton", "Stephen Hawking", "Galileo Galilei"],
        "respuesta_correcta": "Albert Einstein"
    },
    {
        "pregunta": "¿Cuál es el océano más grande del mundo?",
        "respuestas": ["Océano Pacífico", "Océano Atlántico", "Océano Índico", "Océano Antártico"],
        "respuesta_correcta": "Océano Pacífico"
    },
    {
        "pregunta": "¿Quién fue el primer presidente de los Estados Unidos?",
        "respuestas": ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "John Adams"],
        "respuesta_correcta": "George Washington"
    },
    {
        "pregunta": "¿Cuál es el monte más alto del mundo?",
        "respuestas": ["Monte Everest", "Monte Kilimanjaro", "Monte Aconcagua", "Monte McKinley (Denali)"],
        "respuesta_correcta": "Monte Everest"
    },
    {
        "pregunta": "¿En qué año cayó el Muro de Berlín?",
        "respuestas": ["1989", "1991", "1990", "1987"],
        "respuesta_correcta": "1989"
    },
    {
        "pregunta": "¿Cuál es el país con más islas en el mundo?",
        "respuestas": ["Suecia", "Filipinas", "Indonesia", "Japón"],
        "respuesta_correcta": "Suecia"
    },
    {
        "pregunta": "¿Quién fue el primer hombre en pisar la Luna?",
        "respuestas": ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Alan Shepard"],
        "respuesta_correcta": "Neil Armstrong"
    },
    {
        "pregunta": "¿Cuál es el animal más grande del mundo?",
        "respuestas": ["Ballena azul", "Elefante africano", "Jirafa", "Oso polar"],
        "respuesta_correcta": "Ballena azul"
    },
    {
        "pregunta": "¿Cuál es el país más poblado del mundo?",
        "respuestas": ["China", "India", "Estados Unidos", "Rusia"],
        "respuesta_correcta": "China"
    },
    {
        "pregunta": "¿Quién fue el primer presidente de la República de México?",
        "respuestas": ["Guadalupe Victoria", "Benito Juárez", "Miguel Hidalgo", "Emiliano Zapata"],
        "respuesta_correcta": "Guadalupe Victoria"
    },
    {
        "pregunta": "¿En qué año se firmó la Declaración de Independencia de los Estados Unidos?",
        "respuestas": ["1776", "1789", "1804", "1812"],
        "respuesta_correcta": "1776"
    },
    {
        "pregunta": "¿Cuál es la capital de Canadá?",
        "respuestas": ["Ottawa", "Toronto", "Vancouver", "Montreal"],
        "respuesta_correcta": "Ottawa"
    },
    {
        "pregunta": "¿Qué elemento químico tiene el símbolo H?",
        "respuestas": ["Hidrógeno", "Helio", "Hierro", "Hidróxido"],
        "respuesta_correcta": "Hidrógeno"
    },
    {
        "pregunta": "¿Cuál es el país más pequeño del mundo?",
        "respuestas": ["Ciudad del Vaticano", "Mónaco", "Nauru", "Tuvalu"],
        "respuesta_correcta": "Ciudad del Vaticano"
    },
    {
        "pregunta": "¿Quién fue el primer emperador romano?",
        "respuestas": ["Augusto", "Julio César", "Nerón", "Trajano"],
        "respuesta_correcta": "Augusto"
    },
    {
        "pregunta": "¿Cuál es el metal más abundante en la corteza terrestre?",
        "respuestas": ["Aluminio", "Hierro", "Cobre", "Plata"],
        "respuesta_correcta": "Aluminio"
    },
    {
        "pregunta": "¿Quién escribió 'Orgullo y prejuicio'?",
        "respuestas": ["Jane Austen", "Emily Brontë", "Charlotte Brontë", "Louisa May Alcott"],
        "respuesta_correcta": "Jane Austen"
    },
    {
        "pregunta": "¿En qué año se fundó la ciudad de Roma?",
        "respuestas": ["753 a.C.", "500 a.C.", "100 a.C.", "500 d.C."],
        "respuesta_correcta": "753 a.C."
    },
    {
        "pregunta": "¿Cuál es la montaña más alta de América?",
        "respuestas": ["Monte McKinley (Denali)", "Monte Aconcagua", "Monte Vinson", "Monte Everest"],
        "respuesta_correcta": "Monte McKinley (Denali)"
    },
    {
        "pregunta": "¿Quién escribió 'El principito'?",
        "respuestas": ["Antoine de Saint-Exupéry", "Victor Hugo", "Jules Verne", "Gustave Flaubert"],
        "respuesta_correcta": "Antoine de Saint-Exupéry"
    },
    {
        "pregunta": "¿Cuál es la capital de España?",
        "respuestas": ["Madrid", "Barcelona", "Valencia", "Sevilla"],
        "respuesta_correcta": "Madrid"
    },
    {
        "pregunta": "¿En qué año se descubrió América?",
        "respuestas": ["1492", "1500", "1521", "1453"],
        "respuesta_correcta": "1492"
    },
    {
        "pregunta": "¿Cuál es la moneda oficial de Japón?",
        "respuestas": ["Yen", "Dólar", "Euro", "Libra esterlina"],
        "respuesta_correcta": "Yen"
    },
    {
        "pregunta": "¿Quién fue el primer presidente de Sudáfrica elegido democráticamente?",
        "respuestas": ["Nelson Mandela", "F.W. de Klerk", "Thabo Mbeki", "Jacob Zuma"],
        "respuesta_correcta": "Nelson Mandela"
    },
    {
        "pregunta": "¿En qué país se encuentra la Torre Eiffel?",
        "respuestas": ["Francia", "Italia", "España", "Alemania"],
        "respuesta_correcta": "Francia"
    },
    {
        "pregunta": "¿Quién fue el primer emperador de China?",
        "respuestas": ["Qin Shi Huang", "Sun Yat-sen", "Mao Zedong", "Emperador Ming"],
        "respuesta_correcta": "Qin Shi Huang"
    },
    {
        "pregunta": "¿Cuál es el lago más grande de África?",
        "respuestas": ["Lago Victoria", "Lago Tanganica", "Lago Malawi", "Lago Nasser"],
        "respuesta_correcta": "Lago Victoria"
    },
    {
        "pregunta": "¿Cuál es la especie animal más rápida del mundo?",
        "respuestas": ["Peregrino", "Guepardo", "León", "Águila calva"],
        "respuesta_correcta": "Peregrino"
    },
    {
        "pregunta": "¿Quién fue el primer presidente de la República Argentina?",
        "respuestas": ["Bernardino Rivadavia", "Juan Manuel de Rosas", "José de San Martín", "Domingo Faustino Sarmiento"],
        "respuesta_correcta": "Bernardino Rivadavia"
    },
    {
        "pregunta": "¿En qué año se firmó la Declaración Universal de los Derechos Humanos?",
        "respuestas": ["1948", "1950", "1955", "1960"],
        "respuesta_correcta": "1948"
    },
    {
        "pregunta": "¿Cuál es el animal más grande del mundo?",
        "respuestas": ["Ballena azul", "Elefante africano", "Jirafa", "Oso polar"],
        "respuesta_correcta": "Ballena azul"
    },
    {
        "pregunta": "¿Cuál es el país más poblado de Europa?",
        "respuestas": ["Rusia", "Alemania", "Francia", "Reino Unido"],
        "respuesta_correcta": "Rusia"
    },
    {
        "pregunta": "¿Cuál es el instrumento musical más antiguo del mundo?",
        "respuestas": ["Flauta", "Lira", "Arpa", "Tambor"],
        "respuesta_correcta": "Flauta"
    },
    {
        "pregunta": "¿Quién escribió 'Cien años de soledad'?",
        "respuestas": ["Gabriel García Márquez", "Mario Vargas Llosa", "Jorge Luis Borges", "Isabel Allende"],
        "respuesta_correcta": "Gabriel García Márquez"
    },
    {
        "pregunta": "¿Cuál es el río más largo de Europa?",
        "respuestas": ["Volga", "Danubio", "Ródano", "Támesis"],
        "respuesta_correcta": "Volga"
    },
    {
        "pregunta": "¿Cuál es la capital de Chile?",
        "respuestas": ["Santiago", "Buenos Aires", "Lima", "Bogotá"],
        "respuesta_correcta": "Santiago"
    },
    {
        "pregunta": "¿Quién pintó 'La noche estrellada'?",
        "respuestas": ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        "respuesta_correcta": "Vincent van Gogh"
    },
    {
        "pregunta": "¿Cuál es el símbolo químico del hierro?",
        "respuestas": ["Fe", "H", "Ir", "He"],
        "respuesta_correcta": "Fe"
    },
    {
        "pregunta": "¿Quién fue el primer astronauta en dar una vuelta completa a la Tierra?",
        "respuestas": ["Yuri Gagarin", "Neil Armstrong", "Buzz Aldrin", "John Glenn"],
        "respuesta_correcta": "Yuri Gagarin"
    },
    {
        "pregunta": "¿Cuál es el continente más pequeño del mundo?",
        "respuestas": ["Oceanía", "Europa", "Antártida", "Asia"],
        "respuesta_correcta": "Antártida"
    },
    {
        "pregunta": "¿Quién fue el primer emperador del Imperio Romano?",
        "respuestas": ["Augusto", "Julio César", "Nerón", "Marco Antonio"],
        "respuesta_correcta": "Augusto"
    },
    {
        "pregunta": "¿Cuál es el país más grande de África?",
        "respuestas": ["Argelia", "República Democrática del Congo", "Sudáfrica", "Nigeria"],
        "respuesta_correcta": "Argelia"
    },
    {
        "pregunta": "¿En qué país se encuentra la ciudad de Petra?",
        "respuestas": ["Jordania", "Egipto", "Israel", "Líbano"],
        "respuesta_correcta": "Jordania"
    },
    {
        "pregunta": "¿Cuál es el símbolo químico del oxígeno?",
        "respuestas": ["O", "Ox", "Oi", "Oxí"],
        "respuesta_correcta": "O"
    },
    {
        "pregunta": "¿Quién fue el primer presidente de la República de Chile?",
        "respuestas": ["Manuel Blanco Encalada", "Bernardo O'Higgins", "José Miguel Carrera", "Diego Portales"],
        "respuesta_correcta": "Manuel Blanco Encalada"
    },
    {
        "pregunta": "¿Cuál es el país con más premios Nobel?",
        "respuestas": ["Estados Unidos", "Reino Unido", "Alemania", "Francia"],
        "respuesta_correcta": "Estados Unidos"
    },
    {
        "pregunta": "¿Quién fue el primer hombre en la historia en escalar el monte Everest sin oxígeno?",
        "respuestas": ["Reinhold Messner", "Edmund Hillary", "Tenzing Norgay", "Junko Tabei"],
        "respuesta_correcta": "Reinhold Messner"
    },
    {
        "pregunta": "¿Cuál es la capital de Francia?",
        "respuestas": ["Madrid", "Berlín", "Londres", "París"],
        "respuesta_correcta": "París"
    },
    {
        "pregunta": "¿Quién escribió 'Don Quijote de la Mancha'?",
        "respuestas": ["Miguel de Cervantes", "Gabriel García Márquez", "William Shakespeare", "Leo Tolstoy"],
        "respuesta_correcta": "Miguel de Cervantes"
    },
    {
        "pregunta": "¿Cuál es el río más largo del mundo?",
        "respuestas": ["Amazonas", "Nilo", "Yangtsé", "Mississippi"],
        "respuesta_correcta": "Amazonas"
    },
    {
        "pregunta": "¿En qué año comenzó la Segunda Guerra Mundial?",
        "respuestas": ["1914", "1939", "1945", "1941"],
        "respuesta_correcta": "1939"
    },
    {
        "pregunta": "¿Cuál es el elemento más abundante en la corteza terrestre?",
        "respuestas": ["Oxígeno", "Hierro", "Silicio", "Aluminio"],
        "respuesta_correcta": "Oxígeno"
    }
];


const totalQuestions = preguntas.length;
let randomNumber;
let selectedQuestion;
let selectedAnswer;
let questionCounter = 1;
let correctCounter = 0;
let errorCounter = 0;
let randomAnswers;

const question = document.querySelector("#question");
const counterQuestion = document.querySelector("#question-counter");
const errorCounterQuestion = document.querySelector("#question-counter-error");
const correctCounterQuestion = document.querySelector("#question-counter-correct");
const a1 = document.querySelector("#a1");
const a2 = document.querySelector("#a2");
const a3 = document.querySelector("#a3");
const a4 = document.querySelector("#a4");
const canvas = document.querySelector("#canvas");
let camera, scene, renderer, controls;
let model1, model2, model3;
var synth = window.speechSynthesis;

const speechText = (text)=>{
    let utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
};

function desordenarRespuestas(respuestas) {
    const respuestasDesordenadas = respuestas.slice();
    // Utilizamos el algoritmo de Fisher-Yates para desordenar el array
    for (let i = respuestasDesordenadas.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [respuestasDesordenadas[i], respuestasDesordenadas[j]] = [respuestasDesordenadas[j], respuestasDesordenadas[i]];
    }
    return respuestasDesordenadas;
}

const scaleValue = (value, minInput, maxInput, minOutput, maxOutput) => {
    return minOutput + (maxOutput - minOutput) * ((value - minInput) / (maxInput - minInput));
}

const onWindowResize = () => {

    const width = window.innerWidth;
    const height = window.innerHeight;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);

    const windowWidth = window.innerWidth;

    if (windowWidth >= 1680) {
        model1.position.set(9, 2, 0);
    } else if (windowWidth >= 1280) {
        model1.position.set(9, 2, 0);
    }
    else if (windowWidth >= 768) {
        model1.position.set(0, 3.2, 0);
    }


};

const loadModelGLTF = (modelURL) => {
    const loader = new GLTFLoader();
    let objectGroup = new THREE.Group();

    return new Promise((resolve, reject) => {
        loader.load(
            `../assets/models/${modelURL}/scene.gltf`,
            function (gltf) {
                const container = new THREE.Group();
                container.add(gltf.scene);
                objectGroup = container;
                resolve(objectGroup);
            },
            function (xhr) {
                console.log((xhr.loaded / xhr.total * 100) + '% loaded');
            },
            function (error) {
                console.log('An error happened', error);
            }
        );
    })
};

const init = async () => {
    counterQuestion.innerHTML = questionCounter + "/" + totalQuestions.toString();
    window.addEventListener("resize", onWindowResize);

    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 5, 12);
    camera.lookAt(0, 0, 0);


    scene = new THREE.Scene();

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(0, 2000, 1000);
    directionalLight.lookAt(0, 0, 0);
    directionalLight.intensity = 12;
    scene.add(directionalLight);

    const ambientlight = new THREE.AmbientLight(0xffffff, 1);
    ambientlight.position.set(0, 0, 0);
    ambientlight.intensity = 1;
    scene.add(ambientlight);

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    canvas.appendChild(renderer.domElement);


    //LOAD 3D MODELS


    await loadModelGLTF("question_box").then((resolve) => {
        console.log(resolve);
        model1 = resolve;
        return loadModelGLTF("asics_shoe");
    }).then((resolve) => {
        model2 = resolve;
    });

    model1.scale.set(0.008, 0.008, 0.008);
    model1.position.set(9, 2, 0);
    model1.rotation.set(0, 0, 0);
    scene.add(model1);

};

const render = () => {
    renderer.render(scene, camera);

};

const animate = () => {
    requestAnimationFrame(animate);

    if (model1) {
        model1.rotation.y += 0.01;
    }


    render();
};

init();
animate();



const showQuestion = () => {
    randomNumber = Math.floor(Math.random() * preguntas.length);
    selectedQuestion = preguntas[randomNumber];
    console.log(selectedQuestion);
    question.innerHTML = selectedQuestion["pregunta"];

    a1.classList.remove("answer--correct");
    a1.classList.remove("answer--error");
    a2.classList.remove("answer--correct");
    a2.classList.remove("answer--error");
    a3.classList.remove("answer--correct");
    a3.classList.remove("answer--error");
    a4.classList.remove("answer--correct");
    a4.classList.remove("answer--error");

    randomAnswers = desordenarRespuestas(selectedQuestion["respuestas"]);

    a1.innerHTML = randomAnswers[0];
    a2.innerHTML = randomAnswers[1];
    a3.innerHTML = randomAnswers[2];
    a4.innerHTML = randomAnswers[3];

    a1.style.pointerEvents = "all";
    a2.style.pointerEvents = "all";
    a3.style.pointerEvents = "all";
    a4.style.pointerEvents = "all";

  speechText(selectedQuestion["pregunta"]);
};

const checkCorrectAnswer = (answer) => {

    a1.style.pointerEvents = "none";
    a2.style.pointerEvents = "none";
    a3.style.pointerEvents = "none";
    a4.style.pointerEvents = "none";

    if (preguntas[randomNumber]["respuesta_correcta"] === answer.innerHTML) {
        console.log("Correcta");
        selectedQuestion["respuestas"].forEach((respuesta) => {
            console.log(respuesta);
            if (answer.innerHTML === respuesta) {
                console.log("correcta")
                answer.classList.add("answer--correct");
                correctCounter++;
            }
        });


        speechText("Correcto");

    } else {
        errorCounter++;
        console.log("Incorrecta");
        answer.classList.add("answer--error");


        randomAnswers.forEach((respuesta, index) => {
            console.log(respuesta, index);
            if (selectedQuestion["respuesta_correcta"] === respuesta) {
                console.log("CORRECTA", respuesta, index);

                if(index == 0){
                    a1.classList.add("answer--correct");
                }

                if(index == 1){
                    a2.classList.add("answer--correct");
                }

                if(index == 2){
                    a3.classList.add("answer--correct");
                }
               
                if(index == 3){
                    a4.classList.add("answer--correct");
                }
              
            }
        });

        speechText("Incorrecto");
    }

    setTimeout(() => {
        correctCounterQuestion.innerHTML = "Correctas: " + correctCounter;
        errorCounterQuestion.innerHTML = "Fallos: " + errorCounter;


        questionCounter++;
        counterQuestion.innerHTML = questionCounter + "/" + totalQuestions.toString();
        showQuestion();
    }, 1000);


    preguntas.splice(randomNumber, 1);
}


a1.addEventListener("click", (e) => {
    checkCorrectAnswer(a1);
})

a2.addEventListener("click", (e) => {
    checkCorrectAnswer(a2);
})

a3.addEventListener("click", (e) => {
    checkCorrectAnswer(a3);
})

a4.addEventListener("click", (e) => {
    checkCorrectAnswer(a4);
})

showQuestion();