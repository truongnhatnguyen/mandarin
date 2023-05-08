import { useCallback } from "react";
import Particles from "react-particles";
import type { Engine } from "tsparticles-engine";
import { ISourceOptions } from "tsparticles-engine";
import { loadSnowPreset } from "tsparticles-preset-snow";

let id = 0;
export const ParticlesContainer = () => {
 // this customizes the component tsParticles installation
 const customInit = useCallback(async (engine: Engine) => {
  // this adds the bundle to tsParticles
  await loadSnowPreset(engine); // this is required only if you are not using the bundle script
 }, []);

 const options: ISourceOptions = {
  preset: "snow",
  background: {
   color: {
    value: "transparent",
   },
  },
  fullScreen: false,
  particles: {
   size: {
    value: 2,
   },
  },
 };

 return (
  <Particles
   id={id++ + ""}
   className="h-full w-full absolute top-0 left-0 z-0"
   options={options}
   init={customInit}
  />
 );
};
