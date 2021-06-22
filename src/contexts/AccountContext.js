import mainApi from '../utils/MainApi';

import { createContext, useState, useContext, useEffect } from 'react';
//import { useHistory } from 'react-router-dom';

const CurrentUserContext = createContext();

export const CurrentUserProvider = ({children}) => {
  //const history = useHistory();
  const [loggedIn, setLoggedIn] = useState(true);
  const [account, setAccount] = useState({});

  useEffect(() => {
   const result = mainApi.checkToken();
         result.then(({ data }) => {
            console.log(data);
            if(data && data._id) {
              setAccount(data);
            }
            else {
              setLoggedIn(false);
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