import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deletedog } from '../redux/dogSlice';
import AddDog from './AddDog';
import EditDog from './EditDog';
import Table from 'react-bootstrap/Table';
import Swal from 'sweetalert2';

function DogListadmin({ ping, setping }) {
    const user = useSelector(state => state.user?.user);
    const isAuth = localStorage.getItem('token');
    const dogs = useSelector(state => state.dog?.doglist);
    const dispatch = useDispatch();
    

    return (
        <>
            {isAuth && user?.role === "admin" ? (
                <div className='dog-list-container' style={{ marginTop: '5%' }}>
                    <div className='add-dog-container'>
                        <AddDog ping={ping} setping={setping} />
                    </div>
                    <div className="table-container">
                        <Table striped className='dog-table'>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Breed</th>
                                    <th>Image</th>
                                    <th>Description</th>
                                    <th>Location</th>
                                    <th>Gender</th>
                                    <th>Age</th>
                                    <th>Status</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dogs?.map(el => (
                                    <tr key={el._id}>
                                        <td>{el.name}</td>
                                        <td>{el.breed}</td>
                                        <td>
                                            <img src={el.image} alt='Dog' style={{ maxWidth: '50px', minWidth: '50px', maxHeight: '50px', minHeight: '50px' }} />
                                        </td>
                                        <td>{el.description}</td>
                                        <td>{el.location}</td>
                                        <td>{el.gender}</td>
                                        <td>{el.age}</td>
                                        <td>{el.status}</td>
                                        <td>
                                            <EditDog dog={el} ping={ping} setping={setping} />
                                        </td>
                                        <td>
                                            <button style={{ background: 'none', border: 'none', cursor: 'pointer' }} onClick={() => { dispatch(deletedog(el._id));
             window.location.reload(); }}>
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

export default DogListadmin;
