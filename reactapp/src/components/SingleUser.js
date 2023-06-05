import React, { useState } from 'react'
import './SingleUser.css';

const SingleUser = ({ usera,userb,deleteItemProp }) => {


  const [isVisible, setIsVisible] = useState(true);
  


  const removeItem=(userName)=>{
    deleteItemProp(userName)
  }

  return (
    
    <div className='single-user'>
      <i  className="fa-sharp fa-solid fa-trash delete-icon" onClick={()=>removeItem(usera.name.first)} ></i>
      <img src={usera.picture.large} alt='' />
      <div className='user-info'>
        <h3>
          {usera.name.first} {usera.name.last}
        </h3>
        <p className='user-mail'>Email: {usera.email}</p>
        {
          isVisible?         <p className='user-location'>
          {userb.location.country} | {userb.location.city}
        </p>:null
        }

        <div className='user-location'>
        <button className='btn btn-success 'onClick={() => setIsVisible(isVisible?false:true)} >Say Hı !
        <i style={{marginLeft:'10px'}} className="fa-solid fa-bolt"></i>
        </button>
        <button style={{marginLeft:'20px'}} className='btn btn-danger'>
          Pass
        
        </button>
        </div>

      </div>
      
    </div>
  )
}

export default SingleUser