import React, {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import './CreateMessageObj.css'
import DataManager from '../../modules/DataManager'
import {Badge, ListGroupItem, Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Popover, PopoverBody} from 'reactstrap'

const CreateMessageObject = props => {
  const fromUser = props.fromUsername
  const currentUser = sessionStorage.getItem("currentUser")
  const [modal, setModal] = useState(false)
  const [editMsgTxt, setEditMsgTxt] = useState(props.messageData.message)
  const [edited, setIsEdited] = useState(false)
  const [deleteModal, setDeleteModal] = useState(false)
  const [msgId, setMsgId] = useState(props.messageId)

  const checkEdit = () => {
    const msgIsEdited = props.messageData.isEdited
    if(msgIsEdited){
      setIsEdited(!edited)
    }
  }

  const msgFieldChange = evt => {
    let stateToChange = editMsgTxt
    stateToChange = evt.target.value
    setEditMsgTxt(stateToChange)
  }

  const toggleModal = () => { 
    setModal(!modal)
  }

  const toggleDeleteModal = () => {
    setDeleteModal(!deleteModal)
  }

  const updateMessageContent = () => {
    const newMsgObject = {
      "userId": props.messageData.userId,
      "message": editMsgTxt,
      "isEdited": true,
      "id": props.messageData.id
    }
    DataManager.update("messages", newMsgObject, props.messageData.id)
    window.location.reload()
  }

  useEffect(() => {
    checkEdit()
  }, [])

  const deleteMessage = () => {
    const id = props.messageData.id
    DataManager.delete("messages", id)
    window.location.reload()
  }
  if(edited === true){
    if(fromUser == currentUser) 
    return (
      <>
        <Modal isOpen={modal} className="edit-modal">
          <ModalHeader>Edit your Message</ModalHeader>
          <ModalBody>
            {editMsgTxt}
            <Input placeholder="Write your edit here!" onChange={msgFieldChange}/>
          </ModalBody>
          <ModalFooter><Button onClick={updateMessageContent}>Submit</Button></ModalFooter>
        </Modal>

        <Modal isOpen={deleteModal} className="delete-modal">
          <ModalHeader>Delete Your Message</ModalHeader>
          <ModalBody>
            <p className="text-warning text-center font-italic">Are you sure you want to delete this message?</p>
            <p className="delete-text text-center font-weight-bold">{props.messageData.message}</p>
          </ModalBody>
          <ModalFooter>
            <Button outline color="success" onClick={deleteMessage}>Yes</Button>
            <Button outline color="danger" onClick={toggleDeleteModal}>No</Button>
          </ModalFooter>
        </Modal>

      <ListGroupItem className="h-10" id="message-object">
        <Badge color={props.badgeColor}>{props.fromUsername}</Badge>
        - {props.messageData.message} <p id="edited" className="text-muted">(edited) | </p>
        <div className="edit-delete">
          <FontAwesomeIcon id="edit" icon={faEdit} color="#ffc107" size="sm" onClick={() => toggleModal()}/>
          <FontAwesomeIcon id="delete" icon={faTrashAlt} color="#dc3545" size="sm" onClick={() => toggleDeleteModal()}/>
        </div>
      </ListGroupItem>
    </>
  )
    else{
      return(
        <>
        <ListGroupItem className="h-25" id="message-object">
          <Badge color={props.badgeColor}>{props.fromUsername}</Badge>
          - {props.messageData.message} <p id="edited" className="text-muted">(edited)</p>
        </ListGroupItem>
      </>
      )
    }
  } 
  else {
    if(fromUser == currentUser) 
      return (
        <>
          <Modal isOpen={modal}>
            <ModalHeader>Edit your Message</ModalHeader>
            <ModalBody>
              {editMsgTxt}
              <Input placeholder="Write your edit here!" onChange={msgFieldChange}/>
            </ModalBody>
            <ModalFooter><Button onClick={updateMessageContent}>Submit</Button></ModalFooter>
          </Modal>

          <Modal isOpen={deleteModal} className="delete-modal">
          <ModalHeader>Delete Your Message</ModalHeader>
          <ModalBody>
            <p className="text-warning text-center font-italic">Are you sure you want to delete this message?</p>
            <p className="delete-text text-center font-weight-bold">{props.messageData.message}</p>
          </ModalBody>
          <ModalFooter>
            <Button outline color="success" onClick={deleteMessage}>Yes</Button>
            <Button outline color="danger" onClick={toggleDeleteModal}>No</Button>
          </ModalFooter>
        </Modal>

          <ListGroupItem className="h-25" id="message-object">
            <Badge color={props.badgeColor}>{props.fromUsername}</Badge>
            - {props.messageData.message}  | 
            <div className="edit-delete">
              <FontAwesomeIcon id="edit" icon={faEdit} color="#ffc107" size="sm" onClick={() => toggleModal()}/>
              <FontAwesomeIcon id="delete" icon={faTrashAlt} color="#dc3545" size="sm" onClick={() => toggleDeleteModal()}/>
            </div>
          </ListGroupItem>
      </>
    )
    else{
      return(
        <>
        <ListGroupItem className="h-25" id="message-object">
          <Badge color={props.badgeColor}>{props.fromUsername}</Badge>
          - {props.messageData.message} 
        </ListGroupItem>
      </>
      )
    }
  }

}

export default CreateMessageObject