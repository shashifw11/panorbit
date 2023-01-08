import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import {Link} from "react-router-dom" ; 

function Popcard({profile}) {
  return (
    <>
      {[ 'bottom'].map((placement) => (
        <OverlayTrigger 
          trigger="click"
          key={placement}
          placement={placement}
          overlay={
            <Popover className = "popup" id={`popover-positioned-${placement}`}>
              <Popover.Header className = "popupheader" as="h3">
                <img className = "image" src = {profile.profilepicture}/></Popover.Header>
              <p className = "popName">{profile.name}</p>
              <p className = "popemail">{profile.email}</p>
              <Popover.Body>
              <Link to = "/"><button className = "signout-button">Sign out</button></Link>
              </Popover.Body>
              
            </Popover>
          }
        >
          <Button className = "popup-button" variant="secondary">{profile.name}</Button>
         
        </OverlayTrigger>
        
      ))} 
     
    </>
  );
}

export default Popcard;