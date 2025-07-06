import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import React, { Component } from 'react';
import { BrowserRouter as Router ,Routes, Route, } from 'react-router-dom';

export default class App extends Component {
 pageSize = 5;
  render() {
    return (
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/Technology" element={  <News key="Technology" pagesize={6} country='us' category="Technology" />}>   </Route>
          <Route exact path="/sports" element={  <News key="sports" pagesize={6} country='us' category="sports" />}>   </Route>
          <Route exact path="/health" element={  <News key="health" pagesize={6} country='us' category="health" />}>   </Route>
          <Route exact path="/science" element={  <News key="science" pagesize={6} country='us' category="science" />}>
          </Route>
          <Route exact path="/Business" element={  <News key="Business" pagesize={6} country='us' category="Business" />}>
          </Route>
        </Routes>
      </Router>
    );
  }
}

