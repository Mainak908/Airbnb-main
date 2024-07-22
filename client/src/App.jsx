import axios from "axios";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout.jsx";
import IndexPage from "./Pages/IndexPages.jsx";
import LoginPage from "./Pages/LoginPages.jsx";
import RegisterPage from "./Pages/RegisterPages.jsx";

axios.defaults.baseURL = "http://localhost:4000";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
    </Routes>
  );
}

export default App;

// className="w-6 h-6 relative top-1"
