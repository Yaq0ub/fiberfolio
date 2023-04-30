import { useLoader } from "@react-three/fiber";
import { EffectComposer, SSR, Bloom, LUT } from "@react-three/postprocessing";
import { useControls } from "leva";
import { LUTCubeLoader } from "postprocessing";

import { effects_info, lut_info, THREEDLUT } from '../../constants'

export function Effects() {
  //const { lut } = useControls(lut_info);
  //const { enabled, ...props } = useControls(effects_info);

  const texture = useLoader(LUTCubeLoader, "/LUTs/French Comedy.cube");
  return (
    effects_info.enabled && (
      <EffectComposer disableNormalPass>
        <SSR {...effects_info} />
        <Bloom
          luminanceThreshold={0.2}
          mipmapBlur
          luminanceSmoothing={0}
          intensity={1.75}
        />
        <LUT lut={texture} />
      </EffectComposer>
    )
  );
}

export default Effects