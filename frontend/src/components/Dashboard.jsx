import { useLocation } from "react-router-dom";
import RecommendationCard from "./subComponents/RecommendationCard";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
} from "chart.js";

// Register required components
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

const Dashboard = () => {
  const location = useLocation();
  const { data } = location.state || {}; // Retrieve data passed from form submission

  const data2 = {
    labels: ["Category A", "Category B", "Category C"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        borderColor: "#fff",
        borderWidth: 1,
      },
    ],
  };

  console.log("Data:", data);

  // Process recommendation data
  const processRecommendations = (data) => {
    let finalRecommendations = [];

    for (const category in data) {
      const resources = data[category].resources;

      const filteredResources = Object.values(resources).filter(
        (resource) => resource.weight > 0
      );

      finalRecommendations = finalRecommendations.concat(filteredResources);
    }

    finalRecommendations.sort((a, b) => b.weight - a.weight);

    return finalRecommendations;
  };

  const recommendations = processRecommendations(data);

  console.log("Filtered Recommendations:", recommendations);

  // Dummy data for cards
  const cardData = [
    { title: "Card Title 1", content: "Card content goes here." },
    { title: "Card Title 2", content: "Card content goes here." },
    { title: "Card Title 3", content: "Card content goes here." },
    { title: "Card Title 4", content: "Card content goes here." },
    { title: "Card Title 5", content: "Card content goes here." },
  ];

  return (
    <div className="min-h-90">
      {/* Top Section */}
      <div className="relative overflow-hidden bg-n-15 pt-12 min-h-120">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4 text-center text-white">
            Statistics and Insights
          </h1>
          <div className="bg-n-15 p-4 rounded-lg shadow-md border-1 border-n-3">
            {/* Two-column layout */}
            <div className="flex flex-col md:flex-row items-center justify-center">
              <div className="w-full md:w-1/2 flex justify-center">
                <div className="w-64 h-64 bg-n-15 rounded-full flex items-center justify-center">
                  <Pie data={data2} />
                </div>
              </div>
              <div className="w-full md:w-1/2 p-4">
                <h2 className="text-xl font-semibold mb-2">Insights</h2>
                <p>
                  Here you can display additional information or insights based
                  on the data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="relative overflow-hidden bg-n-15 min-h-155 pb-4">
        <div className="container mx-auto px-4 bg-n-15 p-4 rounded-lg shadow-md border-1 border-n-3">
          <div className="grid grid-cols-1 gap-4">
            {recommendations.map((recommendation, index) => (
              <RecommendationCard
                key={index}
                title={recommendation.title}
                content={recommendation.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
