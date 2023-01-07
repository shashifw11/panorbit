import React from 'react'
import {Link} from "react-router-dom" ; 
const Sidebar = () => {
  return (
    <div className = "sidebar">
        <div className = "menu-bar">
          <p>Profile</p>
          <Link to = "posts"><p>Posts</p></Link>
          <Link to = "gallery"><p>Gallery</p></Link>
          <Link to = "todo"><p>ToDo</p></Link>
        </div>
      </div>
  )
}

export default Sidebar
