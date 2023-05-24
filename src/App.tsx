import React from 'react';
//import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes}
    from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Blogs from './pages/Blogs';

//Color Pallete:
/*
#E5625E = Indian Red
#425FB6 = Savoy Blue
#070707 = Black
#E6E6E6 = Platinum
#39393A = Jet
*/

function App() {
  return (
    <Router>
    {/* <NavBar /> */}
        <Routes>
        <Route path='/Home'  element={<Home />} />
        <Route path='/About' element={<About/>} />
        <Route path='/Blogs' element={<Blogs/>} />
        </Routes>
    </Router>
  );
}

export default App;
