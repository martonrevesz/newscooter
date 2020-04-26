import React from "react";
import Header from "./header/Header.js";
import Home from "./home/Home.js";
import Contact from "./contact/Contact.js";
import Scooters from "./scooters/Scooters.js";
import Questions from "./questions/Questions.js";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Home />
        <Scooters />
        <Questions />
        <Contact />
      </div>
    </Router>
  );
}

export default App;
