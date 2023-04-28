// Define the base LUT folder path
const LUT_FOLDER = "/LUTs/";

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

/*
Use map() to create an array of key-value pairs, 
with each key taken from the object's key property 
and each value being the full file path with LUT_FOLDER prepended 
and ".cube" extension appended. Then, use Object.fromEntries() 
to create an object (THREEDLUT) from the array of key-value pairs 
*/
const THREEDLUT = Object.fromEntries(
  LUT_NAMES.map(({ key, name }) => [key, LUT_FOLDER + name + ".cube"])
);

const lut_info = { 
    lut: {
        value: THREEDLUT.TwoStripeProcess,
        options: THREEDLUT,
    }
}

const scene_info = {
    camera: { position: [10, 10, 16], fov: 70 },
    glcontext: { logarithmicDepthBuffer: true, antialias: false },
    dpr: [1, 1.5],
    hemisphereLight: {intensity: 0.5},
    spotlight: { position : [30, 50, 10], angle: 0.9, penumbra: 0.5 },
    rystal: { position: [0,0.25,0], flipY: true, flipX: false },
    contactshadow: {
      resolution: 1024, 
      frames: 1, 
      position: [0, -11, 0], 
      scale: 100,
      blur: 0.7,
      opacity: 1,
      far: 20
    },
    orb: {
      enablePan: true, 
      enableZoom: true, 
      enableRotate: true
    }
};

const rystal_path="/rystal/scene.gltf";

const effects_info = {
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
};

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work"
  },
  {
    id: "contact",
    title: "Contact"
  }
]
export { rystal_path, effects_info, scene_info, lut_info };

/*
Temporal Resolve: Temporal anti-aliasing is a technique that smooths out the edges of moving objects by blending multiple frames together. This effect can reduce flickering and jagged edges in motion, resulting in a more realistic and smoother image.
Stretch Missed Rays: When a ray misses its intended target, this effect can interpolate the result to fill in missing information. This effect can help reduce artifacts or visual inconsistencies in the image.
MRT: Multiple render targets can be used for more complex rendering effects, such as post-processing effects, blending or layering multiple images, or optimization techniques. This effect can allow for more sophisticated rendering and compositing of images.
Normal Maps: Normal maps can be used to add surface detail and depth to the rendered image. By simulating surface texture, normal maps can create the illusion of depth and realism in the image.
Roughness Maps: Roughness maps can simulate different surface textures and reflectivity, adding another layer of detail to the rendered image. This effect can create more realistic materials and surfaces in the scene.
Jittering: Jittering is a technique that adds a random displacement or offset to the rays used in rendering. This effect can help reduce visible patterns or artifacts in the image and create a more natural and organic look.
Blur: A post-processing blur effect can be used to soften or smooth the rendered image. This effect can help reduce noise or sharp edges in the image and create a more pleasing visual appearance.
Dithering: Dithering is a technique that simulates a greater range of colors or shades than the display device can actually reproduce. This effect can create smoother gradients and a more natural look in the image. 
Temporal Resolve Mix: This effect controls the degree to which temporal anti-aliasing is blended with other rendering techniques or effects. It can help balance the trade-off between image quality and performance.
Temporal Resolve Correction Mix: This effect can adjust the effectiveness of the temporal anti-aliasing algorithm to improve the image quality. It can help reduce artifacts and improve the smoothness of the final image.
Max Samples: This effect limits the number of samples or rays used in rendering to improve performance or reduce noise in the image. A higher number of samples can improve the image quality but increase the rendering time.
Resolution Scale: This effect controls the rendering resolution of the image. By reducing the resolution, the rendering time can be decreased, but the image quality may also be affected.
Blur Mix: This effect controls the strength of the blur effect applied during post-processing. A higher value can create a more pronounced blur, while a lower value can create a subtler effect.
Blur Kernel Size: This effect controls the size of the kernel used in the blur effect. A larger kernel size can create a more pronounced blur, while a smaller kernel size can create a subtler effect.
Blur Exponent: This effect can control the intensity of the blur effect. A higher value can create a more pronounced blur, while a lower value can create a subtler effect.
Ray Step: This effect controls the distance between each ray used in the rendering process. A smaller ray step can create a more accurate image but can also increase the rendering time.
Intensity: This effect controls the strength of the light sources in the scene. A higher intensity can create brighter and more pronounced lighting effects.
Max Roughness: This effect sets the maximum roughness value for the surfaces in the scene. Roughness affects how light interacts with surfaces and can influence the visual appearance of materials.
Jitter: This effect controls the amount of random displacement or offset added to the rays used in rendering. A higher value can create a more chaotic and organic look in the image.
Jitter Spread: This effect controls the spread of the jitter effect. A higher value can create a more pronounced effect on the image.
Jitter Rough: This effect controls the amount of roughness added to the jitter effect. A higher value can create a more organic and natural look in the image.
Roughness Fade Out: This effect can control how quickly the roughness effect fades out at the edges of objects in the scene. This can help create a more natural and gradual transition between objects with different roughness values.
Ray Fade Out: This effect can control how quickly the rays used in rendering fade out at the edges of objects in the scene. This can help create a more natural and gradual transition between objects with different reflective properties.
Max Steps: This effect controls the maximum number of steps that rays can take in the rendering process. A higher value can create a more detailed image but can also increase the rendering time.
Num Binary Search Steps: This effect controls the number of binary search steps used in the rendering process. This can help improve the accuracy of the rendering, especially in areas with complex geometry or lighting.
Max Depth Difference: This effect sets the maximum difference in depth between neighboring pixels in the image. This can help reduce visible artifacts or inconsistencies in the image.
Max Depth: This effect sets the maximum depth value for objects in the scene. This can help control the overall depth and scale of the image.
Thickness: This effect controls the thickness of the surfaces in the scene. This can affect how light interacts with the objects and can influence the visual appearance of materials.
IOR: This effect sets the index of refraction value for objects in the scene. This can affect how light bends and reflects in the image and can influence the visual appearance of materials
*/