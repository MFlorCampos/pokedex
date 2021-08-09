import React from 'react'
import PokemonCard from '../card/PokemonCard';

const namespace = "ui-pokemon-list";

const PokemonList = (props) => {
    const { pokemones } = props;
 
    return (
        <div className={`${namespace}`}>
          { pokemones && pokemones.map((pokemon, i) => <PokemonCard key={`${pokemon.name}-list-${i}`}  {...pokemon} /> )}
        </div>
      )
  }

export default PokemonList;
