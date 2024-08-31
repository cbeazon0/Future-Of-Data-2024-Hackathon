import { useEffect, useRef } from "react";
import { particleNetwork } from "./particles";

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const cleanup = particleNetwork("#0E1011F2", "#ffffff", canvasRef.current);

    return cleanup;
  }, []);

  return (
    <div id="#" className="border-b border-n-14 relative overflow-hidden sm:h-180">
      <canvas
        ref={canvasRef}
        style={{ position: "absolute", top: 0, left: 0, zIndex: -1 }}
        className="w-full h-full"
      ></canvas>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-color-8 sm:text-6xl">
              Relaxed Finance
            </h1>
            <p className="mt-6 text-lg leading-8 text-white">
              The easiest way to manage your finances.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/form"
                className="rounded-lg bg-color-8 px-3.5 py-2.5 text-sm font-semibold text-n-14 shadow-sm hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-color-8"
              >
                Start Now
              </a>
              <a
                href="#demo"
                className="text-sm font-semibold leading-6 text-white hover:text-color-8 hover:underline"
              >
                Watch Our Demo <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
