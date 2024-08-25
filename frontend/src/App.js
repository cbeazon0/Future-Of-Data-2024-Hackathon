import React, { useEffect, useState } from "react";

// App component
function App() {
  // Message state and setMessage function to update message state
  const [message, setMessage] = useState("");

  // Fetch message from backend
  useEffect(() => {
    fetch("http://127.0.0.1:5000/")
      .then(response => response.json()) // Parse JSON from response
      .then(data => setMessage(data.message)) // Set message state with data from backend
      .catch(error => console.error("Error fetching message:", error)); // Catch errors
  }, []);

  // Return JSX to render App component
  return (
    <div className = "App">
      <header className = "App-header">
        <h1>{message}</h1>
      </header>
    </div>
  );
}

// Export App component
export default App;