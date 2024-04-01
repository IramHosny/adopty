import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './CSS/Contact.css';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_b0i8l2h', 'template_o505zqp', form.current, 
        'iRIGWZ7VuNV8C-m0z'
      )
      .then(
        () => {
          console.log('SUCCESS!');
          console.log("message sent")
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div className='container-contact' style={{marginTop:'5%'}}>
    
  <div className="container d-flex justify-content-center align-items-center">
  
   <img style={{height: '100vh', width: '100%',borderRadius:'30%'}}  alt="contact" src="/img-contact.jpg"/>
  {/* // FORM
  -------------------------------------------------------------
  ----------------------------------------------------------*/}
  <form ref={form} onSubmit={sendEmail}>
    <h1 className="title text-center mb-4" style={{color:'#ff5bbd'}}>Talk to Us</h1>
    {/* Name */}
    <div className="form-group position-relative"style={{margin:'7%'}} >
      <label htmlFor="formName" className="d-block" >
        <i className="icon" data-feather="user" />
      </label>
      <input
        type="text"
        id="formName"
        className="form-control form-control-lg thick"
        placeholder="Name"
        name="user_name"
      />
    </div>
    {/* E-mail */}
    <div className="form-group position-relative" style={{margin:'7%'}}>
      <label htmlFor="formEmail" className="d-block">
        <i className="icon" data-feather="mail" />
      </label>
      <input
        type="email"
        id="formEmail"
        className="form-control form-control-lg thick"
        placeholder="E-mail"
        name="user_email"
      />
    </div>
    {/* Message */}
    <div className="form-group message" style={{margin:'7%'}}>
      <textarea
        id="formMessage"
        className="form-control form-control-lg"
        rows={7}
        placeholder="Mensagem"
        defaultValue={""}
        name="message"
      />
    </div>
    {/* Submit btn */}
    <div className="text-center" style={{margin:'10%'}}>
      <button type="submit" className="btn btn-primary" tabIndex={-1}>
        Send message
      </button>
    </div>
  </form>
</div>
</div>
  )
}

export default Contact