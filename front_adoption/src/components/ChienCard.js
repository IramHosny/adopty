import React from 'react';


const ChienCard = ({el}) => {
  return (
    <div className='cards'>
    <div className="container_card">
      <div className="wrapper">
        <div > <img style={{maxwidth:'100px',minwidth:'100px', maxHeight:'200px',minHeight:'200px'}} className="banner-image" src={el.dog_url} alt="cat"/></div>
        <h1>{el.name}</h1>
        <p style={{maxwidth:'100px',minwidth:'100px', maxHeight:'200px',minHeight:'200px'}}>  {el.description}</p>
      </div>
      <div className="button-wrapper">
        <button className="btn outline"> MORE DETAILS</button>
        <button className="btn fill">ADOPT NOW</button>
      </div>
    </div>
    </div>
  );
}

export default ChienCard;
