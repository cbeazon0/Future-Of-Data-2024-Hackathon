import { useLocation } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();
  const { data } = location.state || {}; // Retrieve data passed from form submission

  return (
    <div className="flex flex-col h-screen">
      {/* Top Section */}
      <div className="flex-1 p-6 bg-n-15">
        <h1 className="text=3xl font-bold mb-4 text-center">
          Dynamic Section
        </h1>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <p>Dynamic Content or Charts will be displayed here</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;