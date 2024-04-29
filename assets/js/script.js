console.log("THREE JS RUNNING")
import * as THREE from "./build/three.module.js";
import { GLTFLoader } from "./jsm/loaders/GLTFLoader.js"

const preguntas = [

   // Deportes
   {
    "pregunta": "¿Cuál es el deporte más popular del mundo?",
    "respuestas": ["Fútbol", "Baloncesto", "Tenis", "Críquet"],
    "respuesta_correcta": "Fútbol"
},
{
    "pregunta": "¿En qué país se originó el deporte del rugby?",
    "respuestas": ["Inglaterra", "Australia", "Nueva Zelanda", "Estados Unidos"],
    "respuesta_correcta": "Inglaterra"
},
{
    "pregunta": "¿Quién es el máximo goleador en la historia de la Copa Mundial de Fútbol?",
    "respuestas": ["Pelé", "Diego Maradona", "Miroslav Klose", "Lionel Messi"],
    "respuesta_correcta": "Miroslav Klose"
},
{
    "pregunta": "¿Cuál es el deporte de equipo que se juega con un disco volador?",
    "respuestas": ["Ultimate frisbee", "Hockey sobre hielo", "Críquet", "Lacrosse"],
    "respuesta_correcta": "Ultimate frisbee"
},
{
    "pregunta": "¿Cuál es el deporte que involucra lanzamiento de una bola pesada hacia un blanco?",
    "respuestas": ["Bolos", "Lanzamiento de martillo", "Bolos de bolera", "Boccia"],
    "respuesta_correcta": "Bolos de bolera"
},

// Historia
{
    "pregunta": "¿Quién fue el primer presidente de Estados Unidos?",
    "respuestas": ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "John Adams"],
    "respuesta_correcta": "George Washington"
},
{
    "pregunta": "¿En qué año comenzó la Primera Guerra Mundial?",
    "respuestas": ["1914", "1918", "1939", "1945"],
    "respuesta_correcta": "1914"
},
{
    "pregunta": "¿Cuál fue la primera civilización conocida?",
    "respuestas": ["Sumeria", "Egipto", "Mesopotamia", "Indus"],
    "respuesta_correcta": "Sumeria"
},
{
    "pregunta": "¿Quién escribió la 'Ilíada' y la 'Odisea'?",
    "respuestas": ["Homero", "Sófocles", "Eurípides", "Aristóteles"],
    "respuesta_correcta": "Homero"
},
{
    "pregunta": "¿Cuál fue el período conocido como la 'Edad de Oro' de la civilización griega?",
    "respuestas": ["Período Arcaico", "Período Clásico", "Período Helenístico", "Período Minoico"],
    "respuesta_correcta": "Período Clásico"
},

// Actualidad
{
    "pregunta": "¿Cuál es la capital de Francia?",
    "respuestas": ["París", "Londres", "Berlín", "Madrid"],
    "respuesta_correcta": "París"
},
{
    "pregunta": "¿Quién es el actual presidente de Estados Unidos?",
    "respuestas": ["Joe Biden", "Donald Trump", "Kamala Harris", "Ninguna de las anteriores"],
    "respuesta_correcta": "Joe Biden"
},
{
    "pregunta": "¿Cuál es la moneda oficial de Japón?",
    "respuestas": ["Yen", "Dólar", "Euro", "Peso"],
    "respuesta_correcta": "Yen"
},
{
    "pregunta": "¿Qué año marcó el inicio de la Segunda Guerra Mundial?",
    "respuestas": ["1939", "1941", "1945", "1937"],
    "respuesta_correcta": "1939"
},
{
    "pregunta": "¿En qué continente se encuentra el desierto del Sahara?",
    "respuestas": ["África", "Asia", "Europa", "América"],
    "respuesta_correcta": "África"
},

// Música
{
    "pregunta": "¿Quién es conocido como el Rey del Pop?",
    "respuestas": ["Michael Jackson", "Elvis Presley", "Madonna", "Prince"],
    "respuesta_correcta": "Michael Jackson"
},
{
    "pregunta": "¿Qué banda lanzó el álbum 'The Dark Side of the Moon'?",
    "respuestas": ["Pink Floyd", "The Beatles", "Led Zeppelin", "Queen"],
    "respuesta_correcta": "Pink Floyd"
},
{
    "pregunta": "¿Quién es el vocalista de la banda Queen?",
    "respuestas": ["Freddie Mercury", "Elton John", "David Bowie", "Mick Jagger"],
    "respuesta_correcta": "Freddie Mercury"
},
{
    "pregunta": "¿Qué famoso compositor era sordo?",
    "respuestas": ["Ludwig van Beethoven", "Wolfgang Amadeus Mozart", "Johann Sebastian Bach", "Franz Schubert"],
    "respuesta_correcta": "Ludwig van Beethoven"
},
{
    "pregunta": "¿Cuál de los siguientes géneros musicales se originó en Jamaica?",
    "respuestas": ["Reggae", "Salsa", "Bachata", "Tango"],
    "respuesta_correcta": "Reggae"
},

// Ciencia
{
    "pregunta": "¿Cuál es la velocidad de la luz en el vacío?",
    "respuestas": ["299,792,458 metros por segundo", "300,000,000 metros por segundo", "250,000,000 metros por segundo", "350,000,000 metros por segundo"],
    "respuesta_correcta": "299,792,458 metros por segundo"
},
{
    "pregunta": "¿Cuál es el elemento más abundante en la corteza terrestre?",
    "respuestas": ["Oxígeno", "Silicio", "Aluminio", "Hierro"],
    "respuesta_correcta": "Oxígeno"
},
{
    "pregunta": "¿Qué parte del átomo tiene carga positiva?",
    "respuestas": ["Núcleo", "Electrones", "Protones", "Neutrones"],
    "respuesta_correcta": "Núcleo"
},
{
    "pregunta": "¿Cuál es el hueso más largo del cuerpo humano?",
    "respuestas": ["Fémur", "Tibia", "Húmero", "Radio"],
    "respuesta_correcta": "Fémur"
},
{
    "pregunta": "¿Quién formuló la teoría de la relatividad?",
    "respuestas": ["Albert Einstein", "Isaac Newton", "Stephen Hawking", "Nikola Tesla"],
    "respuesta_correcta": "Albert Einstein"
},

// Otras preguntas
{
    "pregunta": "¿Cuál es el río más largo del mundo?",
    "respuestas": ["Amazonas", "Nilo", "Mississippi", "Yangtsé"],
    "respuesta_correcta": "Amazonas"
},
{
    "pregunta": "¿En qué año se fundó Google?",
    "respuestas": ["1998", "2000", "1995", "2002"],
    "respuesta_correcta": "1998"
},
{
    "pregunta": "¿Qué animal es conocido como 'el rey de la selva'?",
    "respuestas": ["León", "Tigre", "Elefante", "Oso"],
    "respuesta_correcta": "León"
},
{
    "pregunta": "¿Cuál es el monte más alto del mundo?",
    "respuestas": ["Monte Everest", "Monte Kilimanjaro", "K2", "Monte Aconcagua"],
    "respuesta_correcta": "Monte Everest"
},
{
    "pregunta": "¿Cuál es el número atómico del carbono?",
    "respuestas": ["6", "8", "12", "14"],
    "respuesta_correcta": "6"
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