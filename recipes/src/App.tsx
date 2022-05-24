import React from 'react';
import logo from './logo.svg';
import './App.css';
import FoodRecipe from './components/FoodRecipes';
import NavigationBar from './components/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';

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
      <NavigationBar/>
      <div className="Food" style={{margin:"15px 20px 0px 20px"}}>
        <FoodRecipe/>
      </div>
    </div>
  );
}

export default App;
