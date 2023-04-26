// Import the useGLTF hook from @react-three/drei library
import { useGLTF } from "@react-three/drei";

// Define the BasicModel component
function BasicModel({ url, ...props }) {
    // Use the useGLTF hook to load the 3D model from the provided URL
    const { scene } = useGLTF(url);

    // Return a primitive object with the loaded scene and any additional props passed to the component
    return <primitive object={scene} {...props} />;
}

// Export the BasicModel component for use in other parts of the application
export default BasicModel;
