import { Container, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import { Component } from 'react'
import CommentArea from './CommentArea'



class SingleBook extends Component{
    state= {
        selected: false,
        comments: [],
        displayComments: false

    }
                 
    render(){
        return(
            <>
            { this.state.displayComments && <CommentArea/>  }
            
            <Container>
                <Row>{
                        <Card style={{ width: '12rem' }}>
                            <Card.Img 
                            variant="top" 
                            src={this.props.book.img}
                            onClick={()=> {this.setState({selected:!this.state.selected})}}
                            style={{border:`2px solid ${this.state.selected?"red":"none"}`}}
                            />
                            <Card.Body>
                                <Card.Title>{this.props.book.category}</Card.Title>
                                <Card.Text>
                                {this.props.book.title}
                                </Card.Text>
                            </Card.Body>
                        </Card>        
                   
                    }</Row>
            </Container>
            <CommentArea comments={this.state.comments}></CommentArea>
            </>
            
            
        )
    }
     

    
    fetchComments = async () => {
                            
        try{
             let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.book.asin, {
                headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYjZlNjRjZmY1ZjAwMTU5MGJkYzciLCJpYXQiOjE2Mzk2NTkxMTgsImV4cCI6MTY0MDg2ODcxOH0.70uyH3oyEUJqmbWG32anr5mOBaf9K9Zmp6pA2A_0daU"
                }
                })
            
             console.log('Response', response)

             if(response.ok){

                let comments = await response.json()
                this.setState({comments: comments})
                console.log('Data',comments)

             }else{ 
            console.log('something is wrong')

            }

        } catch(error){
            console.log(error)
        }
    
   }

   componentDidMount = async () => {

    await this.fetchComments()
   }

   }
export default SingleBook