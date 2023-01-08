import React from 'react'

const Ptag = ({left,profile}) => {
  return (
    <p  className = "profile-text">
                       <span className = "profile-text-left" >{left} :</span>
                       <span className = "profile-text-right">{profile}</span>
              </p>         
  )
}

export default Ptag
