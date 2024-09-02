import { useLocation } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();
  const { data } = location.state || {}; // Retrieve data passed from form submission

  // Ensure you handle the case where data might be undefined
  return (
    <div>
      <h1>Dashboard</h1>
      {data ? (
        <div>
          {/* Example rendering of data */}
          <h2>Base Data</h2>
          <pre>{JSON.stringify(data.base, null, 2)}</pre> {/* Use JSON.stringify to render object as string */}
          
          <h2>Budget Data</h2>
          <pre>{JSON.stringify(data.budget, null, 2)}</pre>
          
          <h2>Debt Data</h2>
          <pre>{JSON.stringify(data.debt, null, 2)}</pre>
          
          <h2>Personal Data</h2>
          <pre>{JSON.stringify(data.personal, null, 2)}</pre>
        </div>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default Dashboard;