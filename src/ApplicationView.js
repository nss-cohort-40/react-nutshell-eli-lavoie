import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Home from './components/home/Home'

const ApplicationView = () => {
  const isAuthenticated = () => sessionStorage.getItem("authenticated") !== null;
  
  return(
    <>
      <Route 
      exact path = "/login"
      component={Login}
      />
      <Route
      exact path ="/register"
      component={Register}
      />
      <Route
      exact path = "/"
      render={props => {
        if(isAuthenticated()){
          return <Home {...props}/>
        } else {
          return <Redirect to="/login" />
        }
      }}/>
    </>
  )
}

export default ApplicationView