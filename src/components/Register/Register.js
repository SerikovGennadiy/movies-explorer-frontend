import './Register.css';
import { useAccount } from '../../contexts/AccountContext';
import { Link } from 'react-router-dom';
import Input from '../Input/Input';
import Logo from '../Logo/Logo';
import { useModal } from '../../contexts/ModalContext';

const Register = () => {
  const { account, loggedIn } = useAccount();
  const { setModal } = useModal();
  //const location = useLocation();
  //const { isEdit } = location.state;

  const greetings = loggedIn ? "Редактировать профиль" : "Добро пожаловать!";
  const submit = loggedIn ? "Сохранить" : "Зарегистрироваться";

  const onSubmit = (e) => {
    e.preventDefault();
    setModal({
      isOpen: true,
      message: 'Успешно сохранено'
    })
  }

  return (
    <form className="register" onSubmit={onSubmit}>
      <Logo/>
      <p className="register__greetings">{greetings}</p>
      <Input
        id={"name"}
        label={"Имя"}
        placeholder={"Введите имя пользователя"}
        name={"account_name"}
        value={account.name}
        pattern={{
          required: true,
          minLength: 2,
          maxLength: 30
      }} />
      <Input
        id={"email"}
        label={"E-mail"}
        placeholder={"Укажите email"}
        name={"account_email"}
        value={account.email}
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
        value={account.password}
        pattern={{
          required: true
      }} />
        <div className="register__buttons">
          <button className="register__button" type="submit">{submit}</button>
          <div className="register__landing">
            {true &&
            ( <>
                <p className="register__landing-title">Уже зарегистрированы?</p>
                <Link className="register__link" to="/signin">Войти</Link>
              </> )}
          </div>
      </div>
    </form>
  )
}

export default Register;