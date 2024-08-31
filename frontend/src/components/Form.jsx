import { useEffect, useRef } from "react";
import { particleNetwork } from "./particles";

const Form = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const cleanup = particleNetwork("#0E1011F2", "#ffffff", canvasRef.current);

    return cleanup;
  }, []);

  return (
    <div className="relative overflow-hidden sm:h-180 py-20 min-h-screen">
      <canvas
        ref={canvasRef}
        style={{ position: "absolute", top: 0, left: 0, zIndex: -1 }}
        className="w-full h-full"
      ></canvas>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center bg-n-13">
            <h1 className="text-white text-3xl mb-3">Welcome</h1>
            <div>
              <p className="text-white">
                Lots of great text here{" "}
                <a href="#" className="text-n-3 font-semibold">
                  Learn More
                </a>
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 py-16 px-12">
            <h2 className="text-3xl mb-4">Register</h2>
            <p className="mb-4">
              Create your account. It's free and only takes a minute!
            </p>
            <form action="#">
              <div className="grid grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Firstname"
                  className="border border-n-4 py-1 px-2"
                />
                <input
                  type="text"
                  placeholder="Lastname"
                  className="border border-n-4 py-1 px-2"
                />
              </div>
              <div class="mt-5">
                <input
                  type="text"
                  placeholder="Email"
                  class="border border-gray-400 py-1 px-2 w-full"
                />
              </div>
              <div class="mt-5">
                <input
                  type="password"
                  placeholder="Password"
                  class="border border-gray-400 py-1 px-2 w-full"
                />
              </div>
              <div class="mt-5">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  class="border border-gray-400 py-1 px-2 w-full"
                />
              </div>
              <div class="mt-5">
                <input type="checkbox" class="border border-gray-400" />
                <span>
                  I accept the{" "}
                  <a href="#" class="text-purple-500 font-semibold">
                    Terms of Use
                  </a>{" "}
                  &{" "}
                  <a href="#" class="text-purple-500 font-semibold">
                    Privacy Policy
                  </a>
                </span>
              </div>
              <div class="mt-5">
                <button class="w-full bg-purple-500 py-3 text-center text-white">
                  Register Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
