import { Component } from "react";
import { Card, ListGroupItem, ListGroup, Container, Row, Col } from "react-bootstrap";
import books from '../data/fantasy.json'



class LatestRelease extends Component {

    render(){
            
              return(

                <Container className="mt-5"  >
                <Row>
                  
                     
                     {
                         books.map(book => (
                          <Col className="col-sm-12 col-md-4 mt-2">
                            <Card  border="dark" key={book.asin} style={{ width: '18rem' }}  className="">
                            <Card.Img variant="top" src={book.img}  style={{ width:'100%', maxHeight:'300px', }}/>
                            <Card.Body>
                              <Card.Title style={{ textOverflow:'""', fontSize:'16px'}}>{book.title} </Card.Title>
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
                          </Col>

                         ))
    
                    }


                  
                </Row>
              </Container>
              
              )
            
      
    }



}




export default LatestRelease