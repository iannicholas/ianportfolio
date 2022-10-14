import { Container, Image, Row, Col } from 'react-bootstrap';
import ctr from '../images/2ctr.png';
import esbelta from '../images/sbelta_img.png';
// import lv from '../images/3-lv.png';
import encanto from '../images/Encanto_.png';

const col = {backgroundColor: 'black', textAlign: 'center', paddingTop: '50px', paddingBottom: '75px'};
const image = {width: '100%'}
const a = {color: 'red'};
const white = {color:'white'};

function IanBody() {

  return (
    <Container fluid>
      <Row>
      <Col style={col}><Image style={image} src={encanto} /></Col>
        <Col style={col}><h1 class="display-5 fw-bold lh-1 mb-3 text-white">Encanto Flowers</h1>
            <p class="lead text-white">Need flowers delivered in the greater San Diego area? Look no further Encanto Flowers can deliver all your needs. This is a Full Stack web application. We used MERN, Bootstrap for React, bcrypt, JSON web token, Apollo, GraphQL, Stripe, and UUID.</p>
            <a
                  href="https://encanto-flowers.herokuapp.com/"
                  target="blank" class="text-decoration-none" style={a}
                  >EncantoFlowers  </a
                ><a style={white}>or</a>
                <a
                  href="https://github.com/encantoflowers/encanto-flowers"
                  target="blank" class="text-decoration-none" style={a}
                  > #github</a
                ></Col>
        
      </Row>
      <Row>
        <Col style={col}><h1 class="display-5 fw-bold lh-1 mb-3 text-white">Call Tax Relief</h1>
            <p class="lead text-white">Find yourself in Tax trouble, look no further Call Tax Relief. Built on WordPress using Divi Theme Builder.</p>
            
            <a href="https://www.calltaxrelief.com/" target="blank" class="text-decoration-none" style={a}
                  >Call Tax Relief</a
                ></Col>
        <Col style={col}><Image style={image} src={ctr} /></Col>
      </Row>
      <Row>
        <Col style={col}><Image style={image} src={esbelta} /></Col>
        <Col style={col}><h1 class="display-5 fw-bold lh-1 mb-3 text-white">Esbelta</h1>
            <p class="lead text-white">Beauty starts within, that is why Esbelta specializes in
              creating medical and beauty treatments focused on rejuvenation. Built using a paid theme using custom HTML,CSS, and JavaScript.</p>
              <a href="http://www.esbelta.com.mx" target="blank" class="text-decoration-none" style={a}>Esbelta  </a><a style={white}>or</a>
                <a
                  href="https://github.com/iannicholas/Esbelta.git"
                  target="blank" class="text-decoration-none" style={a}
                  > #github</a
                ></Col>
      </Row>
      
      {/* <Row>
        <Col style={col}><Image style={image} src={lv} /></Col>
        <Col style={col}><h1 class="display-5 fw-bold lh-1 mb-3 text-white">Laboratorio Visual</h1>
            <p class="lead text-white">Laboratorio Visual is a Digital Agency that specializes in
              tailored marketing services. Built using paid theme using custom HTML,CSS, and JavaScript.</p>
              <a href="http://laboratoriovisual.com/" target="blank" class="text-decoration-none"
                  >Laboratorio Visual</a
                >
                <a
                  href="https://github.com/iannicholas/LaboratorioVisual.git"
                  target="blank" class="text-decoration-none"
                  >#github</a
                ></Col>
      </Row> */}
      
    </Container>
  );
}

export default IanBody;