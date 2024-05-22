import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { editadoptDog } from '../redux/adoptDogSlice';
import Swal from 'sweetalert2';
import { deletedog } from '../redux/dogSlice';


function EditadoptDog({adoptDog}) {
  const [show, setShow] = useState(false);
  
  const dispatch = useDispatch();

  const handleEdit = () => {
    Swal.fire({
      title: 'Voulez-vous accepter cette demande d\'adoption?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Oui',
      cancelButtonText: 'Non',
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(editadoptDog({ id: adoptDog?._id, edited: { status: 'accepted' } }))
          .then(() => {
            dispatch(deletedog(adoptDog?.dog_adopted)); // Supprimer le chien une fois que la demande est acceptée
            window.location.reload(); // Recharger la page
          })
          .catch((error) => {
            console.error('Error accepting adoption:', error);
          });
      }
    });
  };

  return (
    <>
        <Button style={{backgroundColor:'green', border: 'none', cursor: 'pointer'}} variant="primary" onClick={handleEdit} className="accept-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2" viewBox="0 0 16 16">
          <path d="M11.755 4.97a.56.56 0 0 1 .811.02l1.5 1.5a.56.56 0 0 1-.021.811l-7.5 7.5a.56.56 0 0 1-.83-.02l-3-3a.56.56 0 0 1 .02-.81l1.5-1.5a.56.56 0 0 1 .81.02l1.64 1.64 6.36-6.36z" />
        </svg>
      </Button>
  </>
  )
}

export default EditadoptDog