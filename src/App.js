import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row } from 'react-bootstrap';
//import del header a la app
import Header from './Header.jsx';
import CardImagenes from './CardImagenes.jsx';
import Footer from './Footer.jsx';


function App() {
  return (
    <div className="App">
      <Header titulo="Galeria de imágenes con React"></Header>
      <Container>
        <Row>
          <Col>
            <CardImagenes imagen="https://cdn.pixabay.com/photo/2022/11/20/09/58/leaves-7603946__340.jpg" titulo="Hojas" descripcion="foto de hojas nevadas"></CardImagenes>
          </Col>
          <Col>
            <CardImagenes imagen="https://cdn.pixabay.com/photo/2022/01/13/07/06/house-6934544__340.jpg" titulo="CasaNieve" descripcion="foto de casa nevada"></CardImagenes>
          </Col>
          <Col>
            <CardImagenes imagen="https://cdn.pixabay.com/photo/2022/12/04/10/13/snow-7634083_640.jpg" titulo="Nieve" descripcion="foto de nieve"></CardImagenes>
          </Col>
        </Row>
      </Container>
      <Footer texto="Todos los derechos reservados @2022">

      </Footer>
    </div>
  );
}

export default App;
