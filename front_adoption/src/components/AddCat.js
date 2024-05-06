import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { addcat } from '../redux/catSlice';
function AddCat({ping,setping}) {
    const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [cat, setcat] = useState({
    name :"" ,
    breed: "",
    image:"",
    description: "",
    location : "",
    gender:"",
    age: "",
    images:"",
    
  })
const dispatch= useDispatch();
  return (
    <div>
        <>
    <Button style={{ background: '#ff5bbd', border: 'none', cursor: 'pointer' }} className='btn_add'  onClick={handleShow}>
      Add a cat  
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add cat </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> Cat name </Form.Label>
        <Form.Control type="text" placeholder="Enter the cat's name" onChange={(e)=>setcat({...cat, name:e.target.value})} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> Cat gender </Form.Label>
        <Form.Control type="text" placeholder="Enter the cat's gender"  onChange={(e)=>setcat({...cat, gender:e.target.value})}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
       <Form.Label> Cat age  </Form.Label>
        <Form.Control type="text" placeholder="Enter the cat's age"  onChange={(e)=>setcat({...cat, age:e.target.value})}/>
     </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Cat breed </Form.Label>
        <Form.Control type="text" placeholder="Enter the cat's breed" onChange={(e)=>setcat({...cat, breed:e.target.value})} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Cat image </Form.Label>
        <Form.Control type="text" placeholder="Enter the cat's image" onChange={(e)=>setcat({...cat, image:e.target.value})} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> Cat description </Form.Label>
        <Form.Control type="text" placeholder="Enter the cat's description"  onChange={(e)=>setcat({...cat, description:e.target.value})}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
       <Form.Label> Cat location  </Form.Label>
        <Form.Control type="text" placeholder="Enter the cat's location"  onChange={(e)=>setcat({...cat, location:e.target.value})}/>
     </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
       <Form.Label> Cat images </Form.Label>
       <Form.Control type="text" placeholder="Enter the cat's images"  onChange={(e)=>setcat({...cat, images:e.target.value})}/>
      </Form.Group>
      
    </Form>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button style={{ background: '#ff5bbd', border: 'none', cursor: 'pointer' }} variant="primary" onClick={() => {dispatch(addcat(cat)); 
       
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

export default AddCat