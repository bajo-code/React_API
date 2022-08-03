import './assets/scss/App.scss';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Aparcamientos from './pages/Aparcamientos'
import AppTiempo from './pages/AppTiempo'
import { Peliculas } from './pages/Peliculas';
import Inicio from './pages/Home';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
          <Route path='/' exact component={Inicio} />
          <Route exact path='/aparcamientos' component={Aparcamientos} />
          <Route exact path='/eltiempo' component={AppTiempo} />
          <Route exact path='/peliculas' component={Peliculas} />
      </Switch>
    </Router>
      
    </>
  );
}

export default App;
