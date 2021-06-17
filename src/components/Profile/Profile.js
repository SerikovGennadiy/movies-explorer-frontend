import './Profile.css';
import Header from '../Header/Header';

import { useAccount } from '../../contexts/AccountContext';
import { useModal } from '../../contexts/ModalContext';

import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import mainApi from '../../utils/MainApi';

const Profile = () => {
  const history = useHistory();
  const { account, setLoggedIn } = useAccount();
  const { setModal } = useModal();

  const logout = () => {
    mainApi.signout()
      .then(({ isLogOut, message }) => {
        if(isLogOut) {
          setLoggedIn(false);
          history.push('/signin')
        }
        else {
         throw new Error('Ошибка при выходе')
        }
      })
      .catch(err => {
        console.error(err);
        setModal({
          message: 'Ошибка при выходе',
          isBad: true,
        })
      })
  }

    return (
      <>
        <Header/>
        <section className="profile">
          <p className="profile__greetings">{`Привет, ${account.name}!`}</p>
          <div className="profile__credentials">
            <div className="profile__credential">
              <p className="profile__credential-title">Имя</p>
              <p className="profile__credential-value">{account.name}</p>
            </div>
            <div className="profile__credential">
              <p className="profile__credential-title">Почта</p>
              <p className="profile__credential-value">{account.email}</p>
            </div>
          </div>
          <div className="profile__buttons">
            <Link className="profile__button" to={{
              pathname: "/signup",
              state: { isEdit: true }
            }}>Редактировать</Link>
            <button className="profile__button profile__button_to_logout" type="button" onClick={logout}>Выйти из аккаунта</button>
          </div>
        </section>
      </>
    )
}

export default Profile;
