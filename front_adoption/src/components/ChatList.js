import React, { useState } from 'react'
import ChatCard from './ChatCard'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSelector } from 'react-redux'

function ChatList({ping,setping}) {
  const cats= useSelector((state)=>state.cat?.catlist);
  const [text, settext] = useState("")
  return (
    <div>
        <center><Form className="find"  style={{display:'flex',marginTop:'5%'}}>
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
        {cats?.filter((el)=>el?.name.toLowerCase().includes(text.toLowerCase())).map((el)=> <ChatCard cat={el} ping={ping} setping={setping}  />)}  
     </div>
    </div>
  )
}

export default ChatList