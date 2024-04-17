import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { editcat } from '../redux/catSlice';


function EditCat({ping, setping, cat}) {
const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [edited, setedited] = useState({
    name :cat?.name ,
    breed:cat?.breed,
    image:cat?.image,
    description:cat?.desciption ,
    Location :cat?.Location,
    gender:cat?.gender,
    age:cat?.age,
    images:cat?.images,
    status:cat?.status,
  })
const dispatch= useDispatch();
  return (
    <>
    <Button className='btn_edit' style={{backgroundColor:'green'}} variant="primary" onClick={handleShow}>
      edit
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title> Edit cat </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> Cat name</Form.Label>
        <Form.Control type="text" placeholder={cat?.name} onChange={(e)=>setedited({...edited, name:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> Cat breed</Form.Label>
        <Form.Control type="text" placeholder={cat?.breed} onChange={(e)=>setedited({...edited, breed:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> Cat image </Form.Label>
        <Form.Control type="text" placeholder={cat?.image} onChange={(e)=>setedited({...edited, image:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Cat description</Form.Label>
        <Form.Control type="text" placeholder={cat?.description} onChange={(e)=>setedited({...edited, descpription:e.target.value})}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Cat location</Form.Label>
        <Form.Control type="text" placeholder={cat?.Location} onChange={(e)=>setedited({...edited, Location:e.target.value})}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Cat gender </Form.Label>
        <Form.Control type="text" placeholder={cat?.gender} onChange={(e)=>setedited({...edited, gender:e.target.value})}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Cat age</Form.Label>
        <Form.Control type="text" placeholder={cat?.age} onChange={(e)=>setedited({...edited, age:e.target.value})}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Cat images </Form.Label>
        <Form.Control type="text" placeholder={cat?.images} onChange={(e)=>setedited({...edited, images:e.target.value})}/>
      </Form.Group>
      </Form>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" style={{backgroundColor:'green'}} onClick={() => {dispatch(editcat({id:cat?._id,edited})); 
        
             handleClose();
             window.location.reload();}}>
          Edit
        </Button>

      </Modal.Footer>
    </Modal>
  </>
  )
}

export default EditCat