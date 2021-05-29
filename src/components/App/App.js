import './App.css';
import Site from '../Site/Site';
import { LoginProvider } from '../../contexts/LoginContext';

function App() {
  return (
    <LoginProvider>
      <Site/>
    </LoginProvider>
  );
}

export default App;
