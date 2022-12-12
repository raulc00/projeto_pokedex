const fetchPokemon = () => {

    const promises = [];

    for(let i = 1; i <= 151; i++){

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

        console.log(pokemon);
    }); 

        
};

fetchPokemon();


