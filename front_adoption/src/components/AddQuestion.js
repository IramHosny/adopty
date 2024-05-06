import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { addquestion } from '../redux/questionSlice';
function AddQuestion() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [question, setquestion] = useState({
    user_name :"" ,
    email_name: "",
    contenu:"",
    
  })
const dispatch= useDispatch();
  return (
    <div>
        <>
    <Button style={{background: '#ff5bbd', border: 'none'}} className='btn_add'  onClick={handleShow}>
      Ask a Question
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Ask a question </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> User name </Form.Label>
        <Form.Control type="text" placeholder="Enter the user's name" onChange={(e)=>setquestion({...question, user_name:e.target.value})} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> User email </Form.Label>
        <Form.Control type="text" placeholder="Enter the user's email"  onChange={(e)=>setquestion({...question, user_email:e.target.value})}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
       <Form.Label> Question content  </Form.Label>
        <Form.Control type="text" placeholder="Enter the question's content"  onChange={(e)=>setquestion({...question, contenu:e.target.value})}/>
     </Form.Group>
    
      
    </Form>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button style={{background: '#ff5bbd', border: 'none'}} variant="primary" onClick={() => {dispatch(addquestion(question)); 
       
             handleClose();
             window.location.reload();}}
             >
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  </>
    </div>
  )
}

export default AddQuestion