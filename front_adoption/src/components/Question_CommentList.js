import React, { useState } from 'react'
import Question_CommentForum from './Question_CommentForum'

import { useSelector } from 'react-redux'
import EditQuestion from './EditQuestion';
import { deletequestion } from '../redux/questionSlice';
import { useDispatch } from 'react-redux';
import EditComment from './EditComment';
import { deletecomment } from '../redux/commentSlice';
import AddQuestion from './AddQuestion';



function Question_CommentList() {
  const questions= useSelector((state)=>state.question?.questionlist);
  const comments= useSelector((state)=>state.comment?.commentlist);
  const [text, settext] = useState("");
  console.log(questions);
  console.log(comments);
  const dispatch= useDispatch();
  
  return (
    <div style={{marginTop:'50px'}}>
       <AddQuestion/>
      
        <div className='card_list'>
        {questions && comments && questions.map((question, index) => (
    <Question_CommentForum
      key={index}
      question={question}
      comment={comments[index]}
    />
  ))}
     </div>

   {/* <table>
     {questions?.map((el)=> (<tr>
          <td className='cln_table'>{el?.contenu}</td>
          <td className='cln_table'> <EditQuestion question={el} /> </td>
          <td className='cln_table'> <button className='btn_delete' style={{backgroundColor:'red'}} onClick={()=>{dispatch(deletequestion(el._id)); window.location.reload();}}> X </button></td>
        </tr>)
        )}
       </table>
       <table>
         {comments?.map((el1)=> (<tr>
          <td className='cln_table'>{el1?.contenu}</td>
          <td className='cln_table'> <EditComment comment={el1} /> </td>
          <td className='cln_table'> <button className='btn_delete' style={{backgroundColor:'red'}} onClick={()=>{dispatch(deletecomment(el1._id)); window.location.reload();}}> X </button></td>
        </tr>)
        )}
        </table> */}
    </div>
  )
}

export default Question_CommentList