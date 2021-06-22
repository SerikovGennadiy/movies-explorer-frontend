import { Route, Redirect } from "react-router-dom";
import { useAccount } from '../../contexts/AccountContext';

const ProtectedRoute = ({ component: Component, ...props  }) => {
  const { loggedIn } = useAccount();

  return (
    <Route>
      { loggedIn === true ? <Component {...props} /> : <Redirect to="./signin" /> }
    </Route>
)}

export default ProtectedRoute;