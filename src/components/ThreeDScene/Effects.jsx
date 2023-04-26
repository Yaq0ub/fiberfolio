/*
 Import required modules from external libraries
*/

// Import hooks from React Three Fiber for handling loaders
import { useLoader } from "@react-three/fiber";
// Import post-processing effects from React Three Postprocessing
import { EffectComposer, SSR, Bloom, LUT } from "@react-three/postprocessing";
// Import Leva hook for customizable controls
import { useControls } from "leva";
// Import LUTCubeLoader from postprocessing for loading LUT files
import { LUTCubeLoader } from "postprocessing";

// Define the base LUT folder path
const LUT_FOLDER = "/";

// Create an array of objects containing keys and names for each LUT file
const LUT_NAMES = [
  { key: "TwoStripeProcess", name: "2-Strip-Process" },
  { key: "BerlinSky", name: "Berlin Sky" },
  { key: "Chrome1", name: "Chrome 01" },
  { key: "Chrome2", name: "Chrome-01" },
  { key: "ClassicTealAndOrange", name: "Classic Teal and Orange" },
  { key: "FadeToGreen", name: "Fade to Green" },
  { key: "FilmPrint01", name: "Film Print 01" },
  { key: "FilmPrint02", name: "Film Print 02" },
  { key: "FrenchComedy", name: "French Comedy" },
  { key: "StudioSkinToneShaper", name: "Studio Skin Tone Shaper" },
  { key: "VintageChrome", name: "Vintage Chrome" },
];

/*Use map() to create an array of key-value pairs, 
with each key taken from the object's key property 
and each value being the full file path with LUT_FOLDER prepended 
and ".cube" extension appended. Then, use Object.fromEntries() 
to create an object (THREEDLUT) from the array of key-value pairs */
const THREEDLUT = Object.fromEntries(
  LUT_NAMES.map(({ key, name }) => [key, LUT_FOLDER + name + ".cube"])
);

// Define the Effects component
export function Effects() {
  // Use the Leva hook to create a control for selecting the LUT
  const { lut } = useControls({
    lut: {
      value: THREEDLUT.TwoStripeProcess,
      options: THREEDLUT,
    },
  });

  // Load the selected LUT file using the LUTCubeLoader
  const texture = useLoader(LUTCubeLoader, lut);

  // Define post-processing effect properties and their default values using the Leva hook
  const { enabled, ...props } = useControls({
    enabled: true,
    temporalResolve: true,
    STRETCH_MISSED_RAYS: true,
    USE_MRT: true,
    USE_NORMALMAP: true,
    USE_ROUGHNESSMAP: true,
    ENABLE_JITTERING: true,
    ENABLE_BLUR: true,
    DITHERING: false,
    temporalResolveMix: { value: 0.9, min: 0, max: 1 },
    temporalResolveCorrectionMix: { value: 0.4, min: 0, max: 1 },
    maxSamples: { value: 0, min: 0, max: 1 },
    resolutionScale: { value: 1, min: 0, max: 1 },
    blurMix: { value: 0.2, min: 0, max: 1 },
    blurKernelSize: { value: 8, min: 0, max: 8 },
    BLUR_EXPONENT: { value: 10, min: 0, max: 20 },
    rayStep: { value: 0.5, min: 0, max: 1 },
    intensity: { value: 2.5, min: 0, max: 5 },
    maxRoughness: { value: 1, min: 0, max: 1 },
    jitter: { value: 0.3, min: 0, max: 5 },
    jitterSpread: { value: 0.25, min: 0, max: 1 },
    jitterRough: { value: 0.1, min: 0, max: 1 },
    roughnessFadeOut: { value: 1, min: 0, max: 1 },
    rayFadeOut: { value: 0, min: 0, max: 1 },
    MAX_STEPS: { value: 20, min: 0, max: 20 },
    NUM_BINARY_SEARCH_STEPS: { value: 6, min: 0, max: 10 },
    maxDepthDifference: { value: 5, min: 0, max: 10 },
    maxDepth: { value: 1, min: 0, max: 1 },
    thickness: { value: 3, min: 0, max: 10 },
    ior: { value: 1.45, min: 0, max: 2 },
  });
  return (
    // Check if effects are enabled
    enabled && (
       // Apply post-processing effects using the EffectComposer
      <EffectComposer disableNormalPass>

        {/**Render the SSR (Screen Space Reflections) effect */}
        <SSR {...props} />

        {/*Render the Bloom effect*/}
        <Bloom
          luminanceThreshold={0.2}
          mipmapBlur
          luminanceSmoothing={0}
          intensity={1.75}
        />

        {/*Render the LUT color grading effect */}
        <LUT lut={texture} />
      </EffectComposer>
    )
  );
}
