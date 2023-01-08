import React from 'react'
import Ptag from './detailsPtag'
import Googlemap from './googlemap'

const Card = ({ profile, company, address }) => {

  return (
    <div className="card-section">
      <div className="card-profile-section-left">
        <div className="profile-pic">
          <img className="image" src={profile.profilepicture} />

        </div>
        <div className="profile-details">

          <p>{profile.name}</p>
          <Ptag left={"UserName"} profile={profile.username} />
          <Ptag left={"e-mail"} profile={profile.email} />
          <Ptag left={"Phone"} profile={profile.phone} />
          <Ptag left={"Website"} profile={profile.website} />
        </div>
        <div className="company-details">
          <p>Company </p>
          <Ptag left={"Name"} profile={company.name} />
          <Ptag left={"catchphrase"} profile={company.catchPhrase} />
          <Ptag left={"bs"} profile={company.bs} />
        </div>
      </div>
      <div className="card-profile-section-right">
        <div className="right-box">
          <div className="address-box">
            <p>Addresh </p>
            <Ptag left={"Street"} profile={address.street} />
            <Ptag left={"Suite"} profile={address.suite} />
            <Ptag left={"City"} profile={address.city} />
            <Ptag left={"Zipcode"} profile={address.zipcode} />

          </div>
          <div className="graph">

            <Googlemap address={address} />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Card
