import React from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes}
    from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Blogs from './pages/Blogs';



function App() {
  return (
    <Router>
    <NavBar />
        <Routes>
        <Route path='/Home'  element={<Home />} />
        <Route path='/About' element={<About/>} />
        <Route path='/Blogs' element={<Blogs/>} />
        </Routes>
    </Router>
  );
}

export default App;
