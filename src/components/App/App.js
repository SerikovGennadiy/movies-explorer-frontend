import './App.css';
import Site from '../Site/Site';
import { CurrentUserProvider } from '../../contexts/AccountContext';
import { MovieProvider } from '../../contexts/MovieContext';
import { ModalProvider } from '../../contexts/ModalContext';

function App() {
  return (
    <ModalProvider>
      <CurrentUserProvider>
        <MovieProvider>
          <Site/>
        </MovieProvider>
      </CurrentUserProvider>
    </ModalProvider>
  );
}

export default App;
