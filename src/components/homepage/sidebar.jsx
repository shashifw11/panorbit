import React from 'react'
import {Link} from "react-router-dom" ; 
const Sidebar = () => {
  return (
    <div className = "sidebar">
        <div className = "menu-bar">
          <p>Profile</p>
          <Link style = {{textDecoration :"none"}} to = "posts"><p>Posts</p></Link>
          <Link style = {{textDecoration :"none"}} to = "gallery"><p>Gallery</p></Link>
          <Link style = {{textDecoration :"none"}} to = "todo"><p>ToDo</p></Link>
        </div>
      </div>
  )
}

export default Sidebar
