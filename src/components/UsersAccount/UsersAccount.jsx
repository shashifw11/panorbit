import "./userAccount.css" ; 
import {useState , useEffect} from "react" ; 
import { Scrollbars } from 'react-custom-scrollbars-2';
import Cards from "./card";
import {link} from "react-router-dom" ; 


const UsersAccount = ()=>{ 
  
  const [list , setList] = useState([]) ; 
   //  console.log(list) ; 
  
  useEffect(()=>{
     getData()
  } , []) ; 

  const getData = async()=>{
     try{
        const response = await fetch("https://panorbit.in/api/users.json") ; 
        const result = await response.json() ; 
                setList(result.users);
            
     }catch(err){
           console.log(err.message);
     }
  }


     return ( 
     
     <div className = "main-container">
         <div className = "header">Select an account</div>
        
         <div className = "list-box">
         <Scrollbars >
        {list.map((item)=>{
             return <Cards key = {item.id}  list = {item}/>
          })}
          </Scrollbars>
          </div>
          
        
        </div> 
     )
}


export default UsersAccount
