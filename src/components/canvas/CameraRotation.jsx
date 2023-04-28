import { useFrame, useThree } from "@react-three/fiber";

const CameraRotation = ({ enabled = true }) => {
  const { camera } = useThree();

  useFrame(({ clock }) => {
    if (enabled) {
      // Adjust the rotation speed by changing the multiplier
      const rotationSpeed = 0.2;
      const angle = clock.getElapsedTime() * rotationSpeed;
      const radius = 10; // The distance from the center of the scene

      camera.position.x = Math.cos(angle) * radius;
      camera.position.z = Math.sin(angle) * radius;
      camera.lookAt(0, 4, 0); // Look at the center of the scene
    }
  });

  return null;
};

export default CameraRotation;
