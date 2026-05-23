let express = require('express');
let mysql = require('mysql2');
let app = express();

// Para que lleguen bien los datos del formulario
app.use(express.json());

// Para que no de error de CORS
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
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

// Para añadir un juego
app.post('/videojuegos', function(req, res) {
    conexion.query('INSERT INTO videojuegos (nombre, genero, plataforma, anio, descripcion) VALUES (?, ?, ?, ?, ?)',
    [req.body.nombre, req.body.genero, req.body.plataforma, req.body.anio, req.body.descripcion],
    function(error, resultado) {
        res.json(resultado);
    });
});

// Para editar un juego
app.put('/videojuegos/:id', function(req, res) {
    conexion.query('UPDATE videojuegos SET nombre=?, genero=?, plataforma=?, anio=?, descripcion=? WHERE Cod_Vid=?',
    [req.body.nombre, req.body.genero, req.body.plataforma, req.body.anio, req.body.descripcion, req.params.id],
    function(error, resultado) {
        res.json(resultado);
    });
});

// Para eliminar un juego
app.delete('/videojuegos/:id', function(req, res) {
    conexion.query('DELETE FROM videojuegos WHERE Cod_Vid=?',
    [req.params.id],
    function(error, resultado) {
        res.json({ ok: true });
    });
});

app.listen(3000); // Para ver en que puerto arranca