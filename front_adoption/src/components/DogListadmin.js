import React from 'react'
import { useSelector } from 'react-redux'
import AddDog from './AddDog';
import Table from 'react-bootstrap/Table';
import { deletedog} from '../redux/dogSlice';
import { useDispatch } from 'react-redux';
import EditDog from './EditDog';

function DogListadmin({dog,ping,setping,props}) {
    const user = useSelector((state)=>state.user?.user);
    const isAuth = localStorage.getItem('token');
    const dogs= useSelector((state)=> state.dog?.doglist);
    console.log(dogs);
    const dispatch= useDispatch();
  return (
    <>
    {(isAuth&&user?.role === "admin")? (      
    <div className='dog_list' style={{ marginTop:'5%'}}  >
        <div className='add'>
        <AddDog ping={ping} setping={setping}/>
        <div className="container">
        
     <Table className='table' striped="columns">
      <thead>
        <tr>
          <th className='cln_table'>Dog_name</th>
          <th className='cln_table'>Dog_breed</th>
          <th className='cln_table'>Dog_image </th>
          <th className='cln_table'>Dog_description</th>
          <th className='cln_table'>Dog_location</th>
          <th className='cln_table'>Dog_gender</th>
          <th className='cln_table'>Dog_age</th>
          <th className='cln_table'>Dog_images</th>
          <th className='cln_table'>Dog_status</th>
          <th className='cln_table'> <svg className='img_svg'
      viewBox="0 0 1024 1024"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32zm-622.3-84c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9z" />
    </svg></th>
    <th className='cln_table'>  <svg className='img_svg'
      viewBox="0 0 1024 1024"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zm-200 0H360v-72h304v72z" />
    </svg></th>
         
          
        </tr>
      </thead>

            {dogs?.map((el)=> (<tr>
          <td className='cln_table'>{el?.name}</td>
          <td className='cln_table'>{el?.breed}</td>
          <td className='cln_table'> <img className='img_table' src= {el?.image} alt='' ></img></td>
          <td className='cln_table'>{el?.description} </td>
          <td className='cln_table'>{el?.Location}</td>
          <td className='cln_table'>{el?.gender}</td>
          <td className='cln_table'>{el?.age}</td>
          <td className='cln_table'>{el?.images}</td>
          <td className='cln_table'>{el?.status}</td>
          <td className='cln_table'> <EditDog dog={el} ping={ping} setping={setping}/> </td>
          <td className='cln_table'> <button className='btn_delete' style={{backgroundColor:'red'}} onClick={()=>{dispatch(deletedog(el._id)); window.location.reload();}}> X </button></td>
        </tr>)
        )}
        </Table>
        </div>
    </div>
    </div>
):(<div><center><img src="https://drudesk.com/sites/default/files/2018-02/404-error-page-not-found.jpg" alt="" width={'80%'} height={'auto'} style={{ width:"80%", height:"auto"}} /></center></div>)}
    </>

  )
}

export default DogListadmin