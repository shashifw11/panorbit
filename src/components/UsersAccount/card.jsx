import Card from 'react-bootstrap/Card';
import "./card.css" ; 
import { Link } from 'react-router-dom';

function Cards({list}) {
  return (
    <Link className = "link" to = {`${list.id}`}><Card className = "container" >
      <Card.Img className = "img-box" variant="top" src= {list.profilepicture} />
      <Card.Body className = "body-box">
        <Card.Title>{list.name}</Card.Title>
       </Card.Body>
    </Card></Link>
  );
}

export default Cards;