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
  const send = () => {
    axios
      .get("/api/marriageform")
      .then((res) => console.log(res))
      .catch();
  };
  return (
    <div className="App">
      <button
        onClick={() => {
          send();
        }}
      >
        보내기버튼
      </button>
      <RegisterForm />
    </div>
  );
}

export default App;
