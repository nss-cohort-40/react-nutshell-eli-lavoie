import React, {useState} from 'react'
import DataManager from '../../modules/DataManager'
import {Modal, Button, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'

const EditMessage = props => {
  const [modal, setModal] = useState(true)

  const toggle = () => { setModal(!modal)}


  return (
    <>
      <Modal isOpen={modal}>
      <ModalHeader>Test</ModalHeader>
      <ModalBody>
      Fix your message here
        <Button onClick={() => toggle()}>Submit Changes </Button>
      </ModalBody>
      </Modal>
    </>
  )

}

export default EditMessage