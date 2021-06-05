import './App.css';
import Site from '../Site/Site';

import { AccountProvider } from '../../contexts/AccountContext';
import { MovieProvider } from '../../contexts/MovieContext';
import { ModalProvider } from '../../contexts/ModalContext';

function App() {
  return (
    <ModalProvider>
      <AccountProvider>
        <MovieProvider>
          <Site/>
        </MovieProvider>
      </AccountProvider>
    </ModalProvider>
  );
}

export default App;
