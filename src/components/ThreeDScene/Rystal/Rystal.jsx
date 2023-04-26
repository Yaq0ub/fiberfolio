// Import React and the BasicModel component
import React from 'react'
import BasicModel from '../Models/BasicModel';

// Define the Rystal component
function Rystal ({...props}) {
  // Set the model path for the Rystal 3D model
  const model_path = "/rystal/scene.gltf"

  // Render the BasicModel component with the Rystal model path and any additional props passed to the Rystal component
  return <BasicModel url={model_path} {...props} />
}

// Export the Rystal component for use in other parts of the application
export default Rystal
