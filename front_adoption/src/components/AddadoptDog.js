import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { addadoptDog } from '../redux/adoptDogSlice';
import { Link } from 'react-router-dom';
function AddadoptDog({dog}) {
    const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const isAuth = localStorage.getItem("token");
    const [adoptDog, setadoptDog] = useState({
    user_name :"" ,
    user_email: "",
    dog_adopted:dog?._id,
    date : "",
    user_information1:"",
    user_information2:"",
    user_information3:"",
  })
const dispatch= useDispatch();
  return (
    <div>
        <>
        {isAuth ? (
  <Button
    style={{ background: '#ff5bbd', border: 'none', cursor: 'pointer' }}
    className='btn_add'
    onClick={handleShow}>
    Adopt this dog
  </Button>
) : (
  <Link to='/login'>
    <Button
      style={{ background: '#ff5bbd', border: 'none', cursor: 'pointer' }}
      className='btn_add'>
      Adopt this dog
    </Button>
  </Link>
)}


    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title> Adoption Request </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{fontWeight:'bold'}}> Your name  </Form.Label>
        <Form.Control type="text" placeholder="Enter your name " onChange={(e)=>setadoptDog({...adoptDog, user_name:e.target.value})} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{fontWeight:'bold'}}> Your email  </Form.Label>
        <Form.Control type="text" placeholder="Enter your email"  onChange={(e)=>setadoptDog({...adoptDog, user_email:e.target.value})}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
       <Form.Label style={{fontWeight:'bold'}}> Do you currently have any other pets at home?  </Form.Label>
        <Form.Control type="text" placeholder="Your answer"  onChange={(e)=>setadoptDog({...adoptDog, user_information1:e.target.value})}/>
     </Form.Group>
     <Form.Group className="mb-3" controlId="formBasicEmail">
       <Form.Label style={{fontWeight:'bold'}}> Have you ever owned a dog before?   </Form.Label>
        <Form.Control type="text" placeholder="Your answer"  onChange={(e)=>setadoptDog({...adoptDog, user_information2:e.target.value})}/>
     </Form.Group>
     <Form.Group className="mb-3" controlId="formBasicEmail">
       <Form.Label style={{fontWeight:'bold'}}> Are you familiar with the responsibilities of dog ownership, including feeding, grooming, and veterinary care?   </Form.Label>
        <Form.Control type="text" placeholder="Your answer"  onChange={(e)=>setadoptDog({...adoptDog, user_information3:e.target.value})}/>
     </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
       <Form.Label style={{fontWeight:'bold'}}> Please enter the date you're prepared to welcome this dog into your home   </Form.Label>
        <Form.Control type="text" placeholder="Enter the date"  onChange={(e)=>setadoptDog({...adoptDog, date:e.target.value})}/>
     </Form.Group>
      
    </Form>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button style={{ background: '#ff5bbd', border: 'none', cursor: 'pointer' }} variant="primary" onClick={() => {dispatch(addadoptDog(adoptDog)); 
       
             handleClose();
             window.location.reload();}}
             >
          Submit your request
        </Button>
      </Modal.Footer>
    </Modal>
  </>
    </div>
  )
}

export default AddadoptDog