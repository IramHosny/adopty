import React from 'react';


const ChienCard = ({el}) => {
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
          src={el.dog_url}
          alt=""
        />
        <div className="card-content" style={{backgroundImage: 'linear-gradient(180deg, hsla(0, 0%, 0%, 0) 0%, hsla(0, 0%, 0%, 0.3) 10%, hsl(0, 0%, 0%) 100%)'}} >
          <h2 style={{fontWeight:'bold'}}>{el.name}</h2>
          <p style={{fontStyle:'italic',fontFamily:'cursive',fontSize:'50px',fontWeight:'bold'}}> 
          <h4>{el.Race}</h4>
          <h4>{el.Sexe}</h4>
          <h4>{el.Àge}</h4>
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
