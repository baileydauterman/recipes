import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RecipesPage from './components/RecipesPage';

// import Posts from './components/Posts';
import NavigationBar from './components/NavigationBar';

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

        <RecipesPage />

        {/* <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/recipes">Recipes</Link> */}

      </div>
    </ThemeContext.Provider>
  );
}

export default App;
