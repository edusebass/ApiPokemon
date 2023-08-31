function gerRandomInt(min, max) {
    min = Math.ceil(min); 
    max = Math.ceil(max);
    return Math.floor(Math.random() * (max - min));
}

const fecthData = async(id) => {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await res.json();
        console.log(data);

        //creacion de pokemon con los datos a trabajar
        const pokemon = {
            nombre: data.name,
            imgPokemon: data.sprites.other.dream_world.front_default,
            experiencia: data.base_experience,
            tipo: data.types[0].type.name,
            poder: data.stats[0].base_stat
        };

        pintarCard(pokemon); //mandamos al pokemon

    } catch (error) {
        console.log(error);
    }
}

const pokemonRandom = gerRandomInt(1, 151)
fecthData(pokemonRandom);


// Construccion de la carta con la API
const pintarCard = (pokemon) => {
    console.log(pokemon);
    
    const flex = document.querySelector(".flex"); //aqui va ir el card
    const template = document.querySelector("#template").content; // capturamos todo el template

    const clone = template.cloneNode(true); //clonamos porque no debemos trbajr de manera directa en el template
    const fragment = document.createDocumentFragment();

    clone.querySelector(".card-body-img").setAttribute("src", pokemon.imgPokemon);
    clone.querySelector(".card-body-title").innerHTML = `${pokemon.nombre}<span> ${pokemon.experiencia}<span/>`
    clone.querySelector(".card-body-text").innerHTML = `${pokemon.tipo}`
    clone.querySelector(".card-footer-social").innerHTML = `<h3>${pokemon.poder}</h3>
                                                            <p>Vida</p></div>`
    clone.querySelector(".card-footer-social").innerHTML = `<h3>${pokemon.poder}</h3>
    <p>Poder</p></div>`
    clone.querySelector(".card-footer-sociall").innerHTML = `<h3>${pokemon.poder}</h3>
    <p>Vida</p></div>`
    clone.querySelector(".card-footer-socialll").innerHTML = `<h3>${pokemon.poder}</h3>
    <p>Vida</p></div>`

    fragment.appendChild(clone);

    flex.appendChild(fragment);

}