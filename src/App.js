import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages';
import AboutPage from './pages/about';
import TournamentPage from './pages/tournament';
import StorePage from './pages/store';
import HomePages from './pages/homePage';
import ReportScoresPage from './pages/tournament/reportScores';
import SignUpPage from './pages/tournament/signUp';
import HoodiePage from './pages/hoodie';
import SweatsPage from './pages/sweats';
import MousepadPage from './pages/mousepad';
import ShirtPage from './pages/shirt';
import CartPage from './pages/CartPage';
import successPage from './pages/successPage';
import adminPage from './pages/adminPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={AboutPage} exact />
        <Route path="/tournaments" component={TournamentPage} exact />
        <Route path="/store" component={StorePage} exact />
        <Route path="/home" component={HomePages} exact />
        <Route path="/tournaments/scores" component={ReportScoresPage} exact />
        <Route path="/tournaments/signup" component={SignUpPage} exact />
        <Route path="/store/hoodie" component={HoodiePage} exact />
        <Route path="/store/sweats" component={SweatsPage} exact />
        <Route path="/store/mousepad" component={MousepadPage} exact />
        <Route path="/store/shirt" component={ShirtPage} exact />
        <Route path="/cart" component={CartPage} exact />
        <Route path="/checkout?success=true" component={successPage} exact />
        <Route path="/tournament/admin" component={adminPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
