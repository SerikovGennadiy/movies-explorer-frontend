import './ErrorPage.css';
import { useHistory } from 'react-router-dom';

const ErrorPage = () => {
  const history = useHistory();

  return (
    <section className="error-page">
      <p className="error-page__code">404</p>
      <p className="error-page__description">Страница не найдена</p>
      <button type="button" className="error-page__link" onClick={() => { history.goBack() }}>Назад</button>
    </section>
  )
}

export default ErrorPage;