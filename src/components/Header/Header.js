import './Header.css';

import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

const Header = (props) => {
    const { mix = '' } = props;
    return (
      <header className={`header ${mix}`}>
        <Logo/>
        <Navigation />
      </header>
    )
}

export default Header;
