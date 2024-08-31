import { useEffect, useRef, useState } from "react";
import { particleNetwork } from "./particles";

const Form = () => {
  const canvasRef = useRef(null);
  const [formData, setFormData] = useState({
    age: 0,
    income: 0,
    debt: 0,
    expenses: 0,
    savings: 0,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the form from submitting the traditional way
    try {
      const response = await fetch("http://localhost:5000/api/data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log(result.message); // Handle response from backend
    } catch (error) {
      console.log("Error:", error);
    }
  };

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
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-5">
                <input
                  type="number"
                  name="age"
                  placeholder="Age"
                  className="border border-n-4 py-1 px-2"
                  onChange={handleChange}
                />
                <input
                  type="number"
                  name="income"
                  placeholder="Income"
                  className="border border-n-4 py-1 px-2"
                  onChange={handleChange}
                />
              </div>
              <div className="mt-5">
                <input
                  type="number"
                  name="debt"
                  placeholder="Debt"
                  className="border border-gray-400 py-1 px-2 w-full"
                  onChange={handleChange}
                />
              </div>
              <div className="mt-5">
                <input
                  type="number"
                  name="expenses"
                  placeholder="Expenses"
                  className="border border-gray-400 py-1 px-2 w-full"
                  onChange={handleChange}
                />
              </div>
              <div className="mt-5">
                <input
                  type="number"
                  name="savings"
                  placeholder="Savings"
                  className="border border-gray-400 py-1 px-2 w-full"
                  onChange={handleChange}
                />
              </div>
              {/* <div className="mt-5">
                <input type="checkbox" className="border border-gray-400" />
                <span>
                  I accept the{" "}
                  <a href="#" className="text-purple-500 font-semibold">
                    Terms of Use
                  </a>{" "}
                  &{" "}
                  <a href="#" className="text-purple-500 font-semibold">
                    Privacy Policy
                  </a>
                </span>
              </div> */}
              <div className="mt-5">
                <button
                  type="submit"
                  className="w-full bg-purple-500 py-3 text-center text-white"
                >
                  Send Data
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
