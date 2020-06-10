import React, {useState, useEffect} from 'react'
import SingleMessage from './SingleMessage'
import {ListGroup, Container, ListGroupItem, InputGroup, InputGroupAddon, Button, Input} from 'reactstrap'
import DataManager from '../../modules/DataManager'
import NewMessage from './WriteNewMessage'
import './RenderMessages.css'

const RenderMessages = props => {
  const [messages, setMessages] = useState([])

  const getMessages = (section) => {
    return DataManager.getAll(section).then(messagesFromAPI => setMessages(messagesFromAPI))
  }

  
  useEffect(() => {
    getMessages("messages")
    
  }, [])


  return (
    <>
      <div className="message-list">
      <Container>
          <ListGroup className="messages">
            {messages.map
            (messages => <SingleMessage key={messages.id} messageData={messages} messageId={messages.id} {...props}/>)}
          </ListGroup>
            <NewMessage {...props} />
      </Container>
      </div>
    </>
  )
}

export default RenderMessages