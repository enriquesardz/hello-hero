import React from "react";
import MainPage from "./pages/MainPage/MainPage";
import "./App.css";
// Router
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className={"poke-app"}>
        <MainPage />
      </div>
    </Router>
  );
}

export default App;
