import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// import Posts from './components/Posts';
import NavigationBar from './components/NavigationBar';
import RecipesPage from './components/RecipesPage';
import SpeedDial from './components/SpeedDial';

import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';


function App() {
  const theme = useTheme();
  const [query, setQuery] = React.useState("");


  return (
    <div className="App">
      <NavigationBar setQuery={setQuery} />

      <RecipesPage query={query} />


      {/* <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/posts">Posts</Link>
      <Link to="/recipes">Recipes</Link> */}
    </div>
  );
}

export default App;
