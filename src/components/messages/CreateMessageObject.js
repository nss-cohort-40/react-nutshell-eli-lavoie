import React from 'react'
import {Badge, ListGroupItem} from 'reactstrap'
import SingleMessage from './SingleMessage'
import DataManager from '../../modules/DataManager'

const CreateMessageObject = props => {
  return (
    <>
      <ListGroupItem>
        <Badge color={props.badgeColor}>{props.fromUsername}</Badge>
        - {props.messageData.message}
      </ListGroupItem>
    </>
  )
  

}

export default CreateMessageObject