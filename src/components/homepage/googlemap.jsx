import React from 'react'

import {useState , useEffect}  from "react" ; 

const Googlemap = ({address}) => {
        console.log(address) ; 
  
  const [location , setLocation] = useState("") ;  

  

    useEffect(()=>{
         getLocation()  
    },[]);
   
  const getLocation = () =>{ 
        setLocation(address.city);
       console.log( "2" , url);
        
     }
    //  console.log("1", url);
    const url = `https://maps.google.com/maps?q=${location}&t=&z=13&ie=UTF8&iwloc=&output=embed` 
     
   
            
        if(location != "" || location != undefined){
          return (
            <div  className = "map-box">
                  <iframe width="100%" 
                  height="290px" 
                  id="gmap_canvas" 
                  src={url} 
                  frameborder="0" 
                  
                  scrolling="no" 
                  marginheight="0" 
                  marginwidth="0"
                  >
                    </iframe>
            </div>
          )
        }
 
}

export default Googlemap
