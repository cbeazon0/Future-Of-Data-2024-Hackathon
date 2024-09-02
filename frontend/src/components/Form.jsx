import { useEffect, useRef, useState } from "react";
import { particleNetwork } from "./particles";
import { useNavigate } from "react-router-dom";
import FormInput from "./subComponents/FormInput";

const Form = () => {
  const canvasRef = useRef(null);
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    base: {
      income: -1,
      expenses: -1,
      savings: -1,
      debt: -1,
    },
    personal: {
      age: -1,
      dependents: -1,
    },
    budget: {
      housing: -1,
      groceries: -1,
      eatOut: -1,
      entertainment: -1,
      transportation: -1,
      healthCare: -1,
      insurance: -1,
      otherNeeds: -1,
    },
    debt: {
      medical: {
        amount: -1,
        rate: -1,
      },
      student: {
        amount: -1,
        rate: -1,
      },
      credit: {
        amount: -1,
        rate: -1,
      },
      other: {
        amount: -1,
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

  const handleNextStep = () => {
    const isStepComplete =
      formData.personal.age !== -1 &&
      formData.base.income !== -1 &&
      formData.base.expenses !== -1;
    if (currentStep === 1 && !isStepComplete) {
      alert("Please fill out all required fields.");
      return;
    }

    setCurrentStep((prevState) => prevState + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep((prevState) => prevState - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the form from submitting the traditional way
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log("Response Status:", response.status); // Log status code

      if (response.ok) {
        const result = await response.json();
        console.log(result.message); // Handle response from backend
        navigate("/dashboard", { state: { data: result.recommendations } }); // Redirect to dashboard with state
      } else {
        console.log("Submission failed");
      }
    } catch (error) {
      console.log("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const cleanup = particleNetwork("#0E1011F2", "#ffffff", canvasRef.current);

    return cleanup;
  }, []);

  return (
    <div className="relative overflow-hidden sm:h-75 pt-12 min-h-screen bg-n-15 z-0">
      <div className="container mx-auto my-auto">
        <div className="flex flex-col lg:flex-row w-10/12 lg:w-11/12 bg-white rounded-xl mx-auto shadow-sm overflow-hidden shadow-n-4 ring-1 ring-n-4">
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-2 bg-no-repeat bg-cover bg-center border-b border-n-14 relative overflow-hidden sm:h-36 lg:h-auto">
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
            <form>
              {currentStep === 1 && (
                <>
                  <h2 className="text-n-15 text-center text-2xl font-semibold">
                    General Information
                  </h2>
                  <label
                    htmlFor="age"
                    className="block mt-5 text-sm font-medium leading-6 text-n-15"
                  >
                    <span className="text-red-500">* </span>
                    What is your age?
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input
                      type="number"
                      name="personal.age"
                      placeholder="0"
                      value={
                        formData.personal.age === -1
                          ? null
                          : formData.personal.age
                      }
                      className="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-n-15 ring-1 ring-inset ring-n-4 placeholder:text-n-3 focus:ring-2 focus:ring-inset focus:ring-n-15 sm:text-sm sm:leading-6"
                      onChange={handleChange}
                      min="0"
                      required
                    />
                  </div>

                  <label
                    htmlFor="income"
                    className="block mt-5 text-sm font-medium leading-6 text-n-15"
                  >
                    <span className="text-red-500">* </span>
                    How much do you make each month after tax?
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <span className="text-n-3 sm:text-sm">$</span>
                    </div>
                    <input
                      type="number"
                      name="base.income"
                      placeholder="Monthly Income"
                      value={
                        formData.base.income === -1
                          ? null
                          : formData.base.income
                      }
                      className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-n-15 ring-1 ring-inset ring-n-4 placeholder:text-n-3 focus:ring-2 focus:ring-inset focus:ring-n-15 sm:text-sm sm:leading-6"
                      onChange={handleChange}
                      min="0"
                      required
                    />
                  </div>

                  <label
                    htmlFor="expenses"
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
                      value={
                        formData.base.expenses === -1
                          ? null
                          : formData.base.expenses
                      }
                      className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-n-15 ring-1 ring-inset ring-n-4 placeholder:text-n-3 focus:ring-2 focus:ring-inset focus:ring-n-15 sm:text-sm sm:leading-6"
                      onChange={handleChange}
                      min="0"
                      required
                    />
                  </div>

                  <FormInput
                    id="savings"
                    label="How much do you have in savings accounts, checking accounts, cash and brokerage accounts in total?"
                    name="base.savings"
                    value={formData.base.savings}
                    onChange={handleChange}
                  />

                  <FormInput
                    id="debt"
                    label="How much do you have in debt total?"
                    name="base.debt"
                    value={formData.base.debt}
                    onChange={handleChange}
                    />

                  <label
                    htmlFor="dependents"
                    className="block mt-5 text-sm font-medium leading-6 text-n-15"
                  >
                    How many dependents do you have?
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input
                      type="number"
                      name="personal.dependents"
                      placeholder="0"
                      value={
                        formData.personal.dependents === -1
                          ? null
                          : formData.personal.dependents
                      }
                      className="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-n-15 ring-1 ring-inset ring-n-4 placeholder:text-n-3 focus:ring-2 focus:ring-inset focus:ring-n-15 sm:text-sm sm:leading-6"
                      onChange={handleChange}
                      min="0"
                    />
                  </div>
                </>
              )}
              {currentStep === 2 && (
                <>
                  <h2 className="text-n-15 text-center text-2xl font-semibold">
                    Expenses Breakdown
                  </h2>
                  <p className="text-n-15 text-sm font-normal mt-5">
                    How much do you spend on the following each month?
                  </p>

                  <FormInput
                    id="housing"
                    label="Housing (Rent/Mortgage + Utilities)"
                    name="budget.housing"
                    value={formData.budget.housing}
                    onChange={handleChange}
                    />

                  <FormInput
                    id="groceries"
                    label="Groceries"
                    name="budget.groceries"
                    value={formData.budget.groceries}
                    onChange={handleChange}
                    />

                  <FormInput
                    id="eatingOut"
                    label="Dining Out (Ordering Food)"
                    name="budget.eatOut"
                    value={formData.budget.eatOut}
                    onChange={handleChange}
                    />
                    <FormInput
                    id="transportation"
                    label="Transportation (Gas, Public Transport)"
                    name="budget.transportation"
                    value={formData.budget.transportation}
                    onChange={handleChange}
                    />
                  <FormInput
                    id="healthCare"
                    label="Health Care (Insurance, Medication)"
                    name="budget.heathCare"
                    value={formData.budget.heathCare}
                    onChange={handleChange}
                    />
                  <FormInput
                    id="insurance"
                    label="Personal Insurance (Life, Auto, Home)"
                    name="budget.insurance"
                    value={formData.budget.insurance}
                    onChange={handleChange}
                    />
                  <FormInput
                    id="otherNeeds"
                    label="Other Needs (Phone, Internet, etc.)"
                    name="budget.otherNeeds"
                    value={formData.budget.otherNeeds}
                    onChange={handleChange}
                    />
                  <FormInput
                    id="entertainment"
                    label="Entertainment"
                    name="budget.entertainment"
                    value={formData.budget.entertainment}
                    onChange={handleChange}
                    />
                </>
              )}
              {currentStep === 3 && (
                <>
                  <h2 className="text-n-15 text-center text-2xl font-semibold">
                    Debt Breakdown
                  </h2>
                  <p className="text-n-15 text-sm font-normal mt-5">
                    How much total debt do you have in each category and what is
                    your interest rate?
                  </p>

                  <div className="mt-5 flex flex-col sm:flex-row gap-5">
                    <div className="flex-1">
                      <FormInput
                        id="medicalAmount"
                        label="Medical Debt"
                        name="debt.medical.amount"
                        value={formData.debt.medical.amount}
                        onChange={handleChange}
                      />
                      <FormInput
                        id="studentAmount"
                        label="Student Debt"
                        name="debt.student.amount"
                        value={formData.debt.student.amount}
                        onChange={handleChange}
                      />
                      <FormInput
                        id="creditAmount"
                        label="Credit Card Debt"
                        name="debt.credit.amount"
                        value={formData.debt.credit.amount}
                        onChange={handleChange}
                      />
                      <FormInput
                        id="otherAmount"
                        label="Any Other Debt"
                        name="debt.other.amount"
                        value={formData.debt.other.amount}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="flex-1">
                      <FormInput
                        id="medicalInterestRate"
                        label="Interest Rate"
                        name="debt.medical.rate"
                        value={formData.debt.medical.rate}
                        onChange={handleChange}
                      />
                      <FormInput
                        id="studentInterestRate"
                        label="Interest Rate"
                        name="debt.student.rate"
                        value={formData.debt.student.rate}
                        onChange={handleChange}
                      />
                      <FormInput
                        id="creditInterestRate"
                        label="Interest Rate"
                        name="debt.credit.rate"
                        value={formData.debt.credit.rate}
                        onChange={handleChange}
                      />
                      <FormInput
                        id="otherInterestRate"
                        label="Interest Rate"
                        name="debt.other.rate"
                        value={formData.debt.other.rate}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </>
              )}

              <div className="flex justify-between mt-6">
                {currentStep > 1 && (
                  <button
                    type="button"
                    className="bg-n-15 hover:bg-n-14 text-white font-semibold py-2 px-4 rounded-md"
                    onClick={handlePreviousStep}
                  >
                    Back
                  </button>
                )}
                {currentStep < 3 ? (
                  <button
                    type="button"
                    className="bg-n-15 hover:bg-n-14 text-white font-semibold py-2 px-4 rounded-md"
                    onClick={handleNextStep}
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="button"
                    className="bg-n-15 hover:bg-n-14 text-white font-semibold py-2 px-4 rounded-md"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                )}
              </div>
              {loading && <p>Loading...</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
