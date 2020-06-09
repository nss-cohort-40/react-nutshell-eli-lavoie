import React, { useState } from 'react'
import DataManager from '../../modules/DataManager.js'

const Register = props => {
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');
  const [newEmail, setNewEmail] = useState('');
  


  const registerNewUser = (username, password, password2, email) => {
    if(username === "" || password === "" || password2 === "" || email === ""){
      window.alert("All forms must be filled")
    }
    if(password2 !== password){
      window.alert("The passwords do not match")
    }
    const createdUser = {"username": username, "password": password, "email": email}
    console.log(createdUser)

    DataManager.getAll("users")
      .then(existingUsers => {
        let usernameExists = existingUsers.find(user => user.username === username)
        let userEmailExists = existingUsers.find(user => user.email === email)
        if(usernameExists){
          window.alert("That username is already in use.")
          return
        }
        if(userEmailExists){
          window.alert("That email is already in use.")
          return
        }
        DataManager.post("users", createdUser)
        window.alert("Account Created. Please log in!")
        props.history.push("/login")
      })
      
  }

  return (
    <>
    <h3>Register Here</h3>
    <input type="text" placeholder="username" onChange={event => setNewUsername(event.target.value)}/>
    <input type="password" placeholder="password" onChange={event =>setNewPassword(event.target.value)}/>
    <input type="password" placeholder="verify password" onChange={event => setVerifyPassword(event.target.value)}/>
    <input type="text" placeholder="email" onChange={event => setNewEmail(event.target.value)}/>
    <button onClick={() => registerNewUser(newUsername, newPassword, verifyPassword, newEmail)}>
      Submit
    </button>
    </>
  )
}

export default Register