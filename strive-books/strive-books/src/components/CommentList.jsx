import { Component } from "react";
import SingleComment from "./SingleComment";

class CommentList extends Component {


    render(){


        return(

             <ul> 
                 {this.props.commentsArray && this.props.commentsArray.map( comment => <SingleComment key={comment._id}   comment={comment}/>)}
             </ul>

        )
    }
}

export default CommentList