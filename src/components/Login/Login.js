import './Login.css';
import Input from '../Input/Input';
import Logo from '../Logo/Logo';

import { useAccount } from '../../contexts/AccountContext';
import { Link, useHistory } from 'react-router-dom';
import { useModal } from '../../contexts/ModalContext';
import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';

import mainApi from '../../utils/MainApi';

const Login = () => {
  const [ valid, setValid ] = useState(false);
  const { setAccount, setLoggedIn } = useAccount();
  const { setModal } = useModal();
  const history = useHistory();

  const {
    register,
    handleSubmit,
    setValue,
    formState,
  } = useForm({
    mode: 'onChange'
  })

  const { errors } = formState;

  useEffect(() => {
    setValid(Object.keys(errors).length === 0);
  }, [formState, errors])

  const submitHandler = (formData) => {
    const { account_email:mail, account_password:password } = formData;
    mainApi
      .signin(mail, password)
      .then(data => {
        if(data.message) {
          setModal({
            message: data.message,
            isBad: true,
          })
        }
        else if(data.user._id) {
          setAccount(data.user);
          setLoggedIn(true);
          history.push('/movies')
        }
        else {
          throw new Error('Ошибка при авторизации')
        }
      })
      .catch(err => {
        console.error(err);
        setModal({
          message: `Во время запроса произошла ошибка.
                    Возможно, проблема с соединением или сервер недоступен.
                    Подождите немного и попробуйте ещё раз`,
          isBad: true,
        })
      })
  }

  return (
    <form className="login" onSubmit={handleSubmit(submitHandler)}>
      <Logo/>
      <p className="login__greetings">Рады видеть!</p>
      <Input
        formProps={{ register, errors, setValue }}
        id={"email"}
        label={"E-mail"}
        placeholder={"Укажите email"}
        name={"account_email"}
        pattern={{
          required: true,
          pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      }} />
      <Input
        formProps={{ register, errors, setValue }}
        id={"password"}
        type={"password"}
        label={"Пароль"}
        placeholder={"Введите пароль"}
        name={"account_password"}
        pattern={{
          required: true
      }} />
        <div className="login__buttons">
          <button className={`login__button ${valid ? '' : 'login__button_unactive'}`} type="submit">Войти</button>
          <div className="login__landing">
          <p className="login__landing-title">Ещё не зарегистрированы?</p>
          <Link className="login__link" to="/signup">Регистрация</Link>
        </div>
      </div>
    </form>
  )
}

export default Login;
