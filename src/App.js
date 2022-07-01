import './styles/App.scss';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages/Home'
import Aparcamientos from './pages/Aparcamientos'
import AppTiempo from './pages/AppTiempo'

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/aparcamientos' component={Aparcamientos} />
          <Route path='/eltiempo' component={AppTiempo} />
      </Switch>
    </Router>
      
    </>
  );
}

export default App;
