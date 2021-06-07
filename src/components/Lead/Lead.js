import './Lead.css';

import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import NavTab from '../NavTab/NavTab';

const Lead = () => {
  return (
    <section className="lead">
      <Header mix={"lead__header"}/>
      <Promo mix={"lead__promo"}/>
      <NavTab mix={"lead__nav-tab"}/>
    </section>
  )
}

export default Lead;