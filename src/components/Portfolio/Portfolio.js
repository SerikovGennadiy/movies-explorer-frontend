import './Portfolio.css';
import arrow from '../../images/arrow.svg';

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__links">
        <li className="portfolio__link-block">
          <p className="portfolio__work-title">Статичный сайт</p>
          <a className="portfolio__link" href="https://github.com/SerikovGennadiy/how-to-learn" target="_blank" rel="noreferrer">
            <img src={arrow} alt="Изображение косой стрелки"/>
          </a>
        </li>
        <li className="portfolio__link-block">
          <p className="portfolio__work-title">Адаптивный сайт</p>
          <a className="portfolio__link" href="https://serikovgennadiy.github.io/russian-travel/index.html" target="_blank" rel="noreferrer">
            <img src={arrow} alt="Изображение косой стрелки"/>
          </a>
        </li>
        <li className="portfolio__link-block">
          <p className="portfolio__work-title">Одностраничное приложение</p>
          <a className="portfolio__link" href="https://mestory.students.nomoredomains.icu/signin" target="_blank" rel="noreferrer">
            <img src={arrow} alt="Изображение косой стрелки"/>
          </a>
        </li>
      </ul>
    </section>
  )
}

export default Portfolio;