import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/error" element={<ErrorPage />} />
    </Routes>
  );
};

export default AppRoutes;
