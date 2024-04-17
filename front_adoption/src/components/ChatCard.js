import React from 'react';
import './CSS/Cards.css';


const ChatCard = ({cat}) => {
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
    
      <div className="card_pets">
        <img
          src={cat?.image}
          alt=""
        />
        <div className="card-content">
          <div className='card-content-pets'>
        <h2 className='card-title' style={{fontWeight:'bold'}}>{cat?.name}</h2>
         <p style={{fontStyle:'italic',fontFamily:'cursive',fontSize:'50px',fontWeight:'bold'}}> 
          <h4>{cat?.breed}</h4>
          <h4>{cat?.sexe}</h4>
          <h4>{cat?.age}</h4>
          </p>

          <a href="#" className="button">
            Find out more
            <span className="material-symbols-outlined"> more </span>
          </a>
          </div>
        </div>
      </div>
    
  </main>
</>

  
</>

    </div>
  );
}

export default ChatCard;
