import './Navigation.css';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
       <nav className="nav">
         <div className="nav__logo-side"></div>
         <div className="nav__burger-side">
           <Link to="./signup" className="nav__link">Регистрация</Link>
           <Link to="./signin" className="nav__button">Войти</Link>
         </div>
       </nav>
    )
}

export default Navigation;