import React, {useState} from 'react' 
import './Login.css'
import DataManager from '../../modules/DataManager.js'
import NavbarHeader from '../nav/Navbar'

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
            props.history.push("/")
            window.location.reload()
            // console.log(NavbarHeader.navHide)
            // NavbarHeader.toggleView(true)
            // console.log(NavbarHeader.navHide)
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
  const registerButton = () => {
    props.history.push("/register")
  }
  return (
    <div className="login-container">
      <section className="login-header">
        <h1 className="login-title">Welcome to Nutshell</h1>
        <h3 className="login-subtitle">Please Login</h3>
      </section>
      <section className="login-field">
        <input type="text" className="username-input" placeholder="username" onChange={event => setUsername(event.target.value)}/>
        <input type="password" className="password-input" placeholder="password" onChange={event => setPassword(event.target.value)}/>
      </section>
      <section className="submit">
        <button className="submit-button" value="Submit" onClick={ () => verifyLogin(username, password)}>Login
        </button>
        <button onClick={ () => registerButton()}>
          Register Here
        </button>
      </section>
    </div>
  )
}

export default Login