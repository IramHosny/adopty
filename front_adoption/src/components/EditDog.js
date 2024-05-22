import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { editdog } from '../redux/dogSlice';
import Swal from 'sweetalert2';


function EditDog({ping, setping, dog}) {
const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [edited, setedited] = useState({
    name :dog?.name ,
    breed:dog?.breed,
    image:dog?.image,
    description:dog?.description ,
    location :dog?.location,
    gender:dog?.gender,
    age:dog?.age,
    images:dog?.images,
    status:dog?.status,
  }) 
  console.log(edited)
const dispatch= useDispatch();
const Update = (a)=> Swal.fire({
  title: "Do you want to save the changes?",
  showDenyButton: true,
  showCancelButton: false,
  confirmButtonText: "Save",
  denyButtonText: `Don't save`
}).then((result) => {
  /* Read more about isConfirmed, isDenied below */
  if (result.isConfirmed) {
      dispatch(editdog(a));
    Swal.fire("Saved!", "", "success");
    window.location.reload();
  } else if (result.isDenied) {
    Swal.fire("Changes are not saved", "", "info");
  }
});
  return (
    <>
        <button style={{ background: 'none', border: 'none', cursor: 'pointer' }} onClick={handleShow}>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-edit-2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M16 3l5 5l-14 14l-5 1l1 -5z" />
                    <line x1="18" y1="7" x2="13.35" y2="11.65" />
                    <line x1="14" y1="4" x2="4" y2="14" />
                </svg>
            </button>

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
        <Form.Control type="text" placeholder={dog?.description} onChange={(e)=>setedited({...edited, description:e.target.value})}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> Dog location</Form.Label>
        <Form.Control type="text" placeholder={dog?.location} onChange={(e)=>setedited({...edited, location:e.target.value})}/>
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
        <Button variant="primary"style={{ background: '#ff5bbd', border: 'none', cursor: 'pointer' }} onClick={() => Update({id:dog?._id,edited}) }>
          Edit
        </Button>

      </Modal.Footer>
    </Modal>
  </>
  )
}

export default EditDog