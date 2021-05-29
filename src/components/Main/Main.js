import './Main.css';

import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';

const Main = () => {
    return (
      <main className="main">
          <AboutProject/>
          <Techs/>
          <AboutMe/>
          <Portfolio/>
      </main>
    )
}

export default Main;
