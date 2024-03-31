import React from 'react';
import './CSS/Vete.css';
import './CSS/Cards_vete.css';
const VeteCard = ({el}) => {
  return (
    <div>
  
  <div className="colombia_card">
  <img
    className="colombia_card__background"
    src={el.image}
    alt=" "
     style={{maxWidth:'1920',minWidth:'1920',
    maxHeightheight:'2193', minHeighth:'2193'}}
  />
  <div className="colombia_card__content | flow">
    <div className="colombia_card__content--container | flow">
      <h2 className="colombia_card__title">{el.name}</h2>
      <p className="colombia_card__description">
        {el.description}
        <h3>{el.adresse}</h3>
        <h4>{el.numéro}</h4>
      </p>
    </div>
  </div>
</div>

    </div>
    
  );
}

export default VeteCard;