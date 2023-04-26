import React from 'react'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';

import './App.css';

const App = () => {
  return (
    <div className="container">
      <Header />
      <Home />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
