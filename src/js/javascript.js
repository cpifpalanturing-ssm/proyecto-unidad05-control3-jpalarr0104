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
                div.innerHTML = '<h3>' + juego.nombre + '</h3>' + '<p>Genero: ' + juego.genero + '</p>' + '<p>Plataforma: ' + juego.plataforma + '</p>' + '<p>Año: ' + juego.anio + '</p>' + '<p>' + juego.descripcion + '</p>' + '<button class="btn-borrar" data-id="' + juego.Cod_Vid + '">Borrar</button>' + '<button class="btn-editar" data-id="' + juego.Cod_Vid + '">Editar</button>';
                lista.appendChild(div);

            });
        });
});

document.addEventListener('click', function(click) {

    if (click.target.id == 'btn-añadir') {

        let juego = {

            nombre: document.getElementById('nombre').value,
            genero: document.getElementById('genero').value,
            plataforma: document.getElementById('plataforma').value,
            anio: document.getElementById('anio').value,
            descripcion: document.getElementById('descripcion').value

        };

        fetch('http://localhost:3000/videojuegos', {

            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(juego)
            
        })

        .then(function(res) {

            return res.json();

        })

        .then(function(data) {

            location.reload();

        });

    }

document.addEventListener('click', function(click) {

    if (click.target.className == 'btn-borrar') {

        let id = click.target.getAttribute('data-id');

        fetch('http://localhost:3000/videojuegos/' + id, {
            method: 'DELETE'
        })
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            location.reload();
        });
    }

    if (click.target.className == 'btn-editar') {

        let id = click.target.getAttribute('data-id');
        let nombre = prompt('Nuevo nombre:');
        let genero = prompt('Nuevo genero:');
        let plataforma = prompt('Nueva plataforma:');
        let anio = prompt('Nuevo año:');
        let descripcion = prompt('Nueva descripcion:');

        fetch('http://localhost:3000/videojuegos/' + id, {

            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({nombre, genero, plataforma, anio, descripcion})

        })

        .then(function(res) {

            return res.json();

        })

        .then(function(data) {

            location.reload();
            
        });
    }

});

});