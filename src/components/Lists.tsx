import * as React from "react";
import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../App.css";
import { Row, Container, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { CgProfile } from "react-icons/cg";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import InputGroup from "react-bootstrap/InputGroup";
import SplitButton from "react-bootstrap/SplitButton";

interface IListsProps {} 
const Lists: React.FC<IListsProps> = (props) => {
  const [inputValue,setinputValue] = React.useState('')
  return (
    <Container>
      <Form>
        <Card>
          <Card.Body>
            {/* personal information card start*/}
            <Form.Label>
              <Card.Title>Personal Information</Card.Title>
            </Form.Label>
            {/* personal information card ends*/}
            <hr />
            {/* personal Identification card start*/}
            <Form.Label>Person Identification</Form.Label>
            {/* personal Identification card ends*/}
            <Card>
              <Card.Body>
                {/* personal Identification list start*/}
                <Row>
                  <Col>
                    <CgProfile /> <Button variant="outline-info">uplode</Button>{" "}
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group controlId="formBasicFirstName">
                      <Form.Label>First Name*</Form.Label>
                      <Form.Control className="uplist" type="text" value={inputValue} onChange={(e)=> setinputValue(e.target.value)}/>
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
                {/* person Identification list ends*/}
              </Card.Body>
            </Card>
            {/* person Contect list start*/}
            <Form.Label>Person Contect</Form.Label>
            <Card>
              <Card.Body>
                <Card>
                  <Card.Body>
                    <Row>
                      <Col lg={4}>
                        <Form.Group controlId="formBasicPhoneNumber">
                          <Form.Label>Phone Number*</Form.Label>
                          <Form.Control type="number" />
                        </Form.Group>
                      </Col>
                      <Col>
                        <br />
                        <DropdownButton id="dropdown-basic-button" title="Work">
                          <Dropdown.Item href="#/work">Work</Dropdown.Item>
                          <Dropdown.Item href="#/home">Home</Dropdown.Item>
                          <Dropdown.Item href="#/farmhouse">
                            Farmhouse
                          </Dropdown.Item>
                          <Dropdown.Item href="#/other">Other</Dropdown.Item>
                        </DropdownButton>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={4}>
                        <Form.Group controlId="formBasicPhoneNumber1">
                          <Form.Label></Form.Label>
                          <Form.Control type="number" />
                        </Form.Group>
                      </Col>
                      <Col>
                        <br />
                        <DropdownButton id="dropdown-basic-button" title="Work">
                          <Dropdown.Item href="#/work">Work</Dropdown.Item>
                          <Dropdown.Item href="#/home">Home</Dropdown.Item>
                          <Dropdown.Item href="#/farmhouse">
                            Farmhouse
                          </Dropdown.Item>
                          <Dropdown.Item href="#/other">Other</Dropdown.Item>
                        </DropdownButton>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
                <br />
                <Card>
                  <Card.Body>
                    <Row>
                      <Col lg={4}>
                        <Form.Group controlId="formBasicPhoneNumber">
                          <Form.Label>Email Address*</Form.Label>
                          <Form.Control type="number" />
                        </Form.Group>
                      </Col>
                      <Col>
                        <br />
                        <DropdownButton id="dropdown-basic-button" title="Work">
                          <Dropdown.Item href="#/work">Work</Dropdown.Item>
                          <Dropdown.Item href="#/home">Home</Dropdown.Item>
                          <Dropdown.Item href="#/farmhouse">
                            Farmhouse
                          </Dropdown.Item>
                          <Dropdown.Item href="#/other">Other</Dropdown.Item>
                        </DropdownButton>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={4}>
                        <Form.Group controlId="formBasicPhoneNumber1">
                          <Form.Label></Form.Label>
                          <Form.Control type="number" />
                        </Form.Group>
                      </Col>
                      <Col>
                        <br />
                        <DropdownButton id="dropdown-basic-button" title="Work">
                          <Dropdown.Item href="#/work">Work</Dropdown.Item>
                          <Dropdown.Item href="#/home">Home</Dropdown.Item>
                          <Dropdown.Item href="#/farmhouse">
                            Farmhouse
                          </Dropdown.Item>
                          <Dropdown.Item href="#/other">Other</Dropdown.Item>
                        </DropdownButton>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Card.Body>
            </Card>
            {/* person Contect list ends*/}
            {/* person Address list ends*/}
            <Form.Label>Person Address</Form.Label>
            <Card>
              <Card.Body>
                <Form.Label>Address*</Form.Label>

                <Card>
                  <Card.Body>
                    <Row>
                      <Col>
                        <Form.Group controlId="formBasicDoorNo">
                          <Form.Label>Door No.*</Form.Label>
                          <Form.Control type="text" />
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group controlId="formBasicSociety">
                          <Form.Label>Society/Appt*</Form.Label>
                          <Form.Control type="text" />
                        </Form.Group>
                      </Col>
                      <Col>
                        <br />
                        <DropdownButton id="dropdown-basic-button" title="Work">
                          <Dropdown.Item href="#/work">Work</Dropdown.Item>
                          <Dropdown.Item href="#/home">Home</Dropdown.Item>
                          <Dropdown.Item href="#/farmhouse">
                            Farmhouse
                          </Dropdown.Item>
                          <Dropdown.Item href="#/other">Other</Dropdown.Item>
                        </DropdownButton>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={4}>
                        <Form.Group controlId="formBasicFirstName">
                          <Form.Label>Landmark*</Form.Label>
                          <Form.Control type="text" />
                        </Form.Group>
                      </Col>
                      <Col lg={4}>
                        <Form.Label>City*</Form.Label>

                        <InputGroup className="drop-down">
                          <SplitButton
                            variant="outline-secondary"
                            title="Work"
                            id="segmented-button-dropdown-1"
                          >
                            <Dropdown.Item href="#">Work</Dropdown.Item>
                            <Dropdown.Item href="#">Home</Dropdown.Item>
                            <Dropdown.Item href="#">Farmhouse</Dropdown.Item>
                            <Dropdown.Item href="#">Other</Dropdown.Item>
                          </SplitButton>
                        </InputGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={4}>
                        <Form.Group controlId="formBasicState">
                          <Form.Label>State*</Form.Label>
                          <Form.Control type="text" />
                        </Form.Group>
                      </Col>
                      <Col lg={4}>
                        <Form.Label>Country*</Form.Label>

                        <InputGroup className="drop-down">
                          <SplitButton
                            variant="outline-secondary"
                            title="Work"
                            id="segmented-button-dropdown-1"
                          >
                            <Dropdown.Item href="#">Work</Dropdown.Item>
                            <Dropdown.Item href="#">Home</Dropdown.Item>
                            <Dropdown.Item href="#">Farmhouse</Dropdown.Item>
                            <Dropdown.Item href="#">Other</Dropdown.Item>
                          </SplitButton>
                        </InputGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={4}>
                        <Form.Group controlId="formBasicPincode">
                          <Form.Label>Pincode*</Form.Label>
                          <Form.Control type="text" />
                        </Form.Group>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>

                <Form.Label>Address 2*</Form.Label>

                <Card>
                  <Card.Body>
                    <Row>
                      <Col>
                        <Form.Group controlId="formBasicDoorNo">
                          <Form.Label>Door No.*</Form.Label>
                          <Form.Control type="text" />
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group controlId="formBasicSociety">
                          <Form.Label>Society/Appt*</Form.Label>
                          <Form.Control type="text" />
                        </Form.Group>
                      </Col>
                      <Col>
                        <br />
                        <DropdownButton id="dropdown-basic-button" title="Work">
                          <Dropdown.Item href="#/work">Work</Dropdown.Item>
                          <Dropdown.Item href="#/home">Home</Dropdown.Item>
                          <Dropdown.Item href="#/farmhouse">
                            Farmhouse
                          </Dropdown.Item>
                          <Dropdown.Item href="#/other">Other</Dropdown.Item>
                        </DropdownButton>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={4}>
                        <Form.Group controlId="formBasicFirstName">
                          <Form.Label>Landmark*</Form.Label>
                          <Form.Control type="text" />
                        </Form.Group>
                      </Col>
                      <Col lg={4}>
                        <Form.Label>City*</Form.Label>

                        <InputGroup className="drop-down">
                          <SplitButton
                            variant="outline-secondary"
                            title="Work"
                            id="segmented-button-dropdown-1"
                          >
                            <Dropdown.Item href="#">Work</Dropdown.Item>
                            <Dropdown.Item href="#">Home</Dropdown.Item>
                            <Dropdown.Item href="#">Farmhouse</Dropdown.Item>
                            <Dropdown.Item href="#">Other</Dropdown.Item>
                          </SplitButton>
                        </InputGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={4}>
                        <Form.Group controlId="formBasicState">
                          <Form.Label>State*</Form.Label>
                          <Form.Control type="text" />
                        </Form.Group>
                      </Col>
                      <Col lg={4}>
                        <Form.Label>Country*</Form.Label>

                        <InputGroup
                          className="drop-down"
                          id="dropdown-basic-button"
                          title="Work"
                        >
                          <SplitButton
                            variant="outline-secondary"
                            title="Work"
                            id="segmented-button-dropdown-1"
                          >
                            <Dropdown.Item href="#">Work</Dropdown.Item>
                            <Dropdown.Item href="#">Home</Dropdown.Item>
                            <Dropdown.Item href="#">Farmhouse</Dropdown.Item>
                            <Dropdown.Item href="#">Other</Dropdown.Item>
                          </SplitButton>
                        </InputGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={4}>
                        <Form.Group controlId="formBasicPincode">
                          <Form.Label>Pincode*</Form.Label>
                          <Form.Control type="text" />
                        </Form.Group>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Card.Body>
            </Card>

            <Col className="che-btn">
              <br />
              <Button variant="success" type="submit" onSubmit={() => handleOnSubmit()}>
                Submit
              </Button>
              <Button variant="primary" type="submit">
                Reset
              </Button>
            </Col>
          </Card.Body>
        </Card>
      </Form>
    </Container>
  );
};

export default Lists;
