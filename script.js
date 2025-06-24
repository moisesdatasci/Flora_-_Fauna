// script.js

const datos = {
  arica: {
    flora: [
      {
        nombre: "Cactácea Copiapoa",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/4/48/Copiapoa_cinerea.jpg",
        descripcion: "Planta adaptada al clima árido del norte chileno."
      },
      {
        nombre: "Tamarugo",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Tamarugo_tree.jpg",
        descripcion: "Arbusto nativo resistente a la sequía."
      }
    ],
    fauna: [
      {
        nombre: "Flamenco andino",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Flamenco_andino.JPG",
        descripcion: "Ave zancuda de colores rosados presente en salares del norte."
      },
      {
        nombre: "Vizcacha",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Vizcacha.jpg",
        descripcion: "Roedor saltador que vive en zonas rocosas del altiplano."
      }
    ]
  },
  valpo: {
    flora: [
      {
        nombre: "Boldo",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Peumus_boldus_-_Köhler–s_Medizinal-Pflanzen-101.jpg",
        descripcion: "Arbusto medicinal de la zona central de Chile."
      }
    ],
    fauna: [
      {
        nombre: "Zorro chilla",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Lycalopex_griseus.jpg",
        descripcion: "Canino pequeño y escurridizo, adaptado a diversos hábitats."
      }
    ]
  },
  rm: {
    flora: [
      {
        nombre: "Peumo",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/a/ac/Cryptocarya_alba_1.jpg",
        descripcion: "Arbusto o árbol siempreverde, típico del bosque esclerófilo."
      }
    ],
    fauna: [
      {
        nombre: "Quirquincho",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Chaetophractus_vellerosus.jpg",
        descripcion: "Armadillo pequeño de zonas semiáridas."
      }
    ]
  },
  maule: {
    flora: [
      {
        nombre: "Quillay",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Quillaja_saponaria0.jpg",
        descripcion: "Árbol nativo con propiedades medicinales."
      }
    ],
    fauna: [
      {
        nombre: "Chucao",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/4/48/Chucao_Tapaculo.jpg",
        descripcion: "Ave del sotobosque templado."
      }
    ]
  },
  biobio: {
    flora: [
      {
        nombre: "Litre",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/d/da/Lithraea_caustica.jpg",
        descripcion: "Planta conocida por provocar alergias cutáneas."
      }
    ],
    fauna: [
      {
        nombre: "Carpintero negro",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/8/81/Campephilus_magellanicus.jpg",
        descripcion: "Ave endémica que habita bosques australes."
      }
    ]
  },
  araucania: {
    flora: [
      {
        nombre: "Araucaria",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/4/48/Araucaria_araucana.jpg",
        descripcion: "Árbol sagrado para el pueblo mapuche."
      }
    ],
    fauna: [
      {
        nombre: "Pudu",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Pudu_puda.jpg",
        descripcion: "El ciervo más pequeño del mundo."
      }
    ]
  },
  aysen: {
    flora: [
      {
        nombre: "Coigüe",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/2/27/Nothofagus_dombeyi.jpg",
        descripcion: "Árbol predominante de bosques templados lluviosos."
      }
    ],
    fauna: [
      {
        nombre: "Monito del monte",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Dromiciops_gliroides.jpg",
        descripcion: "Marsupial nocturno endémico del sur de Chile."
      }
    ]
  },
  magallanes: {
    flora: [
      {
        nombre: "Calafate",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Berberis_microphylla.jpg",
        descripcion: "Arbusto espinoso con frutos comestibles."
      }
    ],
    fauna: [
      {
        nombre: "Puma",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/6/61/Puma_concolor_in_Santiago.jpg",
        descripcion: "Felino sigiloso, rey de la Patagonia."
      }
    ]
  }
};

const curiosidades = [
  "El pudú mide sólo entre 25 y 43 cm de alto.",
  "El calafate tiene una leyenda que asegura que quien lo come, vuelve a la Patagonia.",
  "La araucaria puede vivir más de 1.000 años.",
  "El monito del monte es el único marsupial hibernante de Sudamérica.",
  "El zorro chilla cambia su pelaje en invierno.",
  "El tamarugo sobrevive sin lluvia directa, gracias a la niebla.",
  "El carpintero negro tiene un canto muy característico que se escucha a larga distancia.",
  "El litre contiene sustancias que provocan alergia al contacto.",
  "El quillay se usa en cosméticos por su contenido de saponinas.",
  "El peumo atrae aves con sus frutos rojizos."
];

let indiceCuriosidad = 0;

function mostrarContenido(region, tipo) {
  $("#contenido").empty();

  if (region && tipo && datos[region] && datos[region][tipo]) {
    datos[region][tipo].forEach(item => {
      $("#contenido").append(`
        <div class="col-md-6 col-lg-4">
          <div class="card">
            <img src="${item.imagen}" class="card-img-top" alt="${item.nombre}">
            <div class="card-body">
              <h5 class="card-title">${item.nombre}</h5>
              <p class="card-text">${item.descripcion}</p>
            </div>
          </div>
        </div>
      `);
    });
  }
}

function cambiarCuriosidad() {
  $("#curiosidad-texto").fadeOut(500, function () {
    $(this).text(curiosidades[indiceCuriosidad]).fadeIn(500);
    indiceCuriosidad = (indiceCuriosidad + 1) % curiosidades.length;
  });
}

$(document).ready(function () {
  $("#region, #tipo").change(function () {
    const region = $("#region").val();
    const tipo = $("#tipo").val();
    mostrarContenido(region, tipo);
  });

  cambiarCuriosidad();
  setInterval(cambiarCuriosidad, 10000);
});
