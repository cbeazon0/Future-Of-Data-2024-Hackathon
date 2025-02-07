import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import FormPage from "./pages/FormPage";
import DashboardPage from "./pages/DashboardPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/form" element={<FormPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  );
};

export default App;