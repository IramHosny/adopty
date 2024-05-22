import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { editquestion } from '../redux/questionSlice';
import Swal from 'sweetalert2';


function EditQuestion({question}) {
const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [edited, setedited] = useState({
    contenu :question?.contenu ,
  })
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
      dispatch(editquestion(a));
    Swal.fire("Saved!", "", "success");
    window.location.reload();
  } else if (result.isDenied) {
    Swal.fire("Changes are not saved", "", "info");
  }
});
  return (
    <>
    <Button className='btn_edit' style={{ background: 'none', border: 'none', cursor: 'pointer' }} variant="primary" onClick={handleShow}>
    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-edit-2" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M16 3l5 5l-14 14l-5 1l1 -5z" />
                    <line x1="18" y1="7" x2="13.35" y2="11.65" />
                    <line x1="14" y1="4" x2="4" y2="14" />
                </svg>
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title> Edit Your Question  </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> Question content</Form.Label>
        <Form.Control type="text" placeholder={question?.contenu} onChange={(e)=>setedited({...edited, contenu:e.target.value})} />
      </Form.Group>
      </Form>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" style={{ background: '#ff5bbd', border: 'none', cursor: 'pointer' }} onClick={() => Update({id:question?._id,edited}) 
        
            }>
          Edit
        </Button>

      </Modal.Footer>
    </Modal>
  </>
  )
}

export default EditQuestion