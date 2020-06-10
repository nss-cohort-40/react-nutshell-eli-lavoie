import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Home from './components/home/Home'
import Messages from './components/messages/MessageList'
import Articles from './components/news/ArticleList'
import Tasks from './components/tasks/TaskList'
import Profile from './components/profile/ProfileInfo'

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
      <Route
      exact path = "/articles"
      render={props => {
        if(isAuthenticated()){
          return <Articles {...props}/>
        } else {
          return <Redirect to="/login" />
        }
      }}/>
      <Route
      exact path = "/messages"
      render={props => {
        if(isAuthenticated()){
          return <Messages {...props}/>
        } else {
          return <Redirect to="/login" />
        }
      }}/>
      <Route
      exact path = "/tasks"
      render={props => {
        if(isAuthenticated()){
          return <Tasks {...props}/>
        } else {
          return <Redirect to="/login" />
        }
      }}/>
      <Route
      exact path = "/profile"
      render={props => {
        if(isAuthenticated()){
          return <Profile {...props}/>
        } else {
          return <Redirect to="/login" />
        }
      }}/>
    </>
  )
}

export default ApplicationView