import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Menu from './components/Menu';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import cover from './img/cover.jpg';
import Footer from './components/Footer';
import SubFooter from './components/SubFooter';
import 'bootstrap/dist/css/bootstrap.min.css';




const App = () => (
  <Router>
    <div className="app">
      <header>
        <Navigation />

      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home cover={cover}/>} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          
        </Routes>

      </main>
    </div>
    <Footer />
    <SubFooter />
  </Router>
);

export default App;
