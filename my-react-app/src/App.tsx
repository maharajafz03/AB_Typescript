import * as React from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Complain from "./Complain"
import Home from './Home';
import About from './About'; // Import your About component

const App: React.FunctionComponent = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
       <Route path="/complain" element={<Complain />} /> 
      </Routes>
    </Router>
  );
};

export default App;
