import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { editveterinarian } from '../redux/veterinarianSlice';


function EditVeterinarian({ping, setping, veterinarian}) {
const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [edited, setedited] = useState({
    name:veterinarian?.name_lastname ,
    description:veterinarian?.description ,
    image:veterinarian?.image,
    adress:veterinarian?.adress,
    phonenumber:veterinarian?.phonenumber,
  })
const dispatch= useDispatch();
  return (
    <>
    <Button className='btn_edit' style={{backgroundColor:'green'}} variant="primary" onClick={handleShow}>
      edit
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title> Edit veterinarian </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> Veterinarian fullname</Form.Label>
        <Form.Control type="text" placeholder={veterinarian?.fullname} onChange={(e)=>setedited({...edited, fullname:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> Veterinarian description </Form.Label>
        <Form.Control type="text" placeholder={veterinarian?.description} onChange={(e)=>setedited({...edited, description:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Veterinarian image </Form.Label>
        <Form.Control type="text" placeholder={veterinarian?.image} onChange={(e)=>setedited({...edited, image:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> Veterinarian adress</Form.Label>
        <Form.Control type="text" placeholder={veterinarian?.adress} onChange={(e)=>setedited({...edited, adress:e.target.value})}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Veterinarian phonenumber </Form.Label>
        <Form.Control type="text" placeholder={veterinarian?.phonenumber} onChange={(e)=>setedited({...edited, phonenumber:e.target.value})}/>
      </Form.Group>
      </Form>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" style={{backgroundColor:'green'}} onClick={() => {dispatch(editveterinarian({id:veterinarian?._id,edited})); 
        
             handleClose();
             window.location.reload();}}>
          Edit
        </Button>

      </Modal.Footer>
    </Modal>
  </>
  )
}

export default EditVeterinarian