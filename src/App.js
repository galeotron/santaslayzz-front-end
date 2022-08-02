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
import SuccessPage from './pages/SuccessPage';
import AdminPage from './pages/AdminPage';
import FailedPage from './pages/FailedPage';
import SuccessTourneyPage from './pages/SuccessTourneyPage';
import FailedTourneyPage from './pages/FailedTourneyPage';
import ProtectedRoute from './components/ProtectedRoute';
import { useState } from "react";
import SignInPage from './pages/SignInPage';

function App() {

  const [isAuth, setIsAuth] = useState(false);

  console.log("app" + isAuth)

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
        <Route path="/checkout/success" component={SuccessPage} exact />
        <Route path="/checkout/failed" component={FailedPage} exact />
        <Route path="/tournament/success" component={SuccessTourneyPage} exact />
        <Route path="/tournament/failed" component={FailedTourneyPage} exact />
        {/* <Route path="/signin" component={SignInPage} setIsAuth={setIsAuth} exact /> */}
        <Route path = "/signin" render={() => <SignInPage setIsAuth={setIsAuth} isAuth={isAuth} />} exact/>
        <ProtectedRoute  path="/tournament/admin" component={AdminPage} isAuth={isAuth} exact/>
      </Switch>
      {/* <ProtectedRoute  path="/tournament/admin" component={AdminPage} isAuth={isAuth} exact/> */}
    </Router>
  );
}

export default App;
