// Import the useGLTF hook from @react-three/drei library
import { useGLTF } from "@react-three/drei";

// Define the BasicModel component
function BasicModel({ url, flipX = false, flipY = false, flipZ = false, ...props }) {
    // Use the useGLTF hook to load the 3D model from the provided URL
    const { scene } = useGLTF(url);
    
    // Calculate the scale values based on the flip flags
    const scaleX = flipX ? -1 : 1;
    const scaleY = flipY ? -1 : 1;
    const scaleZ = flipZ ? -1 : 1;
    
    // Return a primitive object with the loaded scene and any additional props passed to the component
    return (
        <primitive
            object={scene}
            scale={[scaleX, scaleY, scaleZ]}
            {...props}
        />
    )
}

// Export the BasicModel component for use in other parts of the application
export default BasicModel;
