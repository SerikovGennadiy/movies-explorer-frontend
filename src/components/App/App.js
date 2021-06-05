import './App.css';
import Site from '../Site/Site';

import { AccountProvider } from '../../contexts/AccountContext';
import { MovieProvider } from '../../contexts/MovieContext';

function App() {
  return (
      <AccountProvider>
        <MovieProvider>
          <Site/>
        </MovieProvider>
      </AccountProvider>
  );
}

export default App;
