import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { editdog } from '../redux/dogSlice';


function EditDog({ping, setping, dog}) {
const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [edited, setedited] = useState({
    name :dog?.name ,
    breed:dog?.breed,
    image:dog?.image,
    description:dog?.desciption ,
    Location :dog?.Location,
    gender:dog?.gender,
    age:dog?.age,
    images:dog?.images,
    status:dog?.status,
  })
const dispatch= useDispatch();
  return (
    <>
    <Button className='btn_edit' style={{backgroundColor:'green'}} variant="primary" onClick={handleShow}>
      edit
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title> Edit dog </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> Dog name</Form.Label>
        <Form.Control type="text" placeholder={dog?.name} onChange={(e)=>setedited({...edited, name:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> Dog breed</Form.Label>
        <Form.Control type="text" placeholder={dog?.breed} onChange={(e)=>setedited({...edited, breed:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> Dog image </Form.Label>
        <Form.Control type="text" placeholder={dog?.image} onChange={(e)=>setedited({...edited, image:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> Dog description</Form.Label>
        <Form.Control type="text" placeholder={dog?.description} onChange={(e)=>setedited({...edited, descpription:e.target.value})}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> Dog location</Form.Label>
        <Form.Control type="text" placeholder={dog?.Location} onChange={(e)=>setedited({...edited, Location:e.target.value})}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Dog gender </Form.Label>
        <Form.Control type="text" placeholder={dog?.gender} onChange={(e)=>setedited({...edited, gender:e.target.value})}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Dog age</Form.Label>
        <Form.Control type="text" placeholder={dog?.age} onChange={(e)=>setedited({...edited, age:e.target.value})}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Dog images </Form.Label>
        <Form.Control type="text" placeholder={dog?.images} onChange={(e)=>setedited({...edited, images:e.target.value})}/>
      </Form.Group>
      </Form>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" style={{backgroundColor:'green'}} onClick={() => {dispatch(editdog({id:dog?._id,edited})); 
     
             handleClose();
             window.location.reload();}}>
          Edit
        </Button>

      </Modal.Footer>
    </Modal>
  </>
  )
}

export default EditDog