// Import React and required components
import React from 'react';
import { useGLTF } from '@react-three/drei';
import Navbar from './components/Navbar'

// Import the App's CSS styles
import './App.css';
import ThreeDScene from './components/canvas/ThreeDScene';

// Define constants for model paths
const MODELS = {
  rystal: '/rystal/scene.gltf',
};

// Define the App component
const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <ThreeDScene />
    </React.Fragment>
  );
};

// Preload the models for better performance
Object.values(MODELS).forEach(useGLTF.preload);

// Export the App component
export default App;
