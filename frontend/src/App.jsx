import { useState, useEffect } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import axios from "axios"

function App() {
  const [count, setCount] = useState(0)
  const [users, setUsers] = useState([]) // Create a state variable to store and change the users array

  // API calls are asynchronous, so we need to use async/await
  const fetchAPI = async () => {
    // Fetch data from the API using axios
    const response = await axios.get("http://localhost:8080/api/users");
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
      {users.map((user, index) => (
          <div key = {index}>
            <span>{user}</span>
            <br></br>
          </div>
        ))}
    </>
  )
}

export default App