import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { addcomment } from '../redux/commentSlice';
import { useParams } from 'react-router-dom'
function AddComment({question}) {
    const [show, setShow] = useState(false);
    const params=useParams();
    
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [comment, setcomment] = useState({
    user_name :"" ,
    email_name: "",
    contenu:"",
    question:question?.contenu,
    
  })
const dispatch= useDispatch();
console.log(question?.contenu)
  return (
    <div>
        <>
    <Button  style={{background: '#ff5bbd', border: 'none'}} className='btn_add'  onClick={handleShow}>
      Answer a question
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Answer a question </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> User name </Form.Label>
        <Form.Control type="text" placeholder="Enter the user's name" onChange={(e)=>setcomment({...comment, user_name:e.target.value})} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> User email </Form.Label>
        <Form.Control type="text" placeholder="Enter the user's email"  onChange={(e)=>setcomment({...comment, user_email:e.target.value})}/>
        </Form.Group>
     
     <Form.Group className="mb-3" controlId="formBasicEmail">
       <Form.Label> Your answer  </Form.Label>
        <Form.Control type="text" placeholder="Enter the question's answer"  onChange={(e)=>setcomment({...comment, contenu:e.target.value})}/>
     </Form.Group>
     {/* <Form.Group className="mb-3" controlId="formBasicEmail">
       <Form.Label> Your answer  </Form.Label>
        <Form.Control type="text" placeholder={question?.contenu}  onChange={(e)=>setcomment({...comment, question:e.target.value})} />
     </Form.Group> */}
      
    </Form>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button style={{background: '#ff5bbd', border: 'none'}} variant="primary" onClick={() => {dispatch(addcomment(comment)); 
       
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

export default AddComment