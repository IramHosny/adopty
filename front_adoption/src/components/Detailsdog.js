import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import AddadoptDog from './AddadoptDog';


function Detailsdog () {
    const params=useParams();
    const dogs= useSelector((state)=>state.dog?.doglist);
    const dog = dogs?.filter((el)=> el?._id === params._id)[0]
console.log(dogs)
  return (
    <div className='details' style={{ marginTop: '5%', marginLeft: '2%', display: 'flex', alignItems: 'center', alignContent: 'flex-start' }}>
    <img src={dog?.image} alt="" style={{ maxWidth: '500px', minWidth: '500px', maxHeight: '500px', minHeight: '500px', borderRadius: '5%' }} />
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' , marginLeft: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <h4 className='h1_detail' style={{ color: 'black', marginRight: '20px' }}> <span style={{color: '#ff5bbd'}}> Name: </span> {dog?.name}  </h4>
            <h4 className='h1_detail' style={{ color: 'black', marginRight: '20px' }}> <span style={{color: '#ff5bbd'}}> ,Breed: </span> {dog?.breed} , </h4>
            <h4 className='h1_detail' style={{ color: 'black' }}> <span style={{color: '#ff5bbd'}}> Age: </span> {dog?.age}</h4>
        </div>
        <p style={{ maxWidth: '800px', minWidth: '800px', maxHeight: '400px', minHeight: '400px', fontStyle: 'italic', fontFamily: 'cursive', fontSize: '20px', fontWeight: 'bold' }} className='p_detail'> {dog?.description}
        <div style={{marginTop: '2%' }} className='add-dog-container'>
                        <AddadoptDog dog={dog}/>
                    </div></p>
        
    </div>
    
</div>

  )
}

export default  Detailsdog



