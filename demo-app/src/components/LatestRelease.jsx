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
                            <Card  border="dark" key={book.asin} style={{ width: '18rem',height:"100%" }}  className="">
                            <Card.Img className="img-fluid" variant="top" src={book.img} style={{height:400,objectFit:"cover"}}  />
                            <Card.Body>
                              <Card.Title style={{ textOverflow:'ellipsis', fontSize:'16px'}}>{book.title} </Card.Title>
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