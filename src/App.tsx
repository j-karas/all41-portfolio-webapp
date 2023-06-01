import React from 'react';
//import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes}
    from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Coding from './pages/Coding';
import Clothing from './pages/Clothing';
import Photography from './pages/Photography';
import Miscellaneous from './pages/Miscellaneous';

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
        <Route path='/Projects/Coding' element={<Coding/>} />
        <Route path='/Projects/Clothing' element={<Clothing/>} />
        <Route path='/Projects/Photography' element={<Photography/>} />
        <Route path='/Projects/Miscellaneous' element={<Miscellaneous/>} />
        </Routes>
    </Router>
  );
}

export default App;
