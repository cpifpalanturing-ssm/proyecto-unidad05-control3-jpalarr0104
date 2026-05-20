document.addEventListener('DOMContentLoaded', function () {

    fetch('http://localhost:3000/videojuegos')
        .then(function (res) {

            return res.json();

        })

        .then(function (data) {

            let lista = document.getElementById('lista-juegos');
            lista.className = 'contenedor-juegos';
            data.forEach(function (juego) {

                let div = document.createElement('div');
                div.className = 'tarjeta-juego';
                div.innerHTML = '<h3>' + juego.nombre + '</h3>' + '<p>Genero: ' + juego.genero + '</p>' + '<p>Plataforma: ' + juego.plataforma + '</p>' + '<p>Año: ' + juego.anio + '</p>' + '<p>' + juego.descripcion + '</p>';
                lista.appendChild(div);

            });
        });
});