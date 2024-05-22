import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { addadoptCat } from '../redux/adoptCatSlice';
import { Link } from 'react-router-dom';
function AddadoptCat({cat}) {
    const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const isAuth = localStorage.getItem("token");
    const [adoptCat, setadoptCat] = useState({
    user_name :"" ,
    user_email: "",
    cat_adopted:cat?._id,
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
    Adopt this cat
  </Button>
) : (
  <Link to='/login'>
    <Button
      style={{ background: '#ff5bbd', border: 'none', cursor: 'pointer' }}
      className='btn_add'>
      Adopt this cat
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
        <Form.Control type="text" placeholder="Enter your name " onChange={(e)=>setadoptCat({...adoptCat, user_name:e.target.value})} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{fontWeight:'bold'}}> Your email  </Form.Label>
        <Form.Control type="text" placeholder="Enter your email"  onChange={(e)=>setadoptCat({...adoptCat, user_email:e.target.value})}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
       <Form.Label style={{fontWeight:'bold'}}> Do you currently have any other pets at home?  </Form.Label>
        <Form.Control type="text" placeholder="Your answer"  onChange={(e)=>setadoptCat({...adoptCat, user_information1:e.target.value})}/>
     </Form.Group>
     <Form.Group className="mb-3" controlId="formBasicEmail">
       <Form.Label style={{fontWeight:'bold'}} > Have you ever owned a cat before?   </Form.Label>
        <Form.Control type="text" placeholder="Your answer"  onChange={(e)=>setadoptCat({...adoptCat, user_information2:e.target.value})}/>
     </Form.Group>
     <Form.Group className="mb-3" controlId="formBasicEmail">
       <Form.Label style={{fontWeight:'bold'}}> Are you familiar with the responsibilities of cat ownership, including feeding, grooming, and veterinary care?   </Form.Label>
        <Form.Control type="text" placeholder="Your answer"  onChange={(e)=>setadoptCat({...adoptCat, user_information3:e.target.value})}/>
     </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
       <Form.Label style={{fontWeight:'bold'}}> Please enter the date you're prepared to welcome this cat into your home   </Form.Label>
        <Form.Control type="text" placeholder="Enter the date"  onChange={(e)=>setadoptCat({...adoptCat, date:e.target.value})}/>
     </Form.Group>
      
    </Form>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button style={{ background: '#ff5bbd', border: 'none', cursor: 'pointer' }} variant="primary" onClick={() => {dispatch(addadoptCat(adoptCat)); 
       
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

export default AddadoptCat