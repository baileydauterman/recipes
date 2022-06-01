import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import recipes from "./components/food.json";
import { Convert } from "./components/RecipeParser";
import Recipe from "./components/Recipe"

// import Posts from './components/Posts';
import NavigationBar from './components/NavigationBar';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Container from 'react-bootstrap/Container';

export const ThemeContext = React.createContext('dark');


function App() {
  const [theme, setTheme] = React.useState('dark');
  const [query, setQuery] = React.useState('');

  const parseRecipes = Convert.toRecipe(JSON.stringify(recipes));

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  return (
    <ThemeContext.Provider value="dark">
      <div className="App" id="dark">
        <NavigationBar />

        <Container style={{ padding: "1% 0 1% 0" }}>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={event => setQuery(event.target.value)}
            />
            <Button variant="outline-primary">Search</Button>
          </Form>
        </Container>

        <Container fluid>
          {parseRecipes.filter(recipe => {
            if (query === '') {
              return recipe
            } else if (recipe.title.toLowerCase().includes(query.toLowerCase())) {
              return recipe
            } else if (recipe.ingredients.toString().toLowerCase().includes(query.toLowerCase())) {
              return recipe
            }
          }).map((recipe) => (
            <Col>
              <Recipe recipe={recipe} />
            </Col>
          ))}
        </Container>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
