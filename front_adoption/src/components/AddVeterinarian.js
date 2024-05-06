import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { addveterinarian } from '../redux/veterinarianSlice';
function AddVeterinarian({ping,setping}) {
    const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [veterinarian, setveterinarian] = useState({
    fullname:"" ,
    description: "",
    image: "",
    adress: "",
    phonenumber: "",
  })
const dispatch= useDispatch();
  return (
    <div>
        <>
    <Button style={{ background: '#ff5bbd', border: 'none', cursor: 'pointer' }} className='btn_add'  variant="primary" onClick={handleShow}>
      Add a veterinarian
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title> Add veterinarian </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> Veterinarian fullname </Form.Label>
        <Form.Control type="text" placeholder="Enter the veterinarian's name" onChange={(e)=>setveterinarian({...veterinarian, fullname:e.target.value})} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> Veterinarian description </Form.Label>
        <Form.Control type="text" placeholder="Enter the veterinarian's description"  onChange={(e)=>setveterinarian({...veterinarian, description:e.target.value})}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
       <Form.Label> Veterinarian image </Form.Label>
        <Form.Control type="text" placeholder="Enter the veterinarian's image"  onChange={(e)=>setveterinarian({...veterinarian, image:e.target.value})}/>
     </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> Veterinarian adress </Form.Label>
        <Form.Control type="text" placeholder="Enter the veterinarian's adress" onChange={(e)=>setveterinarian({...veterinarian, adress:e.target.value})} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>veterinarian phonenumber </Form.Label>
        <Form.Control type="text" placeholder="Enter the veterinarian's phonenumber" onChange={(e)=>setveterinarian({...veterinarian, phonenumber:e.target.value})} />
      </Form.Group>
    
    </Form>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button style={{ background: '#ff5bbd', border: 'none', cursor: 'pointer' }} variant="primary" onClick={() => {dispatch(addveterinarian(veterinarian)); 
       
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

export default AddVeterinarian