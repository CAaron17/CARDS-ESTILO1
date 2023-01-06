
const container = document.querySelector('.contenedor');

function animeConPelicula(pic, name, estado, temp, cap, pel) {
    const div = document.createElement('div');
    const img = document.createElement('img');
    const h2 = document.createElement('h2');

    div.setAttribute('class', 'card');
    img.setAttribute('src', `media/${pic}.jpg`);

    h2.innerHTML =
        `
                ${name} <br> 
                <br>
                Estado: ${estado} <br>
                <br>
                Temporadas: ${temp} <br>
                <br>
                Capítulos: ${cap} <br>
                <br>
                Películas: ${pel}
            `;

    div.appendChild(img);
    div.appendChild(h2);

    container.appendChild(div);
};

function animeSinPelicula(pic, name, estado, temp, cap) {
    const div = document.createElement('div');
    const img = document.createElement('img');
    const h2 = document.createElement('h2');

    div.setAttribute('class', 'card');
    img.setAttribute('src', `media/${pic}.jpg`);

    h2.innerHTML =
        `
                ${name} <br> 
                <br>
                Estado: ${estado} <br>
                <br>
                Temporadas: ${temp} <br>
                <br>
                Capítulos: ${cap}
            `;

    div.appendChild(img);
    div.appendChild(h2);

    container.appendChild(div);
};


animeConPelicula('bunny', 'BUNNY GIRL SENPAI', 'en emisión', 1, 13, 1);
animeSinPelicula('snk', 'SHINGEKI NO KYOJIN', 'en emisión', 4, 75);
animeSinPelicula('fmab', 'FULL METAL ALCHEMIST BROTHERHOOD', 'finalizado', 1, 64);
animeSinPelicula('note', 'DEATH NOTE', 'finalizado', 1, 37);
animeConPelicula('pokemon', 'POKEMON', 'en emisión', 24, 'más de 1100', 22);
animeSinPelicula('another', 'ANOTHER', 'finalizado', 1, 12);
animeSinPelicula('arcane', 'ARCANE', 'en emisión', 1, 9);
animeSinPelicula('dress', 'SONO BISQUE DOLL', 'en emisión', 1, 12);
animeConPelicula('jujutsu', 'JUJUTSU KAISEN', 'en emisión', 1, 24, 1);
animeSinPelicula('kake', 'KAKEGURUI', 'en emisión', 2, 24);
animeSinPelicula('record', 'SHUUMATSU NO VALKYRIE', 'en emisión', 1, 12);
animeConPelicula('rengoku', 'KIMETSY NO YAIBA', 'en emisión', 2, 44, 1);