import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';



function OpTime({Optime}) {

    console.log(Optime);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div >
        
        <span><p >  
   <Button style={{color:'chocolate'}} className='w-100' variant="outline-light" onClick={handleShow}>
   Operating Time 
  </Button></p>
 </span>
  <Modal
    show={show}
    onHide={handleClose}
    backdrop="static"
    keyboard={false}
  >
    <Modal.Header  closeButton>
      <Modal.Title className='w-100 text-center'  style={{color:'chocolate '}} >Operating Time </Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <ListGroup>
      <ListGroup.Item></ListGroup.Item>
      <ListGroup.Item className='text-danger' >Sunday : {Optime?.Sunday} </ListGroup.Item>
      <ListGroup.Item>Monday : {Optime?.Monday}  </ListGroup.Item>
      <ListGroup.Item>Tuesday : {Optime?.Tuesday} </ListGroup.Item>
      <ListGroup.Item>Wednesday : {Optime?.Wednesday} </ListGroup.Item>
      <ListGroup.Item>Thursday : {Optime?.Thursday} </ListGroup.Item>
      <ListGroup.Item>Friday : {Optime?.Friday} </ListGroup.Item>
      <ListGroup.Item >Saturday : {Optime?.Saturday} </ListGroup.Item>
    </ListGroup>
    </Modal.Body>
    <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
         
        </Modal.Footer>
  </Modal>
  
  </div>
  )
}

export default OpTime