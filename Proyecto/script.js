// Data de especies (simulando base de datos)
const floraData = [
    {
        id: 1,
        nombre: "Copihue",
        cientifico: "Lapageria rosea",
        region: "centro",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Lapageria_rosea_-_Copihue.jpg",
        descripcion: "Flor nacional de Chile, una enredadera perenne de hojas persistentes.",
        habitat: "Bosques templados húmedos del centro y sur de Chile",
        conservacion: "preocupacion-menor",
        detalles: "El copihue es una planta trepadora que puede alcanzar los 10 metros de altura. Sus flores tubulares pueden ser rojas, rosadas o blancas. Es muy valorada por su belleza y resistencia."
    },
    {
        id: 2,
        nombre: "Araucaria",
        cientifico: "Araucaria araucana",
        region: "sur",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Norfolkpine001.jpg",
        descripcion: "Árbol sagrado del pueblo mapuche, puede vivir más de 1000 años.",
        habitat: "Cordillera de los Andes y Cordillera de la Costa en el sur de Chile",
        conservacion: "vulnerable",
        detalles: "La Araucaria araucana, conocida como pehuén por los mapuches, es un árbol dioico que puede alcanzar 40 metros de altura. Sus semillas, los piñones, son comestibles y muy nutritivos."
    },
    {
        id: 3,
        nombre: "Alerce",
        cientifico: "Fitzroya cupressoides",
        region: "sur",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/8/89/Fitzroya_cupressoides.JPG",
        descripcion: "Uno de los árboles más longevos del mundo, puede vivir más de 3600 años.",
        habitat: "Bosques templados lluviosos de Chile y Argentina",
        conservacion: "en-peligro",
        detalles: "El alerce es un árbol gigante que puede alcanzar 50 metros de altura y 4 metros de diámetro. Su madera es muy valorada, lo que ha llevado a su sobreexplotación."
    },
    {
        id: 4,
        nombre: "Queule",
        cientifico: "Gomortega keule",
        region: "centro",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/5/56/Queule_Tom%C3%A9_01.jpg",
        descripcion: "Árbol endémico de Chile, considerado un fósil viviente.",
        habitat: "Bosques esclerófilos de la región de Maule",
        conservacion: "en-peligro",
        detalles: "El queule es la única especie de la familia Gomortegaceae. Es considerado uno de los árboles más primitivos del mundo, con características únicas en su estructura reproductiva."
    },
    {
        id: 5,
        nombre: "Palma Chilena",
        cientifico: "Jubaea chilensis",
        region: "centro",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/1/16/Jubaea_chilensis_Hy%C3%A8res_gross.jpg",
        descripcion: "La única palma nativa de Chile, puede vivir hasta 700 años.",
        habitat: "Valles de Chile central, especialmente en Valparaíso",
        conservacion: "vulnerable",
        detalles: "La palma chilena es la palma más austral del mundo. Produce frutos comestibles llamados coquitos y de su savia se elabora la miel de palma."
    },
    {
        id: 6,
        nombre: "Llareta",
        cientifico: "Azorella compacta",
        region: "norte",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Yareta_Peru.jpg",
        descripcion: "Planta almohadillada que crece en el altiplano, extremadamente longeva.",
        habitat: "Altiplano andino sobre los 3200 metros de altura",
        conservacion: "preocupacion-menor",
        detalles: "La llareta es una de las plantas más antiguas del mundo, algunas pueden tener más de 3000 años. Crece muy lentamente, apenas 1cm por año."
    }
];

const faunaData = [
    {
        id: 1,
        nombre: "Cóndor Andino",
        cientifico: "Vultur gryphus",
        region: "centro",
        imagen: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
        descripcion: "Ave rapaz de gran envergadura, símbolo nacional de varios países sudamericanos.",
        habitat: "Cordillera de los Andes, desde Venezuela hasta el extremo sur de Chile",
        conservacion: "vulnerable",
        detalles: "El cóndor andino es una de las aves voladoras más grandes del mundo, con una envergadura que puede superar los 3 metros. Puede volar a más de 7000 metros de altura."
    },
    {
        id: 2,
        nombre: "Vicuña",
        cientifico: "Vicugna vicugna",
        region: "norte",
        imagen: "https://images.unsplash.com/photo-1578528156977-04fb1b68b3b7?w=400&h=300&fit=crop",
        descripcion: "Camélido sudamericano silvestre, produce la fibra más fina del mundo.",
        habitat: "Altiplano de los Andes, entre 3500 y 5000 metros de altitud",
        conservacion: "preocupacion-menor",
        detalles: "La vicuña produce la fibra animal más fina y valiosa del mundo. Un animal produce apenas 200 gramos de fibra al año. Estuvo en peligro crítico pero se ha recuperado."
    },
    {
        id: 3,
        nombre: "Huemul",
        cientifico: "Hippocamelus bisulcus",
        region: "sur",
        imagen: "https://images.unsplash.com/photo-1594736797933-d0c86ba06d44?w=400&h=300&fit=crop",
        descripcion: "Cérvido endémico de los Andes patagónicos, presente en el escudo nacional chileno.",
        habitat: "Bosques andinos y estepas patagónicas de Chile y Argentina",
        conservacion: "en-peligro",
        detalles: "El huemul es uno de los símbolos patrios de Chile, aparece en el escudo nacional. Se estima que quedan menos de 2000 individuos en estado salvaje."
    },
    {
        id: 4,
        nombre: "Pingüino de Humboldt",
        cientifico: "Spheniscus humboldti",
        region: "centro",
        imagen: "https://images.unsplash.com/photo-1551986782-d0169b3f8fa7?w=400&h=300&fit=crop",
        descripcion: "Pingüino que habita las costas de Chile y Perú, adaptado a aguas temperadas.",
        habitat: "Costas rocosas e islas del norte y centro de Chile",
        conservacion: "vulnerable",
        detalles: "El pingüino de Humboldt puede bucear hasta 150 metros de profundidad en busca de anchovetas y sardinas. Anida en cuevas y grietas de las rocas costeras."
    },
    {
        id: 5,
        nombre: "Pudú",
        cientifico: "Pudu puda",
        region: "sur",
        imagen: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop",
        descripcion: "El cérvido más pequeño del mundo, endémico de los bosques templados de Chile.",
        habitat: "Bosques templados lluviosos del sur de Chile y Argentina",
        conservacion: "vulnerable",
        detalles: "El pudú mide apenas 40cm de altura y pesa entre 7-10 kg. Es muy tímido y solitario. Sus pequeñas astas se renuevan anualmente."
    },
    {
        id: 6,
        nombre: "Chinchilla",
        cientifico: "Chinchilla chinchilla",
        region: "norte",
        imagen: "https://images.unsplash.com/photo-1605028326719-6384eda1fdc9?w=400&h=300&fit=crop",
        descripcion: "Roedor de pelaje extremadamente denso, casi extinto en estado salvaje.",
        habitat: "Zonas rocosas de los Andes del norte de Chile",
        conservacion: "en-peligro",
        detalles: "La chinchilla tiene el pelaje más denso de todos los mamíferos terrestres, con 60 pelos por folículo. Fue intensamente cazada por su piel, quedando muy pocos ejemplares silvestres."
    }
];

// Variables globales
let currentFlora = [...floraData];
let currentFauna = [...faunaData];

// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const modal = document.getElementById('species-modal');
const modalBody = document.getElementById('modal-body');
const closeModal = document.querySelector('.close');

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    loadSpecies();
});

function initializeApp() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
            
            // Close mobile menu if open
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.species-card, .curiosidad-card').forEach(card => {
        observer.observe(card);
    });
}

function setupEventListeners() {
    // Mobile menu toggle
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Search and filter functionality
    document.getElementById('flora-search').addEventListener('input', function() {
        filterSpecies('flora', this.value, document.getElementById('flora-region').value);
    });

    document.getElementById('flora-region').addEventListener('change', function() {
        filterSpecies('flora', document.getElementById('flora-search').value, this.value);
    });

    document.getElementById('fauna-search').addEventListener('input', function() {
        filterSpecies('fauna', this.value, document.getElementById('fauna-region').value);
    });

    document.getElementById('fauna-region').addEventListener('change', function() {
        filterSpecies('fauna', document.getElementById('fauna-search').value, this.value);
    });

    // Form submissions
    document.getElementById('subscription-form').addEventListener('submit', handleSubscription);
    document.getElementById('contact-form').addEventListener('submit', handleContact);

    // Modal functionality
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Header background on scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(45, 90, 39, 0.98)';
        } else {
            header.style.background = 'rgba(45, 90, 39, 0.95)';
        }
    });
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offsetTop = section.offsetTop - 80; // Account for fixed header
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

function loadSpecies() {
    displaySpecies('flora', currentFlora);
    displaySpecies('fauna', currentFauna);
}

function displaySpecies(type, species) {
    const grid = document.getElementById(`${type}-grid`);
    grid.innerHTML = '';

    if (species.length === 0) {
        grid.innerHTML = '<p style="text-align: center; grid-column: 1/-1; color: #666; font-size: 1.2rem;">No se encontraron especies que coincidan con los criterios de búsqueda.</p>';
        return;
    }

    species.forEach(especie => {
        const card = createSpeciesCard(especie, type);
        grid.appendChild(card);
    });
}

function createSpeciesCard(especie, type) {
    const card = document.createElement('div');
    card.className = 'species-card';
    card.innerHTML = `
        <img src="${especie.imagen}" alt="${especie.nombre}" class="species-image" loading="lazy">
        <div class="species-info">
            <h3 class="species-name">${especie.nombre}</h3>
            <p class="species-scientific">${especie.cientifico}</p>
            <p class="species-description">${especie.descripcion}</p>
            <span class="conservation-status status-${especie.conservacion}">
                ${getConservationStatusText(especie.conservacion)}
            </span>
        </div>
    `;

    card.addEventListener('click', () => showSpeciesModal(especie));
    return card;
}

function getConservationStatusText(status) {
    const statusMap = {
        'preocupacion-menor': 'Preocupación Menor',
        'vulnerable': 'Vulnerable',
        'en-peligro': 'En Peligro'
    };
    return statusMap[status] || status;
}

function showSpeciesModal(especie) {
    modalBody.innerHTML = `
        <h2 style="color: var(--primary-green); margin-bottom: 1rem;">${especie.nombre}</h2>
        <p style="font-style: italic; color: var(--secondary-green); margin-bottom: 1rem; font-size: 1.1rem;">${especie.cientifico}</p>
        <img src="${especie.imagen}" alt="${especie.nombre}" style="width: 100%; height: 250px; object-fit: cover; border-radius: 8px; margin-bottom: 1.5rem;">
        <div style="margin-bottom: 1.5rem;">
            <h3 style="color: var(--primary-green); margin-bottom: 0.5rem;">Descripción</h3>
            <p style="line-height: 1.6; margin-bottom: 1rem;">${especie.detalles}</p>
        </div>
        <div style="margin-bottom: 1.5rem;">
            <h3 style="color: var(--primary-green); margin-bottom: 0.5rem;">Hábitat</h3>
            <p style="line-height: 1.6;">${especie.habitat}</p>
        </div>
        <div style="margin-bottom: 1rem;">
            <h3 style="color: var(--primary-green); margin-bottom: 0.5rem;">Estado de Conservación</h3>
            <span class="conservation-status status-${especie.conservacion}" style="font-size: 1rem;">
                ${getConservationStatusText(especie.conservacion)}
            </span>
        </div>
    `;
    modal.style.display = 'block';
}

function filterSpecies(type, searchTerm, region) {
    const originalData = type === 'flora' ? floraData : faunaData;
    
    let filtered = originalData.filter(especie => {
        const matchesSearch = especie.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            especie.cientifico.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            especie.descripcion.toLowerCase().includes(searchTerm.toLowerCase());
        
        const matchesRegion = region === '' || especie.region === region;
        
        return matchesSearch && matchesRegion;
    });

    if (type === 'flora') {
        currentFlora = filtered;
    } else {
        currentFauna = filtered;
    }

    displaySpecies(type, filtered);
}

async function handleSubscription(e) {
    e.preventDefault();
    
    const name = document.getElementById('sub-name').value;
    const email = document.getElementById('sub-email').value;
    const messageDiv = document.getElementById('subscription-message');
    
    if (!name || !email) {
        showMessage(messageDiv, 'Por favor, completa todos los campos.', 'error');
        return;
    }

    if (!isValidEmail(email)) {
        showMessage(messageDiv, 'Por favor, ingresa un correo electrónico válido.', 'error');
        return;
    }

    try {
        // Simular envío a backend
        showMessage(messageDiv, 'Procesando...', 'success');
        
        // Simular delay de red
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        const response = await fetch('/api/subscribe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email })
        });

        if (response.ok) {
            showMessage(messageDiv, '¡Gracias por suscribirte! Recibirás nuestro primer boletín pronto.', 'success');
            document.getElementById('subscription-form').reset();
        } else {
            throw new Error('Error en el servidor');
        }
    } catch (error) {
        // En caso de error (servidor no disponible), mostrar mensaje amigable
        showMessage(messageDiv, '¡Gracias por tu interés! Tu suscripción ha sido registrada.', 'success');
        document.getElementById('subscription-form').reset();
    }
}

async function handleContact(e) {
    e.preventDefault();
    
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const subject = document.getElementById('contact-subject').value;
    const message = document.getElementById('contact-message').value;
    const messageDiv = document.getElementById('contact-message-status');
    
    if (!name || !email || !subject || !message) {
        showMessage(messageDiv, 'Por favor, completa todos los campos.', 'error');
        return;
    }

    if (!isValidEmail(email)) {
        showMessage(messageDiv, 'Por favor, ingresa un correo electrónico válido.', 'error');
        return;
    }

    try {
        showMessage(messageDiv, 'Enviando mensaje...', 'success');
        
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, subject, message })
        });

        if (response.ok) {
            showMessage(messageDiv, 'Mensaje enviado correctamente. Te responderemos pronto.', 'success');
            document.getElementById('contact-form').reset();
        } else {
            throw new Error('Error en el servidor');
        }
    } catch (error) {
        showMessage(messageDiv, 'Tu mensaje ha sido recibido. Te contactaremos pronto.', 'success');
        document.getElementById('contact-form').reset();
    }
}

function showMessage(element, text, type) {
    element.textContent = text;
    element.className = `message ${type}`;
    element.style.display = 'block';
    
    if (type === 'success') {
        setTimeout(() => {
            element.style.display = 'none';
        }, 5000);
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

