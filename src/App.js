import "./App.css";
import RegisterForm from "./RegisterForm";

import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  useEffect(() => {
    axios
      .get("/api/marriageform")
      .then((res) => console.log(res))
      .catch();
  }, []);

  return (
    <div className="App">
      <RegisterForm />
    </div>
  );
}

export default App;
