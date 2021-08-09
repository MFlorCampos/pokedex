import Header from './components/Header';
import Styles from './Styles.scss';
import PokemonListContainer from './components/list/PokemonListContainer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>

      <div className="container">
        <PokemonListContainer />
      </div>
    </div>
  );
}

export default App;
