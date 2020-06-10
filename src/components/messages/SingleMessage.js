import React, {useEffect, useState} from 'react'
import {Badge, ListGroupItem} from 'reactstrap'
import DataManager from '../../modules/DataManager'
import CreateMessageObject from "./CreateMessageObject"

const SingleMessage = props => {
  const fromUserId = props.messageData.userId
  const currentUserId = sessionStorage.getItem("userId")
  const messageData = props.messageData
  const messageId = props.messageId
  const [fromUsername, setFromUsername] = useState("")
  const [badgeColor, setBadgeColor] = useState("")

  const checkFromUser = () => {
    if(fromUserId == currentUserId){
      setBadgeColor("primary")
    }
    else {
      setBadgeColor("success")
    }
  }
  

  const findUsername = () => {
    DataManager.get("users",  fromUserId)
      .then(user => {
        const fromUser = user["username"]
        setFromUsername(fromUser)
        
      })   
  }
  
  useEffect(() => {
    checkFromUser();
    findUsername()
  }, [])

  return (
    <CreateMessageObject messageData={messageData} fromUsername={fromUsername} badgeColor={badgeColor} messageId={messageId} {...props}/>
  )
}

export default SingleMessage