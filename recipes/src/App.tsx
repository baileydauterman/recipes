import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// import Posts from './components/Posts';
import FoodRecipe from './components/FoodRecipes';
import NavigationBar from './components/NavigationBar';
import SearchBar from './components/SearchBar';
import Recipes from './components/Recipes';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <NavigationBar />

      <Container style={{padding:"1% 0 1% 0"}}>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <SearchBar />
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col md={{ span: 10, offset: 1 }}>
            <Recipes />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
