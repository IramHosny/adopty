import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import VeteCard from './VeteCard';
import { useSelector } from 'react-redux'


function VeteList({ping,setping}) {
  const veterinarians= useSelector((state)=>state.veterinarian?.veterinarianlist);
  const [text, settext] = useState("")
  return (
    <div >
    <center> <Form className="find" style={{display:'flex',marginTop:'5%'}}>
       <Form.Control
         type="search"
         placeholder="Search"
         className="me-2"
         aria-label="Search"
         onChange={(e) => settext(e.target.value) }
       />
       <Button className='btn_card' variant="outline-success" style={{backgroundColor:'#ff5bbd' , border:'none', color:'white'}} >Search</Button>
     </Form></center>
   <div className='Vete_list'>
   {veterinarians?.filter((el)=>el?.adress.toLowerCase().includes(text.toLowerCase())).map((el)=> <VeteCard veterinarian={el} />)}  
</div>
</div>
  )
}

export default VeteList