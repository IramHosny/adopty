import React from 'react';
import './CSS/Cards.css';

const ChienCard = ({dog}) => {
  return (
    <div>
    <>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&family=Roboto:wght@300&display=swap"
    rel="stylesheet"
  />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
  />

  <>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&family=Roboto:wght@300&display=swap"
    rel="stylesheet"
  />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
  />
  <main>
    
      <div className="card_pets" >
        <img
          src={dog?.image}
          alt=""
        />
        <div className="card-content" style={{backgroundImage: 'linear-gradient(180deg, hsla(0, 0%, 0%, 0) 0%, hsla(0, 0%, 0%, 0.3) 10%, hsl(0, 0%, 0%) 100%)'}} >
          <h2 style={{fontWeight:'bold'}}>{dog?.name}</h2>
          <p style={{fontStyle:'italic',fontFamily:'cursive',fontSize:'50px',fontWeight:'bold'}}> 
          <h4>{dog?.breed}</h4>
          <h4>{dog?.sexe}</h4>
          <h4>{dog?.age}</h4>
          </p>
          <a style={{fontWeight:'bold',color:'white'}} href="#" className="button">
            Find out more
            <span className="material-symbols-outlined"> more </span>
          </a>
        </div>
      </div>
    
  </main>
</>

  
</>

    </div>
  );
}

export default ChienCard;
