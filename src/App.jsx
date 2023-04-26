// Import React and required components
import React from 'react'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import { useGLTF } from "@react-three/drei";

// Import the App's CSS styles
import './App.css';

// Define constants for model paths
const MODELS = { 
  rystal: "/rystal/scene.gltf"
};

// Define the App component
const App = () => {
  return (
    // Create a container for the app's contents
    <div className="container">
      {/* Render the Header component */}
      <Header />
      {/* Render the Home component */}
      <Home />
      {/* Render the Projects component */}
      <Projects />
      {/* Render the About component */}
      <About />
      {/* Render the Contact component */}
      <Contact />
      {/* Render the Footer component */}
      <Footer />
    </div>
  )
}

// Preload the models for better performance
Object.values(MODELS).forEach(useGLTF.preload);

// Export the App component
export default App
