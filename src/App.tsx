import React, { useState, useEffect } from "react";
import Lists from "./components/Lists";
import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import Loader from "./components/Loader";
import Uplist from "./components/Uplist";
function App() {
  const [list, setList] = useState<Uplist[]>([]);
  const [error, setError] = useState({});

  interface Uplist {
    firstName: string;
  }

  const handleOnSubmit = (value: string) => {
    setList([...list, { firstName: value }]);
  };
  useEffect(() => {
    fetch("http://localhost:3000/api/person")
      .then((Response) => Response.json())
      .then((res) => setList(res))
      .catch((err) => setError(err));
  }, []);
  return (
    <div className="App">
      {list.length > 0 ? (
        list.map((uplist: Uplist) => <Uplist uplist={uplist} />)
      ) : (
        <Loader />
      )}

      <Container className="mt-3">
        <Row>
          <Col>
            <Lists handleOnSubmit={handleOnSubmit} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
