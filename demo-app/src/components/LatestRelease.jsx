import { Component } from "react";
import Book from "./Book";
import { Container, Row } from "react-bootstrap";
import books from '../data/fantasy.json'



class LatestRelease extends Component {

    render(){
            
              return(

                <Container className="mt-5"  >
                <Row>
                  
                     
                     {
                         books.map(book => (
                             <Book book = {book}/>
                         ))
    
                    }


                  
                </Row>
              </Container>
              
              )
            
      
    }



}




export default LatestRelease