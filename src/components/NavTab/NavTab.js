import './NavTab.css';

const NavTab = (props) => {
  const { mix='' } = props;

  return (
   <section className={`nav-tab ${mix}`}>
    <a className="nav-tab__link" href="#about-project">Узнать больше</a>
   </section>
  )
}

export default NavTab;