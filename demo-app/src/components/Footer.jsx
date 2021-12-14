import { Row,Col , Container } from "react-bootstrap";

const Footer = () => (

    <Container fluid clasName="dark" style={{height:'100px'}}>
    <Row className="d-flex  mx-auto justify-content-between align-items-center">
      <Col className="">Contact</Col>
      <Col>About</Col>
      <Col>News</Col>
    </Row>
  </Container>

)










export default Footer;