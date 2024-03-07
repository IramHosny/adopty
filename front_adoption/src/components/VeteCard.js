import React from 'react';
import './Vete.css';
const VeteCard = ({el}) => {
  return (
    <div>
        <article class="cta">
        <div > <img style={{maxwidth:'80px',minwidth:'80px', maxHeight:'200px',minHeight:'200px'}} className="image" src={el.image} alt="veterinarian"/>
         <div style={{marginTop:'15px',  marginLeft:'40px',width:'300px'}}><p style={{fontSize: '1.4rem'}} >{el.adresse}</p>
        <p style={{fontSize: '1.4rem'}}>{el.numéro}</p></div></div>
	<div class="cta__text-column">
		<h2>{el.name}</h2>
		<p style={{maxwidth:'100px',minwidth:'100px', maxHeight:'200px',minHeight:'200px',marginLeft:'-20px'}}>{el.description}</p>
		
	</div>
</article>
    </div>
    
  );
}

export default VeteCard;