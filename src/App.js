import { Route,Switch } from 'react-router';
import ForgotPassword from './Components/ForgotPassword/ForgotPassword';
import LandingPage from './Components/LandingPage/LandingPage'
import VerifyUser from './Components/VerifyUser/VerifyUser';
function App() {
  return (
    <>

      <Switch>

        <Route exact path='/'>
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
