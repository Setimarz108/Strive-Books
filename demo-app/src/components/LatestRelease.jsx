import { Component } from "react";
import { Card, ListGroupItem, ListGroup, Container, Row, Col } from "react-bootstrap";
import books from '../data/fantasy.json'



class LatestRelease extends Component {

    render(){
            
              return(

                <Container className="mt-5">
                <Row>
                  <Col>
                     
                     {
                         books.map(book => (

                            <Card key={book.asin} style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={book.img} />
                            <Card.Body>
                              <Card.Title>{book.title}</Card.Title>
                              <Card.Text>
                                {book.price}
                              </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                              <ListGroupItem>{book.category}</ListGroupItem>
                              
                            </ListGroup>
                            <Card.Body>
                              <Card.Link href="#">Card Link</Card.Link>
                              <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                          </Card>


                         ))
    
                    }


                  </Col>
                </Row>
              </Container>
              
              )
            
      
    }



}




export default LatestRelease