import { Component } from "react";


class SingleComment extends Component {

    render(){


        return(
            <>
            <li>{this.props.comment.rate} </li>
            <li>{this.props.comment.comment} </li>
             </>

        )
    }

}


export default  SingleComment