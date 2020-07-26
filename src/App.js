import React from "react";
import MainPage from "./pages/MainPage/MainPage";
import "./App.css";
// Router
import { BrowserRouter as Router } from "react-router-dom";
// Store
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "store";
const store = configureStore();

function App() {
  return (
    <ReduxProvider store={store}>
      <Router>
        <div className={"poke-app"}>
          <MainPage />
        </div>
      </Router>
    </ReduxProvider>
  );
}

export default App;
