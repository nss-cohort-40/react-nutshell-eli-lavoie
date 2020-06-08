import React, {useState} from 'react' 
import { Route, withRouter } from 'react-router-dom'
import '../../modules/DataManager.js'
import './Login.css'
import DataManager from '../../modules/DataManager.js'

const Login = props => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const verifyLogin = (inputUsername, inputPassword) => {
    if(inputUsername === "" || inputPassword === ""){
      window.alert("Username and Password forms must both be filled in")
    }
    DataManager.getAll("users")
      .then(users => {
        const userLogin = users.find(user => user.username === inputUsername)
        if (userLogin) {
          if(userLogin.password === inputPassword){
            sessionStorage.setItem("userId", userLogin.id)
            sessionStorage.setItem("authenticated", true)
            props.history.push("/home")
          }
          else{
            window.alert("Incorrect Password.")
          }
        }
        else{
          window.alert("Incorrect username or user does not exist.")
        }
      })
  }

  return (
    <div className="login-container">
      <section className="login-header">
        <h1 className="login-title">Welcome to Nutshell</h1>
        <h3 className="login-subtitle">Please Login</h3>
      </section>
      <section className="login-field">
        <input type="text" className="username-input" placeholder="username" onChange={event => setUsername(event.target.value)}></input>
        <input type="password" className="password-input" placeholder="password" onChange={event => setPassword(event.target.value)}></input>
      </section>
      <section className="submit">
        <button className="submit-button" value="Submit" onClick={ () => verifyLogin(username, password)}>Submit</button>
      </section>
    </div>
  )
}

export default Login