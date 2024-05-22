import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteadoptCat} from '../redux/adoptCatSlice';
import EditadoptCat from './EditadoptCat';
import Table from 'react-bootstrap/Table';
import Swal from 'sweetalert2';


function AdoptCatAdmin({ ping, setping }) {
    const user = useSelector(state => state.user?.user);
    const isAuth = localStorage.getItem('token');
    const adoptCat = useSelector(state => state.adoptCat?.adoptCatlist);
    const dispatch = useDispatch();
    const alert = (a) => Swal.fire({
        title: "Sure to delete this request ?",
        showDenyButton: false,
        showCancelButton: true,
        confirmButtonText: "Delete",
        denyButtonText: `cancel`
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          dispatch(deleteadoptCat(a));
          Swal.fire("Request deleted");
          setTimeout(function(){window.location.reload(); }, 2000);
  
        }
      });
      
    
   
    return (
        <>
        <header className="bg-white shadow">
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900"> Adoption Requests for cats </h2>
    </div>
  </header>
            {(isAuth && user?.role === "admin") ? (
                <div className='adopt_request_cat-list-container' style={{ marginTop: '5%' }}>
                    <div className="table-container">
                        <Table striped className='cat-table'>
                            <thead>
                                <tr>
                                    <th>User_name</th>
                                    <th>User_email</th>
                                    <th>cat_adopted</th>
                                    <th>Question1 </th>
                                    <th>Question2</th>
                                    <th>Question3</th>
                                    <th>planned adoption date</th>
                                    <th>Status</th>
                                    <th> </th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {adoptCat?.map(el => (
                                    <tr key={el._id}>
                                        <td>{el.user_name}</td>
                                        <td>{el.user_email}</td>
                                        <td>{el.cat_adopted}</td>
                                        <td>{el.user_information1}</td>
                                        <td>{el.user_information2}</td>
                                        <td>{el.user_information3}</td>
                                        <td>{el.date}</td>
                                        <td>{el.status}</td>
                                        <td>
                                            {/* Utilisation du composant EditCat */}
                                            <EditadoptCat adoptCat={el} ping={ping} setping={setping} />
                                        </td>
                                        <td>
                                           
                                 <button className='btn_delete' style={{ background: 'none', border: 'none', cursor: 'pointer' }} onClick={() =>{ alert(el?._id);} }>
             
                                 <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <line x1="4" y1="7" x2="20" y2="7" />
                                                    <line x1="10" y1="11" x2="10" y2="17" />
                                                    <line x1="14" y1="11" x2="14" y2="17" />
                                                    <path d="M5 7l1 12a2 2 0 002 2h8a2 2 0 002 -2l1 -12" />
                                                    <path d="M9 7v-3a1 1 0 011 -1h4a1 1 0 011 1v3" />
                                                </svg>
                                 </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </div>
            ) : (
                <div><center><img src="https://drudesk.com/sites/default/files/2018-02/404-error-page-not-found.jpg" alt="" width={'80%'} height={'auto'} style={{ width: "80%", height: "auto" }} /></center></div>
            )}
        </>
    );
}

export default AdoptCatAdmin;
