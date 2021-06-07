import './Promo.css';
import web_earth from '../../images/web-earth.png';

const Promo = (props) => {
  const { mix='' } = props;
  return (
      <section className={`promo ${mix}`}>
        <h1 className="promo__title">Учебный проект студента факультета Веб&#8209;разработки.</h1>
        <img className="promo__image" src={web_earth} alt="Изображение Земли с использованием слова Web"/>
        <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
      </section>
  )
}

export default Promo;
