import React from 'react'
import { Fade } from 'react-awesome-reveal';

function About() {
  return (
    
    <div className='about_container' style={{marginTop:"5%"}}>
   <section className="py-5">
  <div className="container">
    <div className="row gx-4 align-items-center justify-content-between">
      <div className="col-md-5 order-2 order-md-1">
        <div className="mt-5 mt-md-0">
          <span className="text-muted" style={{color:'black',fontStyle:'italic',fontFamily:'cursive',fontSize:'20px',fontWeight:'bold'}}>Our Story</span>
          <h2 className="display-5 fw-bold" style={{color:'#9e4229',fontStyle:'italic',fontFamily:'cursive',fontSize:'50px',fontWeight:'bold'}}>About Us</h2>
          <Fade><p className="lead" style={{fontStyle:'italic',fontFamily:'cursive',fontSize:'20px',fontWeight:'bold',marginTop:'5%'}}>
          Welcome to Adopty, where hearts meet paws! At Adopty, 
          we're passionate about connecting compassionate individuals with furry companions in need 
          of loving homes. Our mission is to provide a seamless and heartfelt adoption experience 
          for both pets and their future families. Whether you're a seasoned pet owner or 
          considering adoption for the first time, Adopty is here to guide you every step of the way. 
          </p>
          <p className="lead" style={{color:'#9e4229',fontStyle:'italic',fontFamily:'cursive',fontSize:'18px',fontWeight:'bold'}}>
          Together, let's embark on a journey of companionship, joy, and endless tail wags. 
          Join us in making a difference one adoption at a time!.
          </p>
          </Fade>
        </div>
      </div>
      <div className="col-md-6 offset-md-1 order-1 order-md-2">
        <div className="row gx-2 gx-lg-3">
          <div className="col-6">
            <div className="mb-2">
              <img
                className="img-fluid rounded-3"
                src="https://resize.prod.docfr.doc-media.fr/rcrop/1200,902,center-middle/ext/eac4ff34/content/2022/7/4/presentation-du-chat-a-la-famille-0fc3da23c6e8cde2.jpeg"
               alt=""/>
            </div>
          </div>
          <div className="col-6">
            <div className="mb-2">
              <img
                className="img-fluid rounded-3"
                src="https://www.secondechance.org/uploads/refuge/2730/5de6490ccf7c8920130506.jpg"
               alt=""/>
            </div>
          </div>
          <div className="col-6">
            <div className="mb-2">
              <img
                className="img-fluid rounded-3"
                src="https://www.wanimo.com/veterinaire/wp-content/uploads/2013/07/images_articles_chat_chat-bb@2x.jpg"
              alt=""/>
            </div>
          </div>
          <div className="col-6">
            <div className="mb-2">
              <img
                className="img-fluid rounded-3"
                src="https://www.feliway.fr/cdn/shop/articles/Make_20cats_20and_20dogs_20get_20along_20-_20August_20editorial_2006.gif?v=1673606238"
              alt=""/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default About