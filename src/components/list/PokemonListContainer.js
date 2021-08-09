
import { useState } from 'react';
import APIService from '../../services/APIService'
import PokemonList from './PokemonList';

let pokemonArray = [];

const PokemonListContainer = () => {

  const [ isFetching, setIsFetching ] = useState(false);
  const [ pokemones, setPokemones ] = useState([]);

  if (!isFetching && pokemones.length === 0) {
    setIsFetching(true);
    
    APIService
      .getPokemonsByLimit(151)
      .then( async (res) => {
        const promises = res.results && res.results.map( async (pokemon) => {
          return await APIService
            .getPokemonsById(pokemon.url)
            .then((pokemonres) => ({
              id: pokemonres.id,
              name: pokemon.name,
              types: pokemonres.types,
              image: `https://img.pokemondb.net/artwork/${pokemon.name}.jpg`,
            })).then( (pokemon) => {
              pokemonArray[pokemon.id] = pokemon;
            });
        });
  
        return await Promise.all(promises);
      }).then(()=> {
        setPokemones(pokemonArray)
        setIsFetching(false);  
      })
  } 
  
  if (isFetching) {
    return <div>Loading...</div>
  }
  
  return pokemones.length > 0  && <PokemonList pokemones={pokemones} /> 
}

export default PokemonListContainer;
