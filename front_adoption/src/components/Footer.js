import React from 'react'
import './CSS/Footer.css'
function Footer() {
  return (
    <div className='footer' style={{marginTop:'0',backgroundColor:'rgb(248 249 250)'}}>
        
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css"
    integrity="sha256-2XFplPlrFClt0bIdPgpz8H7ojnk10H69xRqd9+uTShA="
    crossOrigin="anonymous"
  />
  
  <footer className="deneb_footer">
    <div
      className="widget_wrapper"
      style={{
        backgroundImage:
          "url(http://demo.tortoizthemes.com/deneb-html/deneb-ltr/assets/images/footer_bg.png)"
      }}
    >
      <div className="container_footer" style={{height:'250px'}}>
        <div className="row" style={{marginTop:'-50px'}}>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="widget widegt_about">
              <div className="widget_title">
                <img
                  src="assets/images/logo_1.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <p style={{width:'100%',color:'black',fontStyle:'italic',fontFamily:'cursive',fontSize:'15px',fontWeight:'bold',marginLeft:'20%'}}>
              At Adopty, our mission is simple: to connect loving homes with furry companions in need. 
              Through our platform, we strive to facilitate the adoption process for both cats and dogs, 
              ensuring that every pet finds a caring family to call their own. 
              Join us in making a difference in the lives of these wonderful animals by adopting from Adopty today
              </p>
              
            </div>
          </div>
          
          <div className="col-lg-4 col-md-6 col-sm-12" style= {{marginLeft:'30%'}}  >
            <div className="widget widget_contact">
              <div className="widget_title">
                <h4 style={{color:'#ff5bbd',fontStyle:'italic',fontFamily:'cursive'}}>Contact Us</h4>
              </div>
              <div className="contact_info">
                <div className="single_info">
                  <div className="icon">
                    <i className="fas fa-phone-alt" />
                  </div>
                  <div className="info">
                    <p>
                      <a style={{textDecoration:'none',color:'black',fontStyle:'italic',fontFamily:'cursive',fontSize:'15px',fontWeight:'bold'}} href="tel:+919246147999">+21656221816</a>
                    </p>
                    <p>
                      <a style={{textDecoration:'none',color:'black',fontStyle:'italic',fontFamily:'cursive',fontSize:'15px',fontWeight:'bold'}}href="tel:+919246147999">+21675221816</a>
                    </p>
                  </div>
                </div>
                <div className="single_info">
                  <div className="icon">
                    <i className="fas fa-envelope" />
                  </div>
                  <div className="info">
                    <p>
                      <a style={{textDecoration:'none',color:'black',fontStyle:'italic',fontFamily:'cursive',fontSize:'15px',fontWeight:'bold'}}href=" ">adopty.association@gmail.com</a>
                    </p>
                    <p>
                      <a style={{textDecoration:'none',color:'black',fontStyle:'italic',fontFamily:'cursive',fontSize:'15px',fontWeight:'bold'}}href=" ">adopty@gmail.com</a>
                    </p>
                  </div>
                </div>
                <div className="single_info">
                  <div className="icon">
                    <i className="fas fa-map-marker-alt" />
                  </div>
                  <div className="info">
                    <p style={{color:'black',fontStyle:'italic',fontFamily:'cursive',fontSize:'15px',fontWeight:'bold'}}>
                      Rue Med ali  Gabès,<span>Tunisia.</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="copyright_area">
      <div className="container_footer">
        <div className="row_footer">
          <div className="col-lg-12_footer">
            <div className="copyright_text">
              <p>Copyright © 2024 Narjes Hammouda.All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>

    </div>
  )
}

export default Footer