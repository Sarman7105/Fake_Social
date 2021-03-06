import React, { useContext, useState } from 'react';
import { Route,Redirect } from 'react-router';
import AuthContext from '../../Store/AuthContext';

const ProtectedRoute = ({children,rest}) => {
    const authContext=useContext(AuthContext)
    let isLoggedIn=localStorage.getItem('isLoggedIn');
    const isAuth=authContext.isLoggedIn;
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