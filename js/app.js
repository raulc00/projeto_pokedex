const pokedex = document.getElementById("pokedex");

console.log(pokedex);

const fetchPokemon = () => {

    const promises = [];

    for(let i = 1; i <= 251; i++){

        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then( (res) => res.json()));

    }

    Promise.all(promises).then( (results) => {

        const pokemon = results.map((data) => ({

            name: data.name,
            id: data.id,
            imagem: data.sprites.other.dream_world['front_default'],
            type: data.types.map((type) => type.type.name).join(', ')
        }));

        displayPokemon(pokemon);
    }); 

        
};

const displayPokemon = (pokemon) => {

    console.log(pokemon);
    const pokemonHTMLString = pokemon.map( pokemon_id => `
    
    <li class = "card">
        <img class = "card_img" src= "${pokemon_id.imagem}"/>
        <h2 class = "card_title">${pokemon_id.id}. ${pokemon_id.name} </h2>
        <p class = "card_subtitle">Type: ${pokemon_id.type} </p>
    </li>
    
    `).join('');

    pokedex.innerHTML = pokemonHTMLString;
}

fetchPokemon();




