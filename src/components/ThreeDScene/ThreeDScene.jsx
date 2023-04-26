// Import the required libraries
import React from 'react'
import { Canvas } from '@react-three/fiber';

import Rystal from './Rystal/Rystal';

import './ThreeDScene.module.css'

import { OrbitControls } from '@react-three/drei';

// Define constants for camera settings and model paths
const CONSTANTS = {
  camera: { position: [10, 10, 16], fov: 100 },
  glcontext: { logarithmicDepthBuffer: true, antialias: false },
  dpr: [1, 1.5],
  hemisphereLight: {color: "white", groundColor: "blue", intensity: 0.75},
  spotlight: { position : [50, 50, 10], angle: 0.9, penumbra: 1 },
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
        gl = {CONSTANTS.glcontext}
        // Set the device pixel ratio
        dpr = {CONSTANTS.dpr}
      >
      {/* Added HemisphereLight */}
      <hemisphereLight {...CONSTANTS.hemisphereLight} />

      {/* Add spotlight */}
      <spotLight {...CONSTANTS.spotlight} />

      {/* Add the model to the scene */}
      <Rystal position={[0,0,0]} />

      {/*Add Orbital Controls to the scene */}
      <OrbitControls />
      
      </Canvas>
    </>
  )
}

// Export the ThreeDScene component
export default ThreeDScene
