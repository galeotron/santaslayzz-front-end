import React from "react";
import { Route } from "react-router-dom";

const ProtectedRoute = ({ isAuth: isAuth, component: Component, ...rest }) => {

    console.log(isAuth)
  return <Route {...rest} render={(props)=> {
      if (isAuth) {
          return <Component />
      } else {
          return  (<p>ah ah ah</p>)
      }
  }} />;
};

export default ProtectedRoute;
