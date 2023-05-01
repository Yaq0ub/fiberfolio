// Import React and required components
import React from 'react';
import { useGLTF } from '@react-three/drei';

import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import ThreeDScene from './components/canvas/ThreeDScene'
// Import the App's CSS styles
import './App.css';
import Projects from './components/Projects';



// Define constants for model paths
const MODELS = {
  rystal: '/rystal/scene.gltf',
};

// Define the App component
const App = () => {
  return (
    <BrowserRouter >
      <Navbar />
        <ThreeDScene />
        <Projects />
    </BrowserRouter>
  );
};

// Preload the models for better performance
Object.values(MODELS).forEach(useGLTF.preload);

// Export the App component
export default App;
