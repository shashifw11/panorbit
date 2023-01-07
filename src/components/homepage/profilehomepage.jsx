import React from 'react'
import { useParams } from 'react-router-dom'
import {useState , useEffect} from "react" ;
import {Link} from "react-router-dom" ;  
import axios from "axios" ; 
import ProfileCard from './profileCard';
import "./profilehomepage.css" ; 

const Profilehomepage = () => {  
    const {id} = useParams() ; 
    const [profile , setProfile] = useState([]); 
    const [address , setAddress]  = useState([]);
    const [company , setCompany] = useState([]);
 
    //  console.log(profile) ; 
     console.log(address);
     console.log(company) ; 

    useEffect(()=>{
        getProfile();
    } , []) ;

    const getProfile = async ()=>{
        try{
           const response = await fetch(`https://panorbit.in/api/users.json`)
           const result = await response.json();
              const data = result.users ;  
              const user = data.filter((item)=>{
                  if(item.id==id){
                    setProfile(item) ;
                    setAddress(item.address) ; 
                    setCompany(item.company) ; 
                  }
            })
           
        }catch(err){
             console.log(err.message);
        }
    }
   
  return (
    <div className = "profile-container">
      <div className = "sidebar">
        <div className = "menu-bar">
          <p>Profile</p>
          <Link to = "posts"><p>Posts</p></Link>
          <Link to = "gallery"><p>Gallery</p></Link>
          <Link to = "todo"><p>ToDo</p></Link>
        </div>
      </div>

      <div className = "profile-bar">

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
     
      </div>
      
    </div>
  )
}

export default Profilehomepage
