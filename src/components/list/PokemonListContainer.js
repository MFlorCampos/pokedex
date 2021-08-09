
import { useState } from 'react';
import APIService from '../../services/APIService'
import Search from '../search/Search';
import PokemonList from './PokemonList';

let pokemonArray = [];

const PokemonListContainer = () => {
  const [text, setText] = useState("");

  const onSubmit = evt => {
      evt.preventDefault();
      if (text === "") {
        alert("Please enter something!");
      } else {
        alert(text);
        setText("");
      }
  };
  const onChange = evt => setText(evt.target.value);

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
  
  return (
    pokemones.length > 0  && <PokemonList pokemones={pokemones} /> && <Search text={text} onChange={onChange} onSubmitt={onSubmit} /> 
  )
}

export default PokemonListContainer;
