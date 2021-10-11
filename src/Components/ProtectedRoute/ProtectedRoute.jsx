import React, { useContext, useState } from 'react';
import { Route,Redirect } from 'react-router';
import AuthContext from '../../store/auth';

const ProtectedRoute = ({children,rest}) => {
    const authContext=useContext(AuthContext)
    let isLoggedIn=localStorage.getItem('isLoggedIn');
    const isAuth=isLoggedIn||authContext.isAuth;
    return (
        <Route
      {...rest}
      render={({ location }) =>
      isAuth? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default ProtectedRoute;