import React from 'react'
import ChatCard from './ChatCard'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function ChatList({cats,text,settext}) {
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
        <div className='card_list'>
        {cats.filter((el)=>el.name.toLowerCase().includes(text.toLowerCase())).map((el)=> <ChatCard el={el} />)}  
     </div>
    </div>
  )
}

export default ChatList