import React from 'react'

const Card = ({profile,company,address}) => {
  return (
    <div className = "card-section">
           <div className = "card-profile-section-left">
            <div className = "profile-pic">
              <img className = "image" src = {profile.profilepicture}/>
             
            </div>
            <div className = "profile-details">
            <p>{profile.name}</p>
               <p>Username :{profile.username}</p>
               <p>e-mail   :{profile.email}</p>
               <p>Phone    :{profile.phone}</p>
               <p>Website  :{profile.website}</p>
            </div>
            <div className = "company-details">
              <p>Company </p>
            <p>Name : {company.name}</p> 
            <p>catchphrase :{company.catchPhrase}</p>
             <p>bs : {company.bs}</p>
            </div>
           </div>
           <div className = "card-profile-section-right">
            <div className = "right-box">
            <div className = "address-box">
              <p>Addresh : {}</p>
              <p>Street :{address.street}</p>
              <p>Suite :{address.suite}</p>
              <p>City : {address.city}</p>
              <p>Zipcode : {address.zipcode}</p>
            </div>
            <div></div>
            </div>
           
           </div>
        </div>
  )
}

export default Card
