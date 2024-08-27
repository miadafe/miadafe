import React from 'react';
import logo from './logo.svg';
import './App.css';
import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import { Home } from './Pages/home'
import { Page1 } from './Pages/page1'
import { Layout } from './Layout'

function App() {
  return (
    <Router>
    <Routes>
      <Route element={<Layout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/page1" element={<Page1/>}/>
        {/* <Route path="/page2" element={<Page2/>}/>
        <Route path="/page3" element={<Page3/>}/> */}
      </Route>
    </Routes>
  </Router>
  );
}

export default App;
