import './Profile.css';
import Header from '../Header/Header';
import { useAccount } from '../../contexts/AccountContext';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const Profile = () => {
  const history = useHistory();
  const { account, setLoggedIn } = useAccount();

  const logout = () => {
    setLoggedIn(false)
    history.push('./')
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
