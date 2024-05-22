import React from "react";
import { MDBAccordion, MDBAccordionItem, MDBContainer } from "mdb-react-ui-kit";
import AddComment from "./AddComment";
import { deletecomment } from "../redux/commentSlice";
import EditComment from "./EditComment";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import EditQuestion from "./EditQuestion";
import { deletequestion } from "../redux/questionSlice";
import Swal from 'sweetalert2';

function Question_CommentForum ({question}) {
  const dispatch= useDispatch();
  const user = useSelector(state => state.user?.user);
  const comments= useSelector((state)=>state.comment?.commentlist);
  const alert = (a) => Swal.fire({
    title: "Sure to delete this question ?",
    showDenyButton: false,
    showCancelButton: true,
    confirmButtonText: "Delete",
    denyButtonText: `cancel`
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      dispatch(deletequestion(a));
      Swal.fire("Question deleted");
      setTimeout(function(){window.location.reload();},2000);

    }
  });
  const alert1 = (a) => Swal.fire({
    title: "Sure to delete this comment ?",
    showDenyButton: false,
    showCancelButton: true,
    confirmButtonText: "Delete",
    denyButtonText: `cancel`
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      dispatch(deletecomment(a));
      Swal.fire("Comment deleted");
      setTimeout(function(){window.location.reload(); }, 2000);

    }
  });

  
  return (
    <MDBContainer className="mt-5" style={{maxWidth: '1000px'}}>
      <MDBAccordion alwaysOpen initialActive={1} >
        <MDBAccordionItem  collapseId={1} headerTitle={[
          <strong>{question?.user_email} </strong>, 
          '\u00A0',  '\u00A0',  question?.contenu,
          user?.email === question?.user_email && <EditQuestion question={question} />, 
          user?.email === question?.user_email && 
          <button className='btn_delete' style={{ background: 'none', border: 'none', cursor: 'pointer' }} 
            onClick={() => {
              alert((question._id)); 
            }}> 
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" />
              <line x1="4" y1="7" x2="20" y2="7" />
              <line x1="10" y1="11" x2="10" y2="17" />
              <line x1="14" y1="11" x2="14" y2="17" />
              <path d="M5 7l1 12a2 2 0 002 2h8a2 2 0 002 -2l1 -12" />
              <path d="M9 7v-3a1 1 0 011 -1h4a1 1 0 011 1v3" />
            </svg> 
          </button>,  
          '\u00A0', '\u00A0', '\u00A0', '\u00A0', '\u00A0', '\u00A0', '\u00A0', '\u00A0', <AddComment question={question}/> 
        ]} >
          
          {comments?.filter((el1) => el1?.question === question?.contenu).map((el1) => (
            <tr key={el1._id}>
              <td className='cln_table'>   
                <strong>{el1?.user_email}</strong> {el1?.contenu}
              </td>
              <td className='cln_table'> 
                {user?.email === el1?.user_email && <EditComment comment={el1} />} 
              </td>
              <td className='cln_table'> 
                {user?.email === el1?.user_email && 
                <button className='btn_delete' style={{ background: 'none', border: 'none', cursor: 'pointer' }} 
                  onClick={() => {
                   alert1((el1._id)); 
                   
                  }}> 
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <line x1="4" y1="7" x2="20" y2="7" />
                    <line x1="10" y1="11" x2="10" y2="17" />
                    <line x1="14" y1="11" x2="14" y2="17" />
                    <path d="M5 7l1 12a2 2 0 002 2h8a2 2 0 002 -2l1 -12" />
                    <path d="M9 7v-3a1 1 0 011 -1h4a1 1 0 011 1v3" />
                  </svg> 
                </button>}
              </td>
            </tr>
          ))}
        </MDBAccordionItem>
      </MDBAccordion>
    </MDBContainer>
  );
}

export default Question_CommentForum;
