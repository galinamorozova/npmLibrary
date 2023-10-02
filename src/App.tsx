import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
import ButtonL from "./components/ButtonL/ButtonL";
import Switch from "./components/Switch/Switch";



function App() {

  return (
    <div className="App">
        <div style={{margin: "40px", width: "200px"}}>
            <Switch type={"checkbox"} disabled={true}/>
        </div>
      <header className="App-header">
        <Switch type={"switch"}/>

        <span>
          <div>
              <Row className="border border-primary border-1"> Row
                <Col className="border border-primary border-2">1 of 3 Col</Col>
                <Col xs={6}>2 of 3 (wider) Col</Col>
                <Col>3 of 3 Col</Col>
              </Row>
              <Row>
                <Col>1 of 3</Col>
                <Col xs={5}>2 of 3 (wider)</Col>
                <Col>3 of 3</Col>
              </Row>
          </div>
          <Container className="bd-example">
            <ButtonL hover="off" iconType="none" type="primary" />
            <ButtonL hover="off" iconType="l" type="primary" />
            <ButtonL hover="off" iconType="r" type="primary" />
          </Container>


        </span>
      </header>
    </div>
  );
}

export default App;
