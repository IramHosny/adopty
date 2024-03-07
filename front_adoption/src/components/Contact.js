import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import  '../Contact.css';

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
    <form className='cform' ref={form} onSubmit={sendEmail}>
    <div className="background">
    <div className="container">
      <div className="screen">
        <div className="screen-header">
          <div className="screen-header-left">
            <div className="screen-header-button close"></div>
            <div className="screen-header-button maximize"></div>
            <div className="screen-header-button minimize"></div>
          </div>
          <div className="screen-header-right">
            <div className="screen-header-ellipsis"></div>
            <div className="screen-header-ellipsis"></div>
            <div className="screen-header-ellipsis"></div>
          </div>
        </div>
        <div className="screen-body">
          <div className="screen-body-item left">
            <div className="app-title">
              <span>CONTACT</span>
              <span>US</span>
            </div>
           
          </div>
          <div className="screen-body-item">
            <div className="app-form">
              <div className="app-form-group">
                <input className="app-form-control" placeholder="NAME" name="user_name"/>
              </div>
              <div className="app-form-group">
                <input className="app-form-control" placeholder="EMAIL" name="user_email" />
              </div>
        
              <div className="app-form-group message">
                <input className="app-form-control" placeholder="MESSAGE" name="message"  />
              </div>
              <div className="app-form-group buttons">
                <button className="app-form-button">CANCEL</button>
                <button type='submit' className="app-form-button">SEND</button>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  </div>
  </form>
  )
}

export default Contact