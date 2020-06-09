import React from 'react'

const Home = props => {
  const logout = () => {
    sessionStorage.removeItem("authenticated")
    props.history.push("/login")
  }
  
  return(
    <>
      <h1> Future home of React Nutshell Home Page</h1>
      <button onClick={() => logout()} value="Logout">Logout</button>
    </>
  )
}

export default Home