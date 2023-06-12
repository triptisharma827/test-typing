import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import TestResult from './pages/testResult';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/result' element={<TestResult/>}/>
      </Routes>
    </Router>
  );
};

export default App;
