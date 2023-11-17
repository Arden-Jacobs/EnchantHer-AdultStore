import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import BlackFriday from "./components/pages/BlackFriday";
import TopSellers from "./components/pages/TopSellers";
import SignUp from "./components/pages/SignUp";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/black-friday" exact Component={BlackFriday} />
          <Route path="/top-sellers" exact Component={TopSellers} />
          <Route path="/sign-up" exact Component={SignUp} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
