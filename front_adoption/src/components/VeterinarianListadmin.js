import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddVeterinarian from './AddVeterinarian';
import EditVeterinarian from './EditVeterinarian';
import Table from 'react-bootstrap/Table';
import { deleteveterinarian } from '../redux/veterinarianSlice';

function VetrinarianListadmin({ ping, setping }) {
    const user = useSelector(state => state.user?.user);
    const isAuth = localStorage.getItem('token');
    const veterinarians = useSelector(state => state.veterinarian?.veterinarianlist);
    const dispatch = useDispatch();

    return (
        <>
            {(isAuth && user?.role === "admin") ? (
                <div className='veterinarian-list-container' style={{ marginTop: '5%' }}>
                    <div className='add-veterinarian-container'>
                        <AddVeterinarian ping={ping} setping={setping} />
                    </div>
                    <div className="table-container">
                        <Table striped className='veterinarian-table'>
                            <thead>
                                <tr>
                                    <th> Fullname</th>
                                    <th>Description</th>
                                    <th> Image</th>
                                    <th> Address</th>
                                    <th> Phone Number</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {veterinarians?.map(veterinarian => (
                                    <tr key={veterinarian._id}>
                                        <td>{veterinarian.fullname}</td>
                                        <td>{veterinarian.description}</td>
                                        <td>
                                            <img src={veterinarian.image} style={{ maxWidth: '50px', minWidth: '50px', maxHeight: '50px', minHeight: '50px' }} alt='Veterinarian' className='img_table' />
                                        </td>
                                        <td>{veterinarian.adress}</td>
                                        <td>{veterinarian.phonenumber}</td>
                                        <td>
                                            {/* Utilisation du composant EditVeterinarian */}
                                            <EditVeterinarian veterinarian={veterinarian} ping={ping} setping={setping} />
                                        </td>
                                        <td>
                                            <button className='btn_delete' style={{ background: 'none', border: 'none', cursor: 'pointer' }} onClick={() => { dispatch(deleteveterinarian(veterinarian._id)); setping(!ping); }}>
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

export default VetrinarianListadmin;
