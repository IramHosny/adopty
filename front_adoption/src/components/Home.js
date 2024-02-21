import React from 'react'

function Home() {
  return (
    <div className='home'>
   <h1 className='title' style={{ marginTop: '80px',marginLeft:'180px',fontSize:'125px'}}> Adopter <br/> un animal <span className="title1" style={{color:'#f72585', fontFamily:'cursive'}}> en refuge!</span></h1>
    <div className='container-img'>
        <div className="img_dog">
        <img alt="dog" src="https://paaw.co/_next/static/media/dog.2284bd84.png" style={{width:"227" ,height:"435" ,
        decoding:"async", loading:"lazy"}}/>
        </div>
        <div className="img_cat"><img alt="cat" src="https://paaw.co/_next/static/media/cat.669f88e0.png" style={{  width:"184", height:"310", decoding:"async",loading:"lazy" ,style:"color: transparent;"}}
      />
        </div>
        </div>
    <div className='home_animation' style={{backgroundColor:'#f72585', borderRadius:'50%', width:'500px',height:'250px',
    marginLeft:'-320px',transform:'rotate(15deg)',marginTop:'20px'}}> 
    <div className="z-10 absolute right-0 -top-8" style={{marginTop:'35px'}}>
  <div className="relative h-60 w-60 flex justify-center items-center">
    
    <div className="-rotate-12">
      <div className="uppercase text-th-neutral font-karmina font-bold text-xl text-center w-48" style={{fontWeight:'bold',color:'white',
      fontFamily:'cursive',fontSize:'25px',marginTop:'-20px'}}>Avez-vous<br/>déjà un animal ?</div>
      <div className="flex flex-row justify-center mt-3" style={{display:'flex',justifyContent:'space-around',
    margin:'20px',marginTop:'-10px'}}>
        <div className="rounded-xl bg-th-neutral w-20 mr-1 uppercase font-karmina text-xl font-bold flex justify-center py-1 cursor-pointer"><span className="pr-2" style={{fontWeight:'bold',color:'black',fontSize:'30px',fontFamily:'cursive',}}>Oui</span><span style={{fontSize:'30px'}}>😍</span></div>
        <div className="rounded-xl bg-th-neutral w-20 ml-1 uppercase font-karmina text-xl font-bold flex justify-center py-1 cursor-pointer"><span className="pr-2" style={{fontWeight:'bold',color:'black',fontSize:'30px',fontFamily:'cursive',}}>Non</span> <span style={{fontSize:'30px'}}>😢</span> </div>
      </div>
      <div className="text-center font-montserrat uppercase text-th-neutral font-bold mt-4" style={{fontSize: "16px",color:'white',
      fontWeight:'bold',paddingTop:'-10px'}}>Trouver le match parfait !</div>
    </div>
  </div>
</div></div>
        </div>
  )
}

export default Home