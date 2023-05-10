import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import options from "../Home/ParticleConfig";
import { loadFull } from "tsparticles";
const ParticlesComponent = () => {
  const particlesInit = useCallback(async (res) => {
    await loadFull(res);
  }, []);
  const particlesLoaded = useCallback(async (res) => {
    await console.log(res);
  }, []);
  return (
    <Particles
      className="sm:h-screen h-[120vh] max-w-screen"
      id="particles-component"
      init={particlesInit}
      loaded={particlesLoaded}
      options={options}
    ></Particles>
  );
};

export default ParticlesComponent;
