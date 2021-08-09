import Header from '../components/Header';
import '../Styles.scss';
import PokemonList from '../components/list/PokemonList';


function ResultsPage(props) {

    return (
        <div className="App">
            <header className="App-header">
                <Header {...props} />
            </header>

            <div className="container">
                <PokemonList {...props} />
            </div>
        </div>
    );
}

export default ResultsPage;
