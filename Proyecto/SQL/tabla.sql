-- 1. Crear la base de datos
CREATE DATABASE IF NOT EXISTS biodiversidad
CHARACTER SET utf8mb4
COLLATE utf8mb4_general_ci;

-- 2. Usar la base de datos
USE biodiversidad;

-- 3. Crear la tabla principal: mamiferos
CREATE TABLE IF NOT EXISTS mamiferos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    especie VARCHAR(255) NOT NULL,          -- Nombre científico
    nombre_comun VARCHAR(255),              -- Nombre común
    regiones VARCHAR(255),                  -- Regiones donde habita
    peso_kg VARCHAR(50),                    -- Peso aproximado en kg
    medida_cm VARCHAR(50),                  -- Medida en cm
    alimentacion TEXT,                      -- Tipo de alimentación
    habitat TEXT,                           -- Hábitat
    comportamiento TEXT,                    -- Comportamiento
    colores TEXT,                           -- Colores característicos
    estado_iucn VARCHAR(100),               -- Estado de conservación (IUCN)
    notas TEXT                              -- Notas adicionales / endemicidad
);
