import React from "react";
import MainPage from "./pages/MainPage/MainPage";
import "./App.css";
// Router
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <MainPage />
    </Router>
  );
}

export default App;
