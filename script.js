
const datosPorRegion = {
    "Región Metropolitana": {
        flora: [
            { nombre: "Peumo", descripcion: "Árbol de hoja perenne de hasta 20 m de altura." },
            { nombre: "Quillay", descripcion: "Árbol medicinal con corteza jabonosa." }
        ],
        fauna: [
            { nombre: "Zorro culpeo", descripcion: "Mamífero carnívoro autóctono de Chile." },
            { nombre: "Picaflor chico", descripcion: "Ave pequeña y rápida, de vivos colores." }
        ]
    },
    "Región de Valparaíso": {
        flora: [
            { nombre: "Belloto del Norte", descripcion: "Árbol endémico en peligro de extinción." },
            { nombre: "Boldo", descripcion: "Usado medicinalmente por sus propiedades digestivas." }
        ],
        fauna: [
            { nombre: "Pingüino de Humboldt", descripcion: "Ave marina en peligro, vive en la costa." },
            { nombre: "Chungungo", descripcion: "Nutria marina, habita roqueríos costeros." }
        ]
    }
};

const preguntas = [
    "¿Qué árbol chileno tiene propiedades jabonosas?",
    "¿Cuál es el nombre del zorro autóctono de la zona central de Chile?",
    "¿Qué pingüino se encuentra en la región de Valparaíso?",
    "¿Qué animal marino chileno también es conocido como 'nutria de mar'?"
];

const curiosidades = [
    "El picaflor chico puede batir sus alas más de 50 veces por segundo.",
    "El quillay se utiliza en productos cosméticos por sus propiedades espumantes.",
    "El chungungo es una de las nutrias más pequeñas del mundo.",
    "El belloto del norte solo crece en algunos sectores del valle central."
];

function mostrarRegion(region) {
    const regionData = datosPorRegion[region];
    document.getElementById("region-nombre").innerText = region;

    const floraList = document.getElementById("flora-list");
    floraList.innerHTML = "";
    regionData.flora.forEach(planta => {
        const li = document.createElement("li");
        li.innerText = planta.nombre + ": " + planta.descripcion;
        floraList.appendChild(li);
    });

    const faunaList = document.getElementById("fauna-list");
    faunaList.innerHTML = "";
    regionData.fauna.forEach(animal => {
        const li = document.createElement("li");
        li.innerText = animal.nombre + ": " + animal.descripcion;
        faunaList.appendChild(li);
    });
}

function mostrarPregunta() {
    const index = Math.floor(Math.random() * preguntas.length);
    document.getElementById("pregunta").innerText = preguntas[index];
}

function poblarCuriosidades() {
    const lista = document.getElementById("curiosidades-list");
    curiosidades.forEach(c => {
        const li = document.createElement("li");
        li.innerText = c;
        lista.appendChild(li);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    poblarCuriosidades();

    const mapa = document.getElementById("mapa-chile");
    mapa.addEventListener("load", () => {
        const svgDoc = mapa.contentDocument;
        for (const region in datosPorRegion) {
            const element = svgDoc.getElementById(region);
            if (element) {
                element.style.cursor = "pointer";
                element.addEventListener("click", () => mostrarRegion(region));
            }
        }
    });
});
