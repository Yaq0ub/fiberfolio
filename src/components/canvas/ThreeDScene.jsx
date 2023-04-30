// Import the required libraries
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, ContactShadows } from "@react-three/drei";

import Rystal from "./Rystal";
import CustomEnvironment from "./CustomEnvironment";
import Effects from "./Effects";
import { scene_info } from "../../constants";

import "./ThreeDScene.css";

// Define the ThreeDScene component
const ThreeDScene = () => {
  return (
    <>
      {/* Render the Canvas component with custom camera and WebGL settings */}
      <Canvas
        // Set the camera properties
        camera={scene_info.camera}
        // Set the WebGL context properties
        gl={scene_info.glcontext}
        // Set the device pixel ratio
        dpr={scene_info.dpr}
      >
        {/* Add the model to the scene */}
        <Rystal {...scene_info.rystal} />

        {/* Added HemisphereLight */}
        <hemisphereLight {...scene_info.hemisphereLight} />

        {/* Add contact shadow */}
        <ContactShadows {...scene_info.contactshadow} />

        {/* Add the custom Environment containing Light former */}
        <CustomEnvironment />

        {/* Add Effects object containing leva controls for LUTs and other effects */}
        <Effects />

        <OrbitControls
          autoRotate
          enablePan={false}
          enableZoom={false}
          enableRotate={false}
          maxPolarAngle={Math.PI / 3}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </>
  );
};

// Export the ThreeDScene component
export default ThreeDScene;
