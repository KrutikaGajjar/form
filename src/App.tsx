import React, {useState} from 'react';
import Lists from "./components/Lists"; 
import './App.css';
import { Col, Container, Row } from 'react-bootstrap';

function App() {
  return (
    <>
     <Container className="mt-3">
       <Row>
          <Col>
          <Lists/>
          </Col>
       </Row>
     </Container>
    </>
  );
}

export default App;
