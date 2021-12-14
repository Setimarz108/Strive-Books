import { Row, Container, Col, btn } from "react-bootstrap"
import './Jumbotron.css'

const Jumbotron = () => (

<Container fluid className="">
  <Row className="Jumbotron text-white">
    <Col>
    <h1 className="display-2 mt-3">Welcome To Strive Books</h1>
    <p class="lead mt-3">This is Library to showcase some cool Fantasy books.</p>
   <p>Pick a book by clicking the button.</p>
  <a class="btn btn-primary btn-lg mt-3" href="#" role="button">Learn more</a>
    </Col>
  </Row>
</Container>

)


export default Jumbotron