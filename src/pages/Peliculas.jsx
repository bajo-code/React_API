import '../assets/scss/Peliculas.scss';
import "../assets/scss/Variables.scss"
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import { PeliculasLista } from './PeliculasLista';
import { PeliculasInfo } from './PeliculasInfo';

export function Peliculas() {
  return (
    <>
    <Router>
        <header className='peliculasHeader'>
            <Link to="/peliculas">
                <h1 className="peliculasTitulo">Películas disponibles</h1>
            </Link>
        </header>
        <main>
            <Switch>
                <Route exact path='/movies/:movieId'><PeliculasInfo /></Route>
                <Route exact path='/peliculas'><PeliculasLista /></Route>
            </Switch>
        </main>
    </Router>
      
    </>
  );
}

export default Peliculas;
