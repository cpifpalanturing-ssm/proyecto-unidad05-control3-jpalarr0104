let express = require('express');
let mysql = require('mysql2');
let app = express();

// Aniadido porque no se aplicaban los cambios del servidor (con ayuda de la IA)

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

const conexion = mysql.createConnection({

    host: 'localhost',
    user: 'root',
    password: 'djblendmix',
    database: 'gamedex'

});

conexion.connect();


 // Para devolver los datos en formato json

app.get('/videojuegos', function(req, res) {

    conexion.query('SELECT * FROM videojuegos', function(error, resultados) {
    res.json(resultados);

    });
});

app.listen(3000); // Para ver en que puerto arranca

