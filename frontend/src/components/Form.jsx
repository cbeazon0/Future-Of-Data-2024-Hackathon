import { useEffect, useRef, useState } from "react";
import { particleNetwork } from "./particles";

const Form = () => {
  const canvasRef = useRef(null);
  const [formData, setFormData] = useState({
    base: {
      income: 0,
      expenses: 0,
      savings: 0,
      debt: 0,
    },
    personal: {
      age: -1,
      dependents: -1,
    },
    budget: {
      housing: 0,
      groceries: 0,
      eatOut: 0,
      entertainment: 0,
      transportation: 0,
      heathCare: 0,
      insurance: 0,
      otherNeeds: 0,
    },
    debt: {
      medical: {
        amount: 0,
        rate: -1,
      },
      student: {
        amount: 0,
        rate: -1,
      },
      credit: {
        amount: 0,
        rate: -1,
      },
      other: {
        amount: 0,
        rate: -1,
      },
    },
  });

  const handleChange = (e) => {
    const { name, value, dataset } = e.target;
    const [section, key] = name.split(".");

    setFormData((prevState) => ({
      ...prevState,
      [section]: {
        ...prevState[section],
        [key]: value,
      },
    }));
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
    <div className="relative overflow-hidden sm:h-75 py-12 min-h-screen bg-n-15 z-0">
      <div className="container mx-auto my-auto">
        <div className="flex flex-col lg:flex-row w-10/12 lg:w-10/12 bg-white rounded-xl mx-auto shadow-sm overflow-hidden shadow-n-4 ring-1 ring-n-4">
          <div className="w-100 lg:2-1/2 flex flex-col items-center justify-center p-2 bg-no-repeat pg-cover bg-center border-b border-n-14 relative overflow-hidden sm:h-36 lg:h-auto">
            <canvas
              ref={canvasRef}
              style={{ position: "absolute", top: 0, left: 0, zIndex: 1 }}
              className="w-full h-full"
            ></canvas>
            <h1 className="text-color-8 text-4xl mb-3 font-bold z-2">
              Welcome!
            </h1>
            <p className="text-white text-center z-2 mx-8 sm:mx-10">
              Lets go through some initial information to help you get started!
            </p>
          </div>
          <div className="w-full lg:w-1/2 py-6 px-12">
            <p className="mb-10 text-color-9 font-semibold text-sm">
              None of the information you provide will be stored or shared. The
              information does not have to be exact, however, the more accurate
              the information, the better the results.
            </p>
            <form onSubmit={handleSubmit}>
              <label
                htmlFor="price"
                className="block text-sm font-medium leading-6 text-n-15"
              >
                <span className="text-red-500">* </span>
                How much do you make each month?
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <span className="text-n-3 sm:text-sm">$</span>
                </div>
                <input
                  type="number"
                  name="base.income"
                  placeholder="Monthly Income"
                  className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-n-15 ring-1 ring-inset ring-n-4 placeholder:text-n-3 foxus:ring-2 focus:ring-inset focus:ring-n-15 sm:text-sm sm:leading-6"
                  onChange={handleChange}
                  min="0"
                  required
                />
              </div>
              <label
                htmlFor="price"
                className="block mt-5 text-sm font-medium leading-6 text-n-15"
              >
                <span className="text-red-500">* </span>
                How much do you spend each month?
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <span className="text-n-3 sm:text-sm">$</span>
                </div>
                <input
                  type="number"
                  name="base.expenses"
                  placeholder="Monthly Expenses"
                  className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-n-15 ring-1 ring-inset ring-n-4 placeholder:text-n-3 foxus:ring-2 focus:ring-inset focus:ring-n-15 sm:text-sm sm:leading-6"
                  onChange={handleChange}
                  min="0"
                  required
                />
              </div>
              <label
                htmlFor="price"
                className="block mt-5 text-sm font-medium leading-6 text-n-15"
              >
                How much do you have in savings accounts, checking accounts,
                cash and brokerage accounts in total?
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <span className="text-n-3 sm:text-sm">$</span>
                </div>
                <input
                  type="number"
                  name="base.savings"
                  placeholder="0"
                  className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-n-15 ring-1 ring-inset ring-n-4 placeholder:text-n-3 foxus:ring-2 focus:ring-inset focus:ring-n-15 sm:text-sm sm:leading-6"
                  onChange={handleChange}
                  min="0"
                />
              </div>
              <label
                htmlFor="price"
                className="block mt-5 text-sm font-medium leading-6 text-n-15"
              >
                How much do you have in debt total?
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <span className="text-n-3 sm:text-sm">$</span>
                </div>
                <input
                  type="number"
                  name="base.debt"
                  placeholder="0"
                  className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-n-15 ring-1 ring-inset ring-n-4 placeholder:text-n-3 foxus:ring-2 focus:ring-inset focus:ring-n-15 sm:text-sm sm:leading-6"
                  onChange={handleChange}
                  min="0"
                />
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="price"
                    className="block mt-5 text-sm font-medium leading-6 text-n-15"
                  >
                    What is your age?
                  </label>
                  <div className="mt-1 flex">
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <input
                        type="number"
                        name="base.debt"
                        placeholder="0"
                        className="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-n-15 ring-1 ring-inset ring-n-4 placeholder:text-n-3 foxus:ring-2 focus:ring-inset focus:ring-n-15 sm:text-sm sm:leading-6"
                        onChange={handleChange}
                        min="0"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="price"
                      className="block mt-5 text-sm font-medium leading-6 text-n-15"
                    >
                      What is your age?
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <input
                        type="number"
                        name="base.debt"
                        placeholder="0"
                        className="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-n-15 ring-1 ring-inset ring-n-4 placeholder:text-n-3 foxus:ring-2 focus:ring-inset focus:ring-n-15 sm:text-sm sm:leading-6"
                        onChange={handleChange}
                        min="0"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <button
                  type="submit"
                  className=" w-full rounded-lg hover:bg-color-8 px-3.5 py-2.5 text-sm font-semibold hover:text-n-14 shadow-lg bg-n-15 text-color-8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-color-8"
                >
                  Continue
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
