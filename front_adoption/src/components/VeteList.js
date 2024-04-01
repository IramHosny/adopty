import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import VeteCard from './VeteCard';


function VeteList({dataVeterinarian,text,settext}) {
  return (
    <div >
    <Form className="d-flex">
       <Form.Control
         type="search"
         placeholder="Search"
         className="me-2"
         aria-label="Search"
         onChange={(e) => settext(e.target.value) }
       />
       <Button className='btn' variant="outline-success" style={{backgroundColor:'#ff5bbd' , border:'none', color:'white'}} >Search</Button>
     </Form>
   <div className='Vete_list'>
   {dataVeterinarian.filter((el)=>el.adresse.toLowerCase().includes(text.toLowerCase())).map((el)=> <VeteCard el={el} />)}  
</div>
</div>
  )
}

export default VeteList