import { Route,Switch } from 'react-router';
import ForgotPassword from './Components/ForgotPassword/ForgotPassword';
import LandingPage from './Components/LandingPage/LandingPage'
import VerifyUser from './Components/VerifyUser/VerifyUser';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute'
import Home from './Components/Home/Home';
function App() {
  return (
    <>

      <Switch>

        <ProtectedRoute exact path="/">
          <Home/>
        </ProtectedRoute>
        <Route exact path='/login'>
          <LandingPage/>
        </Route>

        <Route path='/forgot'>
          <ForgotPassword/>
        </Route>

        <Route path='/verify'>
          <VerifyUser/>
        </Route>

      </Switch>
     
    </>
  );
}

export default App;
