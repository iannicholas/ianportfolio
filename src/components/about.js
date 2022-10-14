import { Container, Image, Row, Col } from 'react-bootstrap';
import ian from '../images/Web_Developer_Inicholas3.png'

const col = {backgroundColor: 'black', textAlign: 'center', paddingTop: '50px', paddingBottom: '75px'};
const image = {width: '100%'};
// const p = {padding: 'auto'};

function IanAbout() {

  return (
    <Container fluid>
      <Row>
        <Col style={col}><h1 class="display-5 fw-bold lh-1 mb-3 text-white">Ian<br/>Nicholas</h1>
            <p class="lead text-white"  >I am a Full Stack Web Developer looking to help people full fill their dreams, lets build something together! I can put what you're thinking into code and as a team we can build something really cool! 
              I love building and executing large, scalable E-Commerce websites, small personal websites, as well as static landing pages. I use the MERN stack to create my websites. Specializing in JavaScript and building back end API's.</p></Col>
        <Col style={col}><Image style={image} src={ian} /></Col>
      </Row>
    </Container>
  );
}

export default IanAbout;