import React from 'react';
import './CSS/Vete.css';
import './CSS/Cards_vete.css';
const VeteCard = ({veterinarian}) => {
  return (
    <div>
  
  <div className="colombia_card">
  <img
    className="colombia_card__background"
    src={veterinarian?.image}
    alt=" "
     style={{maxWidth:'1920',minWidth:'1920',
    maxHeightheight:'2193', minHeighth:'2193'}}
  />
  <div className="colombia_card__content | flow">
    <div className="colombia_card__content--container | flow">
      <h2 className="colombia_card__title">{veterinarian?.fullname}</h2>
      <p className="colombia_card__description">
        {veterinarian?.description}
        <h5> <i className="fas fa-map-marker-alt" /> {veterinarian?.adress}</h5>
        <h4>{veterinarian?.phonenumber}</h4>
      </p>
    </div>
  </div>
</div>

    </div>
    
  );
}

export default VeteCard;