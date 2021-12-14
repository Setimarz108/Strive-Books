import { Row, Container, Col, btn } from "react-bootstrap"

const Jumbotron = () => (

<Container className="mt-5">
  <Row>
    <Col>
    <h1 className="display-4">Welcome To Strive Books</h1>
    <p class="lead">This is Library to showcase some cool Fantasy books.</p>
   <p>Pick a book by clicking the button.</p>
  <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    </Col>
  </Row>
</Container>

)


export default Jumbotron