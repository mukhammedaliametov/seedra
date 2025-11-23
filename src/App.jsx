import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout";
import Home from "./pages/home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
