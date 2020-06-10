import React from "react"
import "./Nutshell.css"
import ApplicationView from '../ApplicationView'
import NavbarHeader from './nav/Navbar'
import Login from './auth/Login'

const Nutshell = () =>{
  const isAuthenticated = () => sessionStorage.getItem("authenticated") !== null;
  if (isAuthenticated())
    return (
      <>
        <NavbarHeader />
        <ApplicationView />
      </>
      )
  else{
    return (
      <>
        <ApplicationView />
      </>
    )
  }
}

export default Nutshell