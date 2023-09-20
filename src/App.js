import React from 'react';
import './App.css';
import BreedSelector from './components/BreedSelector';
import DogImage from './components/DogImages';
import Login from './components/Login';
import Favorites from './components/Favorites';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function App() {


  return (
    <Router>
      <div className="App">
        <h1>Random Doggos</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/favorites">Favorites</Link>
            </li>
          </ul>
        </nav>
        <Routes>
        <Route
          path="/" element={<Home />}
            />
        <Route
          path="/favorites" element={<Favorites />}
        />
        <Route
          path="/login" element={<Login />}
            />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
