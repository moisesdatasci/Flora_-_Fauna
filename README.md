# 🌎 Proyecto Biodiversidad de Mamíferos en Chile

Este proyecto contiene una página web y una base de datos en **MySQL** con información sobre 185 especies de mamíferos en Chile (163 nativas y 22 exóticas).

---

## 📂 Estructura del proyecto

proyecto/
│

├── index.html

├── script.js

├── styles.css
│

├── sql/

│   ├── biodiversidad.sql       # Base de datos con registros

│   ├── query.sql               # Consultas SELECT

│   ├── manipulacion.sql        # Consultas INSERT, UPDATE, DELETE

│   ├── ddl.sql                 # Definición de estructuras (CREATE, ALTER, DROP)

│   ├── tabla.sql               # Creación de tabla(s)
│

└── README.md

---

## 🚀 Cómo usar el proyecto

### 1. Clonar repositorio
```bash
git clone https://github.com/tu-usuario/proyecto.git
cd proyecto
2. Levantar la base de datos en MySQL
En MySQL Workbench o terminal:

sql
Copy code
SOURCE sql/biodiversidad.sql;
Esto creará la base de datos biodiversidad con la tabla mamiferos y los 185 registros.

📊 Contenido de la base de datos
Base: biodiversidad

Tabla principal: mamiferos

Campos:

id (INT, PK, AUTO_INCREMENT)

especie (VARCHAR) → Nombre científico

nombre_comun (VARCHAR)

regiones (VARCHAR)

peso_kg (VARCHAR)

medida_cm (VARCHAR)

alimentacion (TEXT)

habitat (TEXT)

comportamiento (TEXT)

colores (TEXT)

estado_iucn (VARCHAR)

notas (TEXT)

📌 Scripts incluidos
query.sql: Consultas de ejemplo (SELECT, filtros, agrupaciones).

manipulacion.sql: Ejemplos de inserción, actualización y eliminación.

ddl.sql: Definición de estructuras (CREATE, ALTER, DROP).

tabla.sql: Script base de creación de la tabla mamiferos.

🖥️ Página web
La página web incluye:

index.html: estructura básica del sitio.

script.js: lógica en JavaScript.

styles.css: diseño responsivo y estilos.

🔮 Futuro
Este proyecto se integrará con Django para conectarse dinámicamente con la base de datos MySQL y mostrar la información de los mamíferos directamente en la página web.

👨‍💻 Autor
Moisés Ortega

yaml
Copy code

---
