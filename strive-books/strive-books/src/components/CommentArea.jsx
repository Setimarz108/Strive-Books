import { Component } from "react";
import SingleComment from "./SingleComment";
import CommentList from "./CommentList";



class CommentArea extends Component {


state= {
    comments: []
}
    
    fetchComments = async () => {
                            
        try{
             let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
                headers: {
                    
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYjZlNjRjZmY1ZjAwMTU5MGJkYzciLCJpYXQiOjE2Mzk2NTkxMTgsImV4cCI6MTY0MDg2ODcxOH0.70uyH3oyEUJqmbWG32anr5mOBaf9K9Zmp6pA2A_0daU"
                }
                })
            
             console.log('Response', response)

             if(response.ok){

                let commentsArray = await response.json()
                this.setState({comments: commentsArray})
                console.log('Data',commentsArray)

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

    render(){

        return(

            <CommentList />

        )
    }
}


export default CommentArea