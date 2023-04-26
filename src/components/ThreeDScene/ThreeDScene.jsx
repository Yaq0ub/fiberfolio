// Import the required libraries
import React from 'react'
import { Canvas } from '@react-three/fiber';

import Rystal from './Rystal/Rystal';

import './ThreeDScene.module.css'

// Define constants for camera settings and model paths
const CONSTANTS = {
  camera: { position: [10, 10, 16], fov: 100 },
};



// Define the ThreeDScene component
const ThreeDScene = () => {
  return (
    <>
      {/* Render the Canvas component with custom camera and WebGL settings */}
      <Canvas 
        // Set the camera properties
        camera = {CONSTANTS.camera}
        // Set the WebGL context properties
        gl = {{ logarithmicDepthBuffer: true, antialias: false }}
        // Set the device pixel ratio
        dpr = {[1, 1.5]}
      >
      <Rystal position={[0,0,0]} />
      </Canvas>
    </>
  )
}

// Export the ThreeDScene component
export default ThreeDScene
