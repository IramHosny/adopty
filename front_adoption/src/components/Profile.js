import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {userEdit } from '../redux/userSlice';
import './CSS/Profile.css';
import Swal from 'sweetalert2';


function Profile() {
    const user = useSelector((state) => state.user?.user);
    const dispatch = useDispatch();
    const Update = (a)=> Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
          dispatch(userEdit(a));
        Swal.fire("Saved!", "", "success");
        window.location.reload();
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
    const [editeduser, setediteduser] = useState({
      'name' : user?.name,
      'lastname' : user?.lastname,
      'adress' : user?.adress,
      'phonenumber' : user?.phonenumber,
      'email' : user?.email,
      password :user?.password,
      role : "user"
    })
  return (
    <div className='profile'>
      <form method="get" action="javascript: void(0);" id="login-form" className="login-form" autoComplete="off" role="main">
        <h1 className="a11y-hidden">Login Form</h1>
        <center><h3>Bonjour {user?.lastname} {user?.name}</h3></center>
        <div>
          <label className="label-email">
            <input type="text" className="text"  placeholder={user?.lastname}  onChange={(e)=>{setediteduser({...editeduser,lastname:e.target.value})}}/>
            <span className="required">Nom </span>
          </label>
          <label className="label-email">
            <input type="text" className="text"  placeholder={user?.name}   onChange={(e)=>{setediteduser({...editeduser,name:e.target.value})}}/>
            <span className="required">Prénom </span>
          </label>
          <label className="label-email">
            <input type="text" className="text"  placeholder={user?.email}   onChange={(e)=>{setediteduser({...editeduser,email:e.target.value})}}/>
            <span className="required">Email </span>
          </label>
          <label className="label-email">
            <input type="text" className="text"  placeholder={user?.adress}   onChange={(e)=>{setediteduser({...editeduser,adress:e.target.value})}}/>
            <span className="required">Adresse </span>
          </label>
          <label className="label-email">
            <input type="text" className="text"  placeholder={user?.phonenumber}   onChange={(e)=>{setediteduser({...editeduser,phonenumber:e.target.value})}}/>
            <span className="required">Phone number </span>
          </label>
          <button style={{width:'100px',height:'35px', fontWeight:'bold',borderRadius:'20%',marginTop:'10px',background: '#ff5bbd', border: 'none', cursor: 'pointer', color:'white' }} onClick={()=> Update({id:user?._id,editeduser})}> Edit </button>
        </div>
  
        <figure aria-hidden="true">
          <div className="person-body" />
          <div className="neck skin" />
          <div className="head skin">
            <div className="eyes" />
            <div className="mouth" />
          </div>
          <div className="hair" />
          <div className="ears" />
          <div className="shirt-1" />
          <div className="shirt-2" />
        </figure>
        
      </form>
    </div>
  )
}

export default Profile