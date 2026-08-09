"use client";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesHero() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background: { color: { value: "transparent" } },
      fullScreen: { enable: false },
      particles: {
        number: { value: 80 },
        color: { value: ["#00ffff", "#ff00ff", "#ffff00"] },
        links: {
          enable: true,
          color: "#00ffff",
          distance: 120,
          opacity: 0.4,
        },
        move: { enable: true, speed: 2, outModes: { default: "out" } },
        opacity: {
          value: 0.8,
          animation: { enable: true, speed: 1, minimumValue: 0.4 },
        },
        size: { value: 2 },
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: "repulse" },
          onClick: { enable: true, mode: "push" },
        },
      },
    }),
    []
  );
  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={options}
      className="absolute inset-0 "
    />
  );
}
