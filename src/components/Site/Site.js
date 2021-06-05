import { Switch, Route} from "react-router-dom";

import Lead from '../Lead/Lead';
import Main from '../Main/Main';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Footer from '../Footer/Footer';
import Modal from '../Modal/Modal';

import ErrorPage from '../ErrorPage/ErrorPage';

const Site = () => {
    return (
      <div className="page">
        <Switch>
            <Route exact path="/">
              <Lead/>
              <Main/>
              <Footer/>
            </Route>
            <Route path="/signin">
              <Login/>
            </Route>
            <Route path="/signup">
              <Register/>
            </Route>
            <Route path="/profile">
              <Profile/>
            </Route>
            <Route path="/movies">
              <Movies/>
            </Route>
            <Route path="/saved-movies">
              <SavedMovies/>
            </Route>
            <Route path="*">
              <ErrorPage/>
            </Route>
        </Switch>
        <Modal/>
      </div>
    )
}

export default Site;
