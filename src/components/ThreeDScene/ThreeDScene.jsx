import React from 'react'
import { Canvas } from '@react-three/fiber';

const CONSTANTS = {
  camera: { position: [10, 10, 16], fov: 100 },
};

const ThreeDScene = () => {
  return (
    <>
      <Canvas 
        camera = {CONSTANTS.camera}
        gl = {{ logarithmicDepthBuffer: true, antialias: false }}
        dpr = {[1, 1.5]}
      >

      </Canvas>
    </>
  )
}

export default ThreeDScene
