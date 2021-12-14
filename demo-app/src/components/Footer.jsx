import { Row,Col , Container } from "react-bootstrap";

const Footer = () => (

    <Container fluid style={{height:'80px', backgroundColor:'#040606'}}className="d-flex  
    mx-auto justify-content-center align-items-center px-auto mt-3">
    <Row className="text-white">
      <Col className="ml-auto text-white">Contact</Col>
      <Col>About</Col>
      <Col>News</Col>
    </Row>
  </Container>

)










export default Footer;