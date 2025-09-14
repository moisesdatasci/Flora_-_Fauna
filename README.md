# 🐾 Proyecto: Biodiversidad de Mamíferos en Chile

Este proyecto combina una **página web estática** y una **base de datos en MySQL** que almacena información sobre **185 especies de mamíferos en Chile**  
(163 nativas y 22 exóticas).  

El objetivo es ofrecer una herramienta educativa y de consulta que muestre datos relevantes como nombre científico, nombre común, hábitat, alimentación, estado de conservación y otras características.

---

## 📂 Estructura del Proyecto
```
📦 proyecto
├── 📝 index.html           
├── 📝 script.js            
├── 📝 styles.css        
├── 📁 sql                 
│   ├── 📝 biodiversidad.sql   
│   ├── 📝 query.sql           
│   ├── 📝 manipulacion.sql   
│   ├── 📝 ddl.sql              
│   └── 📝 tabla.sql           
└── 📝 README.md            
```
---

## 🚀 Cómo usar el proyecto

### 1. Clonar repositorio
```bash
git clone https://github.com/tu-usuario/proyecto.git
cd proyecto
```
### 2. Levantar la base de datos en MySQL

En MySQL Workbench o terminal:
```
SOURCE sql/biodiversidad.sql;
```
Esto creará la base de datos biodiversidad con la tabla mamiferos y los 185 registros.
---
## 📚 Contenido de la Base de Datos

La base de datos utilizada en este proyecto se llama **`biodiversidad`** y contiene información detallada sobre mamíferos. A continuación se presenta la estructura de la tabla principal:

### 🐾 Tabla: `mamíferos`

| Campo           | Tipo de dato | Descripción                          |
|----------------|--------------|--------------------------------------|
| `id`           | INT          | Clave primaria, auto-incremental     |
| `especie`      | VARCHAR      | Nombre científico                    |
| `nombre_comun` | VARCHAR      | Nombre común                         |
| `regiones`     | VARCHAR      | Regiones donde habita                |
| `peso_kg`      | VARCHAR      | Peso aproximado en kilogramos        |
| `medida_cm`    | VARCHAR      | Medida aproximada en centímetros     |
| `alimentacion` | TEXT         | Tipo de alimentación                 |
| `habitat`      | TEXT         | Descripción del hábitat              |
| `comportamiento`| TEXT        | Comportamiento típico                |
| `colores`      | TEXT         | Colores característicos              |
| `estado_iucn`  | VARCHAR      | Estado de conservación según la IUCN|
| `notas`        | TEXT         | Observaciones adicionales            |

> Esta tabla contiene **185 registros** que representan distintas especies de mamíferos, incluyendo información ecológica, morfológica y de conservación.

---

## 🧩 Componentes del Proyecto

Este proyecto combina el desarrollo web con el manejo de bases de datos, ofreciendo una estructura clara y funcional.

### 📜 Scripts incluidos

- `query.sql`: Consultas de ejemplo (SELECT, filtros, agrupaciones).
- `manipulation.sql`: Ejemplos de inserción, actualización y eliminación.
- `definition.sql`: Definición de estructuras (CREATE, ALTER, DROP).
- `tabla.sql`: Script base de creación de la tabla *mamíferos*.

### 🌐 Página Web

La interfaz web está compuesta por los siguientes archivos:

- `index.html`: Estructura básica del sitio.
- `script.js`: Lógica en JavaScript.
- `styles.css`: Diseño responsivo y estilos visuales.

### 🚀 Futuro del Proyecto

Se planea integrar este proyecto con **Django**, permitiendo conectar dinámicamente con la base de datos **MySQL**. Esto permitirá mostrar la información de los mamíferos directamente en la página web, con funcionalidades interactivas y filtrado en tiempo real.

### 👤 Autor

**Moisés Ortega**  
Desarrollador del proyecto y responsable de la estructura de datos y diseño web.

---
