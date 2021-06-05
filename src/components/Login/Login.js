import './Login.css';
//import { useAccount } from '../../contexts/AccountContext';
import { Link } from 'react-router-dom';
import Input from '../Input/Input';
import Logo from '../Logo/Logo';

const Login = () => {
  //const { account, loggedIn, setLoggedIn } = useAccount();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  }

  return (
    <form onSubmit={onSubmit} className="login">
      <Logo/>
      <p className="login__greetings">Рады видеть!</p>
      <Input
        id={"email"}
        label={"E-mail"}
        placeholder={"Укажите email"}
        name={"account_email"}
        pattern={{
          required: true,
          pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      }} />
      <Input
        id={"password"}
        type={"password"}
        label={"Пароль"}
        placeholder={"Введите пароль"}
        name={"account_password"}
        pattern={{
          required: true
      }} />
        <div className="login__buttons">
          <button className="login__button" type="submit">Войти</button>
          <div className="login__landing">
          <p className="login__landing-title">Ещё не зарегистрированы?</p>
          <Link className="login__link" to="/signup">Регистрация</Link>
        </div>
      </div>
    </form>
  )
}

export default Login;
