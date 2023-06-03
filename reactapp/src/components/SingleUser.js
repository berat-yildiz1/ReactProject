import React from 'react'
import './SingleUser.css';

const SingleUser = ({ usera,userb }) => {
  return (
    <div className='single-user'>
      <img src={usera.picture.large} alt='' />
      <div className='user-info'>
        <h3>
          {usera.name.first} {usera.name.last}
        </h3>
        <p className='user-mail'>Email: {usera.email}</p>
        <p className='user-location'>
          {userb.location.country} | {userb.location.city}
        </p>
        <div className='user-location'>
        <button className='btn btn-success'>Say Hı !
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