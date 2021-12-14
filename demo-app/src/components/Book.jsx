import { Card, ListGroupItem, ListGroup, Container, Row, Col } from "react-bootstrap";
import books from '../data/fantasy.json'


const Book = ({book}) => {

    return (
    <Col className="  col-xs-12 col-sm-12  col-md-6 col-lg-4 mt-2">
    <Card  border="dark" key={book.asin} style={{ width: '18rem',height:"100%" }}  className="">
    <Card.Img className="img-fluid" variant="top" src={book.img} style={{width:'100%', height:400,objectFit:"cover"}}  />
    <Card.Body>
      <Card.Title style={{ textOverflow:'ellipsis', fontSize:'16px'}}>{book.title} </Card.Title>
      <Card.Text>
        {book.price}
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroupItem>{book.category}</ListGroupItem>
      
    </ListGroup>
    
  </Card>
  </Col>)

}

export default Book