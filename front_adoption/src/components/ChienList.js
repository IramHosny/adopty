import React, { useState } from 'react'
import ChienCard from './ChienCard'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSelector } from 'react-redux'

function ChienList({ping,setping}) {
  const dogs= useSelector((state)=>state.dog?.doglist);
  const [text, settext] = useState("")
  return (
    <div>
        <center> <Form className="find"  style={{display:'flex',marginTop:'5%'}}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e) => settext(e.target.value) }
            />
            <Button className='btn' variant="outline-success" style={{backgroundColor:'#ff5bbd' , border:'none', color:'white'}} >Search</Button>
          </Form></center>
        <div className='card_list'>
        {dogs?.filter((el)=>el?.name.toLowerCase().includes(text.toLowerCase())).map((el)=> <ChienCard dog={el} />)}  
     </div>
    </div>
  )
}

export default ChienList