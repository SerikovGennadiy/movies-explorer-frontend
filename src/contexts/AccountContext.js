import mainApi from '../utils/MainApi';

import { createContext, useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const CurrentUserContext = createContext();

export const CurrentUserProvider = ({children}) => {
  const history = useHistory();
  const [loggedIn, setLoggedIn] = useState(false);
  const [account, setAccount] = useState({});

  useEffect(() => {
    mainApi
    .checkToken()
    .then(({ data }) => {
      console.log(data);
      if(data && data._id) {
        setAccount(data);
        setLoggedIn(true);
        history.push('/movies')
      }
      else {
        history.push('/signin')
      }
    })
    .catch(err => console.error)
  }, [])

  return (
    <CurrentUserContext.Provider value={{loggedIn, setLoggedIn, account, setAccount}}>
      {children}
    </CurrentUserContext.Provider>
  )
}

export const useAccount = () => useContext(CurrentUserContext);