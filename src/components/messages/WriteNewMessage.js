import React, {useState} from 'react'
import {ListGroupItem, InputGroup, Input, InputGroupAddon, Button} from 'reactstrap'
import { Route, Redirect } from 'react-router-dom'
import DataManager from '../../modules/DataManager.js'

const NewMessage = props => {
  const [newMessageText, setNewMessageText] = useState("")
  const [defaultInput, resetInput] = useState("Enter Message")

  const setUserId = () => {
    let id = parseInt(sessionStorage.getItem("userId"))
    return id
  }

  const msgFieldChange = evt => {
    let stateToChange = newMessageText
    stateToChange = evt.target.value
    setNewMessageText(stateToChange)
  }

  const createMessageObject = () => {
    const newMessage = {
      "userId": setUserId(),
      "message": newMessageText,
      "isEdited": false
    }
    return newMessage  
}


  const onClickPost = () => {
    const messageToPost = createMessageObject()
    DataManager.post("messages", messageToPost)
    window.location.reload()
  }
  return (
    <>
      <ListGroupItem active className="msg-input">
        <InputGroup>
          <Input  placeholder="Enter Message" id="message" onChange={msgFieldChange} />
          <InputGroupAddon addonType="append"><Button onClick={onClickPost}>Send</Button></InputGroupAddon>
        </InputGroup>
      </ListGroupItem>
    </>
  )
}

export default NewMessage