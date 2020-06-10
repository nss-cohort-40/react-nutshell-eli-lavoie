import React, {useState, useEffect} from 'react'
import SingleMessage from './SingleMessage'
import {ListGroup, Container} from 'reactstrap'
import DataManager from '../../modules/DataManager'

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
          <ListGroup>
            {messages.map(messages => <SingleMessage key={messages.id} messageData={messages} {...props}/>)}
          </ListGroup>
      </Container>
      </div>
    </>
  )
}

export default RenderMessages