// Import the required libraries
import React from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';

import Rystal  from './scene/Rystal/Rystal';
import CustomEnvironment from './scene/CustomEnvironment';
import Effects from './scene/Effects'

import './ThreeDScene.module.css'

// Define constants for camera settings and model paths
const CONSTANTS = {
  camera: { position: [10, 10, 16], fov: 70 },
  glcontext: { logarithmicDepthBuffer: true, antialias: false },
  dpr: [1, 1.5],
  hemisphereLight: {color: "white", groundColor: "blue", intensity: 0.75},
  spotlight: { position : [30, 50, 10], angle: 0.9, penumbra: 0.5 },
  rystal: { position: [0,0.25,0], flipY: true }
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
      <Rystal {...CONSTANTS.rystal} />

      {/* Add the custom Environment containing Light former */}
      <CustomEnvironment />

      {/* Add Effects object containing leva controls for LUTs and other effects */}
      <Effects />

      {/* Add Orbital Controls to the scene */}
      <OrbitControls
          autoRotate
          enablePan={false}
          enableZoom={false}
          enableRotate={false}
          maxPolarAngle={Math.PI / 2.5}
          minPolarAngle={Math.PI / 2.5}
        />
        {/* Add  stars to the canvas*/}
        <Stars radius={500} depth={50} count={1000} factor={10} />
      </Canvas>
    </>
  )
}

// Export the ThreeDScene component
export default ThreeDScene
