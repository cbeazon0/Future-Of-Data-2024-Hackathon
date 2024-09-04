import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import RecommendationCard from "./subComponents/RecommendationCard";
import Card from "./subComponents/Card";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register components
ChartJS.register(ArcElement, Tooltip, Legend);

const Dashboard = () => {
  const location = useLocation();
  const { data } = location.state || {};
  console.log(data);

  const [recommendations, setRecommendations] = useState([]);
  const [selectedRecommendation, setSelectedRecommendation] = useState(null);

  const userInput = data?.userInput || {};
const budget = userInput?.budget || {};
const debt = userInput?.debt || {};

const totalIncome = userInput?.base?.income ?? 0;
const totalExpenses = userInput?.base?.expenses ?? 0;
const netIncome = totalIncome - totalExpenses;

// Define a mapping object for custom labels
const labelMapping = {
  eatOut: "Eating Out (Ordering)",
  groceries: "Groceries",
  housing: "Housing",
  entertainment: "Entertainment",
  healthCare: "Health Care",
  insurance: "Insurance",
  otherNeeds: "Other Needs",
  transportation: "Transportation",
  credit: "Credit Card",
  student: "Student Loan",
  medical: "Medical",
  other: "Other",
};

// Filter and map the budget entries
const filteredBudgetEntries = Object.entries(budget).filter(
  ([label, value]) => value > 0
);

const expenseLabels = filteredBudgetEntries.map(
  ([label]) => labelMapping[label] || label // Use custom label or fallback to original
);
const expenseValues = filteredBudgetEntries.map(([_, value]) => value);

const expensesChartData = {
  labels: expenseLabels,
  datasets: [
    {
      data: expenseValues,
      backgroundColor: [
        "#FF6384",
        "#36A2EB",
        "#FFCE56",
        "#4BC0C0",
        "#9966FF",
        "#FF9F40",
      ],
      borderColor: "#fff",
      borderWidth: 1,
    },
  ],
};

// Filter and map the debt entries
const filteredDebtEntries = Object.entries(debt).filter(
  ([label, debtInfo]) => debtInfo.amount > 0
);

const debtLabels = filteredDebtEntries.map(
  ([label]) => labelMapping[label] || label // Use custom label or fallback to original
);
const debtValues = filteredDebtEntries.map(([_, debtInfo]) => debtInfo.amount);

const debtChartData = {
  labels: debtLabels,
  datasets: [
    {
      data: debtValues,
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
      borderColor: "#fff",
      borderWidth: 1,
    },
  ],
};


  const chartOptions = {
    plugins: {
      legend: {
        labels: {
          color: "#fff", // Set legend text color to white
        },
      },
      tooltip: {
        titleColor: "#fff", // Set tooltip title color to white
        bodyColor: "#fff", // Set tooltip body color to white
      },
    },
  };

  useEffect(() => {
    const processRecommendations = (data) => {
      let finalRecommendations = [];

      for (const category in data) {
        if (category === "userInput") continue;
        const resources = data[category].resources;
        const filteredResources = Object.values(resources).filter(
          (resource) => resource.weight > 0
        );
        finalRecommendations = finalRecommendations.concat(filteredResources);
      }

      finalRecommendations.sort((a, b) => b.weight - a.weight);
      return finalRecommendations.slice(0, 5); // Get top 5 recommendations
    };

    if (data) {
      const processedRecommendations = processRecommendations(data);
      setRecommendations(processedRecommendations);
    }
  }, [data]);

  return (
    <div className="relative overflow-hidden bg-n-15 text-white min-h-screen flex flex-col items-center">
      <div className="w-full flex flex-col items-center p-8">
        <div className="bg-n-15 p-4 mb-8 border rounded-2xl max-w-4xl">
          <h2 className="text-3xl font-semibold mb-4 text-center text-color-8">
            Insights
          </h2>
          {!selectedRecommendation && (
            <div className="flex flex-wrap justify-center gap-4">
              <p className="font-medium mb-4 mx-auto text-center">
                Click on a recommendation from the below list to learn more
                about your options!
              </p>
              <Card
                title="Income"
                value={totalIncome}
                valueColor="text-green-500"
              />
              <Card
                title="Expenses"
                value={totalExpenses}
                valueColor="text-red-500"
              />
              <Card
                title="Net Monthly Income"
                value={netIncome}
                valueColor="text-blue-500"
              />

              {expenseValues.length > 0 && (
                <div className="bg-n-7 p-4 border border-white shadow-md rounded-lg w-72 text-white">
                  <p className="text-white text-xl text-center pb-2">
                    Expenses Breakdown
                  </p>
                  <Pie data={expensesChartData} options={chartOptions} />
                </div>
              )}

              {debtValues.length > 0 && (
                <div className="bg-n-7 p-4 border border-white shadow-md rounded-lg w-72 text-white">
                  <p className="text-white text-xl text-center pb-2">
                    Debt Breakdown
                  </p>
                  <Pie data={debtChartData} options={chartOptions} />
                </div>
              )}
            </div>
          )}

          {selectedRecommendation && (
            <div className="flex flex-col items-center">
              <h2 className="text-2xl font-semibold mb-2">
                {selectedRecommendation.title}
              </h2>
              <p className="mb-4 text-white font-light text-center">
                {selectedRecommendation.description}
              </p>
              <a
                href={selectedRecommendation.link}
                className="text-link underline hover:text-color-8 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more
              </a>
            </div>
          )}
        </div>

        <div className="w-full max-w-4xl bg-n-15 p-6 border rounded-2xl">
          <h2 className="text-3xl font-semibold mb-2 text-center text-color-8">
            Recommendations
          </h2>
          <p className="font-medium mb-4 text-center">
            Our curated recommendations for you based on the information you've
            provided!
          </p>
          <div className="grid grid-cols-1 gap-4">
            {recommendations.map((recommendation, index) => (
              <RecommendationCard
                key={index}
                title={recommendation.title}
                content={recommendation.shortDescription}
                isSelected={
                  selectedRecommendation?.title === recommendation.title
                }
                onClick={() =>
                  setSelectedRecommendation(
                    selectedRecommendation?.title === recommendation.title
                      ? null
                      : recommendation
                  )
                }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
