import React from 'react'
import ChienCard from './ChienCard'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function ChienList({dogs,text,settext}) {
  return (
    <div>
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e) => settext(e.target.value) }
            />
            <Button className='btn' variant="outline-success" style={{backgroundColor:'#f72585' , border:'none', color:'white'}} >Search</Button>
          </Form>
        <div className='card_list'>
        {dogs.filter((el)=>el.name.toLowerCase().includes(text.toLowerCase())).map((el)=> <ChienCard el={el} />)}  
     </div>
    </div>
  )
}

export default ChienList