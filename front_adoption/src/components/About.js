import React from 'react'


function About() {
  return (
    
    <div className='about_container' style={{marginTop:"40px"}}>
        <h1  style={{ color:'#f72585',textAlign:'center'}}> A propos de nous  </h1> <div className='about' style={{ borderRadius:'50%', height:'500px'}}> 
        <p style={{fontStyle:'italic', color:'black',padding:"100px",fontWeight:'bold'}}> Bienvenue sur Adopty votre plateforme dédiée à l'adoption responsable d'animaux de compagnie, avec une attention particulière portée aux chiens et aux chats.
Chez nous, nous sommes profondément engagés à faciliter des liens durables entre les humains et nos amis à quatre pattes. 
Notre objectif premier est de mettre en relation des animaux aimants et fiables avec des familles
 prêtes à leur offrir un foyer chaleureux et attentionné.
 notre sélection variée de chiens et de chats attendent avec impatience de trouver leur foyer pour toujours. 
 Chaque animal disponible à l'adoption est soigneusement évalué, vacciné et prêt à être aimé.</p>
  <div className='img_about'><img alt="dog" src="/img1.png"/> </div>
  </div> 
  <div className='service_container' style={{marginTop:"20px"}}>
  <h1  style={{ color:'#f72585', textAlign:'center', paddingTop:"30px"}}> Nos Services </h1>
  <div className='service' style={{  borderRadius:'50%', height:'500px'}}> 
  <p className='para_service' style={{fontStyle:'italic', color:'black',padding:"100px", fontWeight:'bold'}}>En plus de faciliter l'adoption, nous mettons également à votre disposition des informations sur les vétérinaires disponibles dans votre ville. Cela vous permet de prendre soin de la santé et du bien-être de votre animal dès le début de votre aventure ensemble. <br/>
Nous comprenons que la perte d'un animal de compagnie peut être dévastatrice, c'est pourquoi nous avons également mis en place un forum dédié où vous pouvez partager des statuts en cas de perte de votre chat ou de votre chien. Ce forum est un lieu de soutien et d'entraide où vous pouvez recevoir du réconfort et des conseils de la part d'autres membres de notre communauté
</p>
<div className='img_service'>
<img alt="dog" src="/img2.png"/> </div> </div>
    </div>
    </div>
  )
}

export default About