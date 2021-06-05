import { Account } from '../data/data';
import { createContext, useState, useContext } from 'react';

const AccountContext = createContext();

export const AccountProvider = ({children}) => {
  const [loggedIn, setLoggedIn] = useState(true);
  const [account, setAccount] = useState(Account);

  return (
    <AccountContext.Provider value={{loggedIn, setLoggedIn, account, setAccount}}>
      {children}
    </AccountContext.Provider>
  )
}

export const useAccount = () => useContext(AccountContext);