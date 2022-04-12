import * as React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../App.css";
import { Row, Container, Col } from "react-bootstrap";
import Card from 'react-bootstrap/Card';

interface IListsProps {}

const Lists: React.FC<IListsProps> = (props) => {
  return (
    <Container>
      <Form>
      <Card>
              <Card.Body>
      <Form.Label>Personal Information</Form.Label>
<hr/>
      <Form.Label>Personal Identification</Form.Label>

          <Card>
              <Card.Body>
        <Row>
          <Col>
            <Form.Group controlId="formBasicFirstName">
              <Form.Label>First Name*</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formBasicMiddleName">
              <Form.Label>Middle Name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formBasicLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="formBasicNickName">
              <Form.Label>Nick Name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="dob">
              <Form.Label>Date of Birth*</Form.Label>
              <Form.Control
                type="date"
                name="dob"
                placeholder="Date of Birth"
              />
            </Form.Group>
          </Col>
          <Col>
            <br />
            <br />
            {["radio"].map((type: any) => (
              <div key={`inline-${type}`} className="mb-3">
                Gender:
                <Form.Check
                  inline
                  label="Male"
                  name="group1"
                  type={type}
                  id={`inline-${type}-Male`}
                />
                <Form.Check
                  inline
                  label="Female"
                  name="group1"
                  type={type}
                  id={`inline-${type}-Female`}
                />
                <Form.Check
                  inline
                  label="Other"
                  type={type}
                  id={`inline-${type}-Other`}
                />
              </div>
            ))}
          </Col>
        </Row>
        <Row>
            <Col>
            
            </Col>
        </Row>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        </Card.Body>    
        </Card>
        </Card.Body>    
        </Card>
      </Form>
    </Container>
  );
};

export default Lists;
