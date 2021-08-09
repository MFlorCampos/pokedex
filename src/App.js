import ResultsPage from './pages/results';
import { useState } from 'react';
import APIService from './services/APIService'

let pokemonArray = [];

const App = () => {

  const [text, setText] = useState("");
  const [ allPokemons , setAllPokemons] = useState([]);

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
        setAllPokemons(pokemonArray)
        setIsFetching(false);  
      })
  } 
  const onSubmit = evt => {
    evt.preventDefault();
    if (text === ""){ 
      setPokemones(allPokemons) 
      alert("Ingrese el nombre del Pokemon");
    }

    const resultSearch = allPokemons.filter((pokemon) => { 
      return pokemon.name.includes(text.toLowerCase())
    });

    if (resultSearch.length < 1){ 
      alert("Su búsqueda no coincide con ningún Pokemon") 
    }
    setPokemones(resultSearch)

  };

  const allProps = {
    pokemones,
    text,
    onChange,
    onSubmit,
  }

  if (isFetching) {
    return <div className="Loader">
              <div className="box-loader">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/601px-Pokebola-pokeball-png-0.png" alt="loading"/>
                <span className="loadingText">Loading...</span>
              </div>  
            </div>
  }


  return (
    pokemones.length > 0  && <ResultsPage {...allProps}/>
  )
}

export default App;
