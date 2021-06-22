import './Navigation.css';
import { Link, NavLink } from 'react-router-dom';
import { useAccount } from '../../contexts/AccountContext';

const Navigation = () => {
    const { loggedIn } = useAccount();

    return (
       <nav className="nav">
         <div className="nav__logo-side">
          { loggedIn &&
            <>
              <NavLink to="./movies" activeClassName="nav__link_weight_bold" className="nav__link nav__link_blacked nav__link_to_movies">Фильмы</NavLink>
              <NavLink to="./saved-movies" activeClassName="nav__link_weight_bold" className="nav__link nav__link_blacked nav__link_to_saved-movies">Сохраненные фильмы</NavLink>
            </>
           }
         </div>
         <div className="nav__burger-side">
           { loggedIn &&
             <>
               <Link to="./profile" className="nav__button nav__button_to_account nav__link_weight_bold">Аккаунт</Link>
               <label className="nav__burger-opener" htmlFor="nav__burger-switch"></label>
             </>
           }
           { !loggedIn &&
            <>
              <Link to="./signup" className="nav__link nav__link_to_signup">Регистрация</Link>
              <Link to="./signin" className="nav__button nav__link_to_signin">Войти</Link>
            </>
           }
            <>
              <input className="nav__burger-switch" id="nav__burger-switch" type="checkbox"></input>
              <div className="nav__burger">
                <nav className="nav__burger-menu">
                  <label className="nav__burger-closer" htmlFor="nav__burger-switch"></label>
                  <div className="nav__burger-links">
                    <NavLink className="nav__burger-link" exact to="./" activeClassName="nav__burger-link_active">Главная</NavLink>
                    <NavLink className="nav__burger-link" to="./movies" activeClassName="nav__burger-link_active">Фильмы</NavLink>
                    <NavLink className="nav__burger-link" to="./saved-movies" activeClassName="nav__burger-link_active">Сохраненные фильмы</NavLink>
                  </div>
                  <NavLink className="nav__burger-link nav__burger-link_to_profile" to="./profile" activeClassName="nav__burger-link_active">Аккаунт</NavLink>
                </nav>
              </div>
            </>
         </div>
       </nav>
    )
}

export default Navigation;