# GAMEDEX

## Integrantes
- Jesus Palmero Arrabal

## Descripcion
La idea es el desarrollo de una web que permita buscar videojuegos, valorarlos 
y la implementacion de una lista de deseos para aniadir tus juegos favoritos

## Objetivos
- Permitir al usuario buscar videojuegos
- Implementar un sistema de valoraciones y de wishlist
- Aprender a conectar una web con una base de datos utilizando Node.js

## Funcionalidades Principales
- Ver un catalogo de videojuegos
- Valoracion de videojuegos con un sistema de estrellas
- Aniadir un juego a una lista de deseos
- Aniadir, eliminar y editar videojuegos

## Usuarios
Usuarios que tengan pasion por los videojuegos y quieran llevar un registro
de los juegos a los que han jugado

## Estructura de la Aplicacion

### Frontend
Permite al usuario ver un amplio catalogo de juegos,
donde podra aniadir juegos a su wishlist y mediante un fetch
tendra la posibilidad de valorarlos

### Backend
Uso de Node.js para crear los endpoints que conectaran la web
con la base de datos

### Base de Datos
Creacion de tablas para almacenar los videojuegos,
las valoraciones y las listas de deseos de los usuarios

## Control de cambios

### Añadido
- Pagina principal con el catalogo de juegos
- Pagina sobre-nosotros
- Estilos CSS
- Archivo javascript.js para conectar la web con el servidor
- Servidor con Node.js y Express
- Endpoint GET /videojuegos

### Modificado
- Nada de momento

### Eliminado
- Nada de momento

### Justificacion de los cambios
He creado la base de la pagina web, donde he hecho el html con sus estilos y también he añadido un 
servidor con Node.js que se conecta a la base de datos y devuelve los juegos, para que asi la pagina
muestre los datos de estos

## Control de cambios (Tercer Checkpoint)

### Añadido
- Endpoint POST /videojuegos para añadir juegos
- Endpoint PUT /videojuegos/:id para editar juegos
- Endpoint DELETE /videojuegos/:id para eliminar juegos
- Formulario en la pagina principal para añadir juegos
- Botones de editar y borrar en cada tarjeta de juego

### Modificado
- El CORS del servidor para que funcionen el POST, PUT y DELETE, ya que daba error y no arrancaba el servidor
- El javascript.js para añadir las funciones de editar, borrar y añadir

### Eliminado
- Nada

### Justificacion de los cambios
He añadido el CRUD completo para que la pagina no sea solo de consulta, sino que tambien 
se puedan añadir juegos nuevos, editarlos y borrarlos. Tambien he tenido que tocar el CORS 
del servidor porque si no los botones no funcionaban

## Como ejecutar el proyecto

1. Importar el fichero gamedex.sql en MySQL
2. Instalar las dependencias con: npm install
3. Arrancar el servidor con: node backend/server.js
4. Abrir src/index.html con Live Server

## Aclaraciones
1. Habia creado la primera parte en un repositorio personal mio, ya que no habia entendido
el funcionamiento de GitHub Classroom. Por eso, solamente aparece un commit en el primer 
checkpoint