-- Jesus Palmero Arrabal
-- Base de Datos para GameDex

CREATE DATABASE gamedex;
USE gamedex;

CREATE TABLE videojuegos (
    Cod_Vid INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50),
    genero VARCHAR(50),
    plataforma VARCHAR(50),
    anio INT,
    descripcion VARCHAR(150)
);

CREATE TABLE valoraciones (
    Cod_Val INT PRIMARY KEY AUTO_INCREMENT,
    Cod_Juego INT,
    puntuacion INT,
    comentario VARCHAR(150),
    FOREIGN KEY (Cod_Juego) REFERENCES videojuegos(Cod_Vid)
);

CREATE TABLE wishlist (
    Cod_Wish INT PRIMARY KEY AUTO_INCREMENT,
    Cod_Juego INT,
    FOREIGN KEY (Cod_Juego) REFERENCES videojuegos (Cod_Vid)
);

INSERT INTO videojuegos (nombre, genero, plataforma, anio, descripcion) VALUES
('Valorant', 'Shooter', 'PC', 2020, 'Shooter táctico en primera persona'),
('Elden Ring', 'RPG', 'PC', 2022, 'Videojuego de rol de acción'),
('Destiny 2', 'Shooter', 'PC', 2017, 'Videojuego de disparos en primera persona'),
('Rocket League', 'Deportes', 'PC', 2015, 'Videojuego de deportes híbrido que combina fútbol estilo arcade con vehículos motorizados'),
('Crysis 3', 'Shooter', 'PC', 2013, 'Videojuego de disparos en primera persona multijugador');

INSERT INTO valoraciones (Cod_Juego, puntuacion, comentario) VALUES
(1, 5, 'Un completo dispensador de dopamina'),
(2, 5, 'El mejor juego de la historia, tal y como dijo Elon Musk'),
(3, 4, 'El juego de mi infancia, una obra maestra');

INSERT INTO wishlist (Cod_Juego) VALUES
(4),
(5);