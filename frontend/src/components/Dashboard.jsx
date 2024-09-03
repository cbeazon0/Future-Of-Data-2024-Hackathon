import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import RecommendationCard from "./subComponents/RecommendationCard";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register components
ChartJS.register(ArcElement, Tooltip, Legend);

const Dashboard = () => {
  const location = useLocation();
  const { data } = location.state || {};
  const [recommendations, setRecommendations] = useState([]);
  const [selectedRecommendation, setSelectedRecommendation] = useState(null);

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

  useEffect(() => {
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
        <div className="bg-n-15 p-4 mb-8 border rounded-2xl">
          {selectedRecommendation ? (
            <div className="flex flex-col items-center">
              <h2 className="text-2xl font-semibold mb-2">
                {selectedRecommendation.title}
              </h2>
              <p className="mb-4">{selectedRecommendation.description}</p>
              <a
                href={selectedRecommendation.link}
                className="text-link underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more
              </a>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <h2 className="text-3xl font-semibold mb-2 text-center text-color-8">
                Insights
              </h2>
              <p className="font-medium mb-4 mx-auto text-center">
                Select a recommendation from below to learn more about your financial options!
              </p>
              <div className="bg-card-background p-4 rounded-lg shadow-md border border-card-border">
                <Pie data={data2} />
              </div>
            </div>
          )}
        </div>

        <div className="w-full max-w-4xl bg-n-15 p-4 border rounded-2xl">
          <h2 className="text-3xl font-semibold mb-2 text-center text-color-8">
            Recommendations
          </h2>
          <p className="font-medium mb-4 text-center">
            Our currated recommendations for you based on the information you've
            provided!
          </p>
          <div className="grid grid-cols-1 gap-4">
            {recommendations.map((recommendation, index) => (
              <RecommendationCard
                key={index}
                title={recommendation.title}
                content={recommendation.description}
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
