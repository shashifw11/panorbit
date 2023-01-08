import React from 'react'
import { useParams } from 'react-router-dom'
import {useState , useEffect} from "react" ;
import {Link} from "react-router-dom" ;  
import "./profilehomepage.css" ; 
import Navbar from './navbar';
import Card from './card';
import Sidebar from './sidebar';
import {Route , Routes} from "react-router-dom"
import Gallery from '../catogery/gallery';
import Posts from '../catogery/posts';
import Todo from '../catogery/todo';
const Profilehomepage = () => {  
    const {id} = useParams() ; 
    const [profile , setProfile] = useState([]); 
    const [address , setAddress]  = useState([]);
    const [company , setCompany] = useState([]);
 
    //  console.log(profile) ; 
    //  console.log(address);
    //  console.log(company) ; 

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
          <Sidebar/>
      <div className = "profile-bar">
          <Navbar profile = {profile}/>   
          <Card profile={profile} company = {company} address={address}/>
        </div>
     </div>
  )
}

export default Profilehomepage
