import React from 'react';
import { createContext } from 'react';
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

export const ThemeContext = React.createContext('dark');

function App() {
  const [theme, setTheme] = React.useState('dark');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  
  return (
    <ThemeContext.Provider value="dark">
      <div className="App" id="dark">
        <NavigationBar />

        <Container style={{ padding: "1% 0 1% 0" }}>
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
    </ThemeContext.Provider>
  );
}

export default App;
