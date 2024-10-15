import { useEffect, useRef } from "react";
// @ts-ignore
import { ParticleNetworkAnimation } from "@/assets/scripts/particleNetwork.js";

export default function ParticleNetwork() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Ensure that the container is available before initializing
    if (containerRef.current) {
      const pna = new ParticleNetworkAnimation();
      pna.init(containerRef.current);

      // Cleanup to avoid memory leaks when the component unmounts
      return () => {};
    }
  }, []);

  return (
    <div
      className="particle-network-animation h-full w-full"
      ref={containerRef}
    ></div>
  );
}
