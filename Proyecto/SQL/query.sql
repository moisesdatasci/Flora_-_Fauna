-- Obtener todos los mamíferos en peligro crítico de extinción
SELECT nombre_comun, especie, estado_iucn
FROM mamiferos
WHERE estado_iucn = 'En Peligro Crítico';

-- Listar los mamíferos que habitan en la Región de Atacama
SELECT nombre_comun, especie, regiones
FROM mamiferos
WHERE regiones LIKE '%Atacama%';

-- Contar cuántos mamíferos tiene registrada cada categoría de la IUCN
SELECT estado_iucn, COUNT(*) AS cantidad
FROM mamiferos
GROUP BY estado_iucn
ORDER BY cantidad DESC;

-- Mostrar los 10 mamíferos más livianos (ordenados por peso)
SELECT nombre_comun, especie, peso_kg
FROM mamiferos
ORDER BY CAST(peso_kg AS DECIMAL(10,2)) ASC
LIMIT 10;