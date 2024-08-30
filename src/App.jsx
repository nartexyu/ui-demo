import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import ThemeSwitch from "./pages/ThemeSwitch";

import "./App.css";

function App() {
  return (
    <div className="relative">
      <Header />
      <ThemeSwitch />
    </div>
  );
}

export default App;
