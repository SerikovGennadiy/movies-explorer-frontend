import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
          <div className="footer__content">
              <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
              <div className="footer__bottom">
                <p className="footer__copyright">© 2020</p>
                <ul className="footer__links">
                  <li className="footer__link-block">
                    <a className="footer__link" href="https://praktikum.yandex.ru/profile/web/" rel="noreferrer" target="_blank">Яндекс.Практикум</a>
                  </li>
                  <li className="footer__link-block">
                    <a className="footer__link" href="https://github.com/" rel="noreferrer" target="_blank">GitHub</a>
                  </li>
                  <li className="footer__link-block">
                    <a className="footer__link" href="https://ru-ru.facebook.com/" rel="noreferrer" target="_blank">Facebook</a>
                  </li>
                </ul>
            </div>
          </div>
        </footer>
    )
}

export default Footer;
