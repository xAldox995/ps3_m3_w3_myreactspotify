import { Container, Row, Col, ProgressBar } from 'react-bootstrap';


const PlayerControls = () => {
  return (
    <div className="container-fluid fixed-bottom bg-container" style={{ backgroundColor: '#181818', paddingTop: '1rem', paddingBottom: '1rem' }}>
      <Container fluid>
        <Row className="justify-content-center align-items-center">
          <Col lg={10} className="offset-lg-2">
            <Row className="justify-content-center align-items-center">
              <Col xs={6} md={4} className="playerControls d-flex justify-content-around">
                <a href="#" className="text-light">
                  <i className="bi bi-shuffle" style={{ fontSize: '1.5rem' }}></i>
                </a>
                <a href="#" className="text-light">
                  <i className="bi bi-skip-backward-fill" style={{ fontSize: '1.5rem' }}></i>
                </a>
                <a href="#" className="text-light">
                  <i className="bi bi-play-fill" style={{ fontSize: '1.5rem' }}></i>
                </a>
                <a href="#" className="text-light">
                  <i className="bi bi-skip-forward-fill" style={{ fontSize: '1.5rem' }}></i>
                </a>
                <a href="#" className="text-light">
                  <i className="bi bi-arrow-repeat" style={{ fontSize: '1.5rem' }}></i>
                </a>
              </Col>
            </Row>
            <Row className="justify-content-center mt-2">
              <Col xs={12} md={8}>
                <ProgressBar variant="success" now={40} style={{ height: '0.5rem', backgroundColor: '#535353' }} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PlayerControls;


