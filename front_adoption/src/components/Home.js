import React from 'react'
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Fade } from 'react-awesome-reveal';
import './CSS/home_3.css';

function Home() {
  return (
    <div className='home' style={{backgroundImage:`url("/mission.png")`,backgroundSize:"cover",
    backgroundRepeat: "no-repeat"}} >
    <video autoPlay muted loop width={'100%'} height={'auto'}>
    <source src="./couv.mp4" type="video/mp4"/>
    </video>
     <Fade><div className='home_2'> 
    <div className='cards_dogs_cats_vete' style={{display:'flex',justifyContent:'space-around',flexWrap:'nowrap', marginTop:'5%'}}>
<div className="card" style={{borderRadius:'20px', height:'150px',width:'300px',backgroundColor:'white'}}>
<Link  style={{textDecoration:'none'}} to="/dogs">  <img img alt="dog" src="/dog.png" style={{maxWidth:'250px',minWidth:'250px',maxHeight:'250px',minHeight:'250px',marginTop:'-50px',marginLeft:'15px'}}/> </Link>
  <div className="card-body">
    <h5 className="card-title" style={{textAlign:'center',marginTop:'-100px',fontStyle:'italic',fontFamily:'cursive'}}> Dogs </h5>
  </div>
</div>
<div className="card" style={{borderRadius:'20px', height:'150px',width:'300px',backgroundColor:'white'}}>
<Link  style={{textDecoration:'none'}} to="/cats"><img img alt="cat" src="/cat.png" style={{maxWidth:'250px',minWidth:'250px',maxHeight:'250px',minHeight:'250px',marginTop:'-50px',marginLeft:'15px'}}/> </Link>
  <div class="card-body">
    <h5 class="card-title" style={{textAlign:'center',marginTop:'-100px',fontStyle:'italic',fontFamily:'cursive'}}> Cats </h5>
  </div>
</div>
<div className="card" style={{borderRadius:'20px', height:'150px',width:'300px',backgroundColor:'white'}}>
<Link  style={{textDecoration:'none'}} to="/veterinarian"> <img img alt="veterinarian" src="/veterinarian.png" style={{maxWidth:'250px',minWidth:'250px',maxHeight:'250px',minHeight:'250px',marginTop:'-50px',marginLeft:'15px'}}/> </Link>
  <div class="card-body">
    <h5 class="card-title" style={{textAlign:'center',marginTop:'-100px',fontStyle:'italic',fontFamily:'cursive'}}> To take care of your pets </h5>
  </div>
</div>
</div>
    </div>
    </Fade>
    <h1 style={{color:'#ff5bbd' , marginTop:'10%', textAlign:'center' ,fontStyle:'italic',fontFamily:'cursive',fontWeight:'bold'}}> Pets Available </h1>
     <Fade> <div className="container" style={{marginTop:'5%'}}>
   
  <div>
    <div className="content">
      <h2> Coco </h2> 
      <span>Femelle-Jeune</span>
    </div>
  </div>
  <div>
    <div className="content">
      <h2>Caramel</h2>
      <span>Femelle-Jeune</span>
    </div>
  </div>
  <div>
    <div className="content">
      <h2>Lisa</h2>
      <span>Mâle-Jeune</span>
    </div>
  </div>
  <div>
    <div className="content">
      <h2>Kayto</h2>
      <span>Mâle-Jeune</span>
    </div>
  </div>
</div>
</Fade>
    <div classname='home_4' style={{marginTop:'10%'}}>
    <h1 style={{ marginTop:'70px', textAlign:'center' ,fontStyle:'italic',fontFamily:'cursive',fontWeight:'bold'}}> Our missions <h4 style={{color:'#ff5bbd',fontWeight:'bold'}}> for them !</h4> </h1>
  <Fade> <div className='cards_mission' style={{display:'flex',justifyContent:'space-around',flexWrap:'nowrap',marginTop:'2%'}}>
    <Card style={{ width: '18rem' }}>
    <svg 
    width="40" 
    height="40" 
    viewBox="0 0 16 16" 
    className="bi bi-circle-fill" 
    fill="#ff5bbd" 
    xmlns="http://www.w3.org/2000/svg" 
    style={{ position: 'absolute', top:-30, left: 0 }}
  >
    <circle cx="8" cy="8" r="8" />
    <text x="50%" y="50%" textAnchor="middle" fill="black" style={{ fontFamily: 'cursive', fontWeight: 'bold', fontStyle: 'italic',fontSize:'10px' }}>1</text>
  </svg>
      <Card.Body>
        <Card.Title style={{color:'#ff5bbd',fontStyle:'italic',fontFamily:'cursive',fontWeight:'bold',fontSize:'20px'}}>Fostering Pet Wellness through Veterinary Access</Card.Title>
        <Card.Text style={{fontStyle:'italic',fontFamily:'cursive',fontSize:'17px',fontWeight:'bold'}}>
        In the event of an emergency or for general inquiries, we strive to connect pet owners with reliable veterinarians who can offer assistance and guidance. By promoting responsible pet ownership and fostering strong bonds between pets and their caregivers, 
        we aim to create a happier and healthier world for all animals.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
    <svg 
    width="40" 
    height="40" 
    viewBox="0 0 16 16" 
    className="bi bi-circle-fill" 
    fill="#ff5bbd" 
    xmlns="http://www.w3.org/2000/svg" 
    style={{ position: 'absolute', top:-30, left: 0 }}
  >
    <circle cx="8" cy="8" r="8" />
    <text x="50%" y="50%" textAnchor="middle" fill="black" style={{ fontFamily: 'cursive', fontWeight: 'bold', fontStyle: 'italic',fontSize:'10px' }}>2</text>
  </svg>
      <Card.Body>
        <Card.Title style={{color:'#ff5bbd',fontStyle:'italic',fontFamily:'cursive',fontWeight:'bold',fontSize:'20px'}}>Reducing Euthanasia Rates</Card.Title>
        <Card.Text style={{fontStyle:'italic',fontFamily:'cursive',fontSize:'17px',fontWeight:'bold'}}>
        When you adopt an animal through Paaw, you save two lives. 
        The life of the animal you adopt and the life of the animal that won't be euthanized because 
        there will be space available for it in the shelter. That's good karma, isn't it?
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
    <svg 
    width="40" 
    height="40" 
    viewBox="0 0 16 16" 
    className="bi bi-circle-fill" 
    fill="#ff5bbd" 
    xmlns="http://www.w3.org/2000/svg" 
    style={{ position: 'absolute', top:-30, left: 0 }}
  >
    <circle cx="8" cy="8" r="8" />
    <text x="50%" y="50%" textAnchor="middle" fill="black" style={{ fontFamily: 'cursive', fontWeight: 'bold', fontStyle: 'italic',fontSize:'10px' }}>3</text>
  </svg>
      <Card.Body>
        <Card.Title style={{color:'#ff5bbd',fontStyle:'italic',fontFamily:'cursive',fontWeight:'bold',fontSize:'20px'}}>Find Your Future Best Friend</Card.Title>
        <Card.Text style={{fontStyle:'italic',fontFamily:'cursive',fontSize:'17px',fontWeight:'bold'}}>
        We have the perfect remedy for combating loneliness or bringing some cheer into your life! 
        An animal is simply a bundle of fur and love that will fill you with happiness. 
        But remember, you need to take good care of them, okay?
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    </Fade>
    </div>
        </div>
      
  )
}

export default Home
