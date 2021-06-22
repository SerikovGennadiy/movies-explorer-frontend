import './Register.css';
import Input from '../Input/Input';
import Logo from '../Logo/Logo';

import { useAccount } from '../../contexts/AccountContext';
import { Link, useHistory } from 'react-router-dom';
import { useModal } from '../../contexts/ModalContext';
import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';

import mainApi from '../../utils/MainApi';

const Register = () => {
  const [ valid, setValid ] = useState(false);
  const [ inputBlocked, setInputBlocked ] = useState(false);
  const { account, setAccount, loggedIn, setLoggedIn } = useAccount();
  const { setModal } = useModal();
  const history = useHistory();

  //const location = useLocation();
  //const { isEdit } = location.state;

  const greetings = loggedIn ? "Редактировать профиль" : "Добро пожаловать!";
  const submit = loggedIn ? "Сохранить" : "Зарегистрироваться";

  const {
    register,
    handleSubmit,
    setValue,
    formState
  } = useForm({
    mode: 'onChange'
  })

  const { errors } = formState;

  useEffect(()=> {
    console.log('USER', account);

    setValue('account_name', account.name)
    setValue('account_email', account.email)
    setValue('account_password', account.password)
  }, [account])

  useEffect(() => {
    setValid(Object.keys(errors).length === 0)
  }, [formState, errors])

  const submitHandler = (formData) => {
    console.log(formData);
    const { account_email: email, account_password: password, account_name: name } = formData;
    if(!loggedIn) {
      mainApi
        .signup(email, password, name)
        .then((data) => {
          if(data.message) {
            setModal({
              message: data.message,
              isBad: true,
            })
          }
          else if(data && data.data._id) {
            setModal({
              message: 'Аккаунт успешно создан'
            });
            setAccount(data);
            setLoggedIn(true);
            history.push('/signin')
          }
          else {
            throw new Error('Ошибка при регистрации')
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
    else {
      mainApi
        .updateProfile(name, email)
        .then((data) => {
          if(data.message) {
            setModal({
              message: data.message,
              isBad: true,
            })
          }
          else if(data && data.data._id) {
            setModal({
              message: 'Аккаунт обновлен'
            });
            setAccount(data);
            history.push('/signin')
          }
          else {
            throw new Error('Ошибка при обновлении профиля')
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
  }

  return (
    <form className="register" onSubmit={handleSubmit(submitHandler)}>
      <Logo/>
      <p className="register__greetings">{greetings}</p>
      <Input
        formProps={{ register, errors, setValue, blocked : inputBlocked }}
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
        formProps={{ register, errors, setValue, blocked : inputBlocked }}
        id={"email"}
        label={"E-mail"}
        placeholder={"Укажите email"}
        name={"account_email"}
        value={account.email}
        pattern={{
          required: true,
          pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      }} />
      { !loggedIn &&
          <Input
            formProps={{ register, errors, setValue, blocked : inputBlocked }}
            id={"password"}
            type={"password"}
            label={"Пароль"}
            placeholder={"Введите пароль"}
            name={"account_password"}
            value={account.password}
            pattern={{
              required: true
          }} />
      }
        <div className="register__buttons">
          <button className={`register__button ${valid ? '' : 'register__button_unactive'}`} type="submit">{submit}</button>
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