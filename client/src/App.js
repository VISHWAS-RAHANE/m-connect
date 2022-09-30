import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import MonthlyTourPlan from "./Pages/MonthlyTourPlan";
import MyDealer from "./Pages/MyDealer";
import MyTeam from "./Pages/MyTeam";
import MyWSS from "./Pages/MyWSS";
import MyDiary from "./Pages/MyDiary";
import MyProduct from "./Pages/MyProduct";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="/monthly-tour-plan" exact element={<MonthlyTourPlan />} />
          <Route path="/my-dealer" exact element={<MyDealer />} />
          <Route path="/my-wss" exact element={<MyWSS />} />
          <Route path="/my-diary" exact element={<MyDiary />} />
          <Route path="/my-team" exact element={<MyTeam />} />
          <Route path="/my-product" exact element={<MyProduct />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
