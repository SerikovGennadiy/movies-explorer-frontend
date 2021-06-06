import "./Logo.css";
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

const Logo = () => {
    return (
      <Link className="logo" to="/">
        <img className="logo__image" src={logo} alt="Логитип проекта"/>
      </Link>
    )
}

export default Logo;