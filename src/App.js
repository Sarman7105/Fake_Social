import { Route,Switch, useHistory } from 'react-router';
import ForgotPassword from './Components/ForgotPassword/ForgotPassword';
import LandingPage from './Components/LandingPage/LandingPage'
import VerifyUser from './Components/VerifyUser/VerifyUser';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute'
import Home from './Components/Home/Home';
import ResetPassword from './Components/ResetPassword/ResetPassword.jsx';
import Profile from './Components/Profile/Profile';
import AuthContext from './Store/AuthContext';
import { useContext } from 'react';
function App() {
  const authContext=useContext(AuthContext);
  const isAuth=authContext.isLoggedIn;
  const history=useHistory();
  return (
    <>

      <Switch>

        <ProtectedRoute exact path="/">
          <Home/>
        </ProtectedRoute>

        {/* <ProtectedRoute path="/profile/:id">
          <Profile/>
        </ProtectedRoute> */}
        <Route path="/profile/:id">
          {isAuth? <Profile/>: history.replace('/login')}
         
        </Route>
        <Route exact path='/login'>
          <LandingPage/>
        </Route>

        <Route path='/forgot'>
          <ForgotPassword/>
        </Route>

        <Route path='/passwordReset/:token/:email'>
          <ResetPassword/>
        </Route>

        <Route path='/verify'>
          <VerifyUser/>
        </Route>

        <Route path='*'>
          <Home/>
        </Route>


      </Switch>
     
    </>
  );
}

export default App;
