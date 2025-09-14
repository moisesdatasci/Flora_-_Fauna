-- CREAR una tabla de observadores (relacionada con mamíferos observados)
CREATE TABLE observadores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    fecha DATE,
    region VARCHAR(100),
    mamifero_id INT,
    FOREIGN KEY (mamifero_id) REFERENCES mamiferos(id)
);

-- ALTERAR tabla mamiferos para agregar columna "poblacion_aprox"
ALTER TABLE mamiferos
ADD poblacion_aprox INT;

-- ELIMINAR tabla de prueba
DROP TABLE IF EXISTS observadores;
