import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { adddog } from '../redux/dogSlice';
function AddDog({ping,setping}) {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [dog, setdog] = useState({
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
    <Button style={{ background: '#ff5bbd', border: 'none', cursor: 'pointer' }} className='btn_add'  variant="primary" onClick={handleShow}>
      Add a dog 
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add dog </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> Dog name </Form.Label>
        <Form.Control type="text" placeholder="Enter the dog's name" onChange={(e)=>setdog({...dog, name:e.target.value})} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> Dog gender </Form.Label>
        <Form.Control type="text" placeholder="Enter the dog's gender"  onChange={(e)=>setdog({...dog, gender:e.target.value})}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
       <Form.Label> Dog age  </Form.Label>
        <Form.Control type="text" placeholder="Enter the dog's age"  onChange={(e)=>setdog({...dog, age:e.target.value})}/>
     </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> Dog breed </Form.Label>
        <Form.Control type="text" placeholder="Enter the dog's breed" onChange={(e)=>setdog({...dog, breed:e.target.value})} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Dog image </Form.Label>
        <Form.Control type="text" placeholder="Enter the dog's image" onChange={(e)=>setdog({...dog, image:e.target.value})} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> Dog description </Form.Label>
        <Form.Control type="text" placeholder="Enter the dog's description"  onChange={(e)=>setdog({...dog, description:e.target.value})}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
       <Form.Label> Dog location  </Form.Label>
        <Form.Control type="text" placeholder="Enter the dog's location"  onChange={(e)=>setdog({...dog, location:e.target.value})}/>
     </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
       <Form.Label> Dog images </Form.Label>
       <Form.Control type="text" placeholder="Enter the dog's images"  onChange={(e)=>setdog({...dog, images:e.target.value})}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
       <Form.Label> Dog status </Form.Label>
       <Form.Control type="text" placeholder="Enter the dog's status"  onChange={(e)=>setdog({...dog, status:e.target.value})}/>
      </Form.Group>
    
    </Form>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button style={{ background: '#ff5bbd', border: 'none', cursor: 'pointer' }} variant="primary" onClick={() => {dispatch(adddog(dog)); 
       
             handleClose();
             window.location.reload();}}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  </>
    </div>
  )
}

export default AddDog