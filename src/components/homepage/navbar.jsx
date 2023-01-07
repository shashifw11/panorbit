import React from 'react'

const Navbar = ({profile}) => {
  return (
    <div className = "Navbar">
          <div>Profile</div>
          <div className = "image-bar">
             <div className = "image-box">
               <img className = "image" src = {profile.profilepicture} alt = "img"/>
             </div>
             <div className = "text-box">
              <p>{profile.name}</p>
             </div>
          </div>
        </div>
  )
}

export default Navbar
