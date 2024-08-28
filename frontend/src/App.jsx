import { useState, useEffect } from "react"
import "./App.css"
import axios from "axios"
import Hero from "./Hero"

function App() {
  const [users, setUsers] = useState([]) // Create a state variable to store and change the users array

  // API calls are asynchronous, so we need to use async/await
  const fetchAPI = async () => {
    // Fetch data from the API using axios
    const response = await axios.get("http://localhost:5000/api/users");
    // Log the data to the console, specifically the users array
    console.log(response.data.users);
    // Set the users state variable to the users array from the API
    setUsers(response.data.users);
  };

  useEffect(() => {
    // Call the fetchAPI function when the component is mounted
    fetchAPI();
  }, []); // The empty array ensures that the function is only called once on initial render

  return (
    <>
      <Hero />
      <div id="content">
        {users.map((user, index) => (
            <div key={index}> 
              <span>{user}</span>
              <br></br>
            </div>
        ))}
      </div>
    </>
  );
}

export default App