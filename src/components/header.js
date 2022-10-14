import { Navbar, Nav } from 'react-bootstrap';
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";

const link = {color: 'red', fontSize: '30px', margin: '15px'}
const nav = {backgroundColor: 'black', justifyContent: 'right'}

function IanHeader() {

  return (
    <Navbar style={nav}>
          <Nav >
            <Nav.Link href="https://www.linkedin.com/in/ian-nicholas-developer/
" target="blank" style={link}><BsLinkedin /></Nav.Link>
            <Nav.Link href="https://github.com/iannicholas" target="blank" style={link}><BsGithub /></Nav.Link>
            <Nav.Link href="mailto:ian.nicholas.webdeveloper@gmail.com" target="blank" style={link}><FaEnvelope /></Nav.Link>
            <Nav.Link href="https://docs.google.com/document/d/1_doRDVq9zZmeb_vEt0z1FRzE0OCTECxpfiRpNM77CQI/edit?usp=sharing" download target="blank" style={link}><FaFileDownload /></Nav.Link>
          </Nav>
    </Navbar>
  );
}

export default IanHeader;