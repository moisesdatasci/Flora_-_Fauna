-- INSERTAR un nuevo mamífero (ejemplo ficticio)
INSERT INTO mamiferos 
(especie, nombre_comun, regiones, peso_kg, medida_cm, alimentacion, habitat, comportamiento, colores, estado_iucn, notas)
VALUES 
('Specimen ficticius', 'Mamífero de Prueba', 'Metropolitana', '5', '30', 'Omnívoro', 'Bosque', 'Solitario', 'Marrón', 'No Evaluado', 'Ejemplo de inserción');

-- ACTUALIZAR el estado de conservación de una especie
UPDATE mamiferos
SET estado_iucn = 'En Peligro'
WHERE nombre_comun = 'Pudú';

-- ELIMINAR un registro de prueba
DELETE FROM mamiferos
WHERE nombre_comun = 'Mamífero de Prueba';