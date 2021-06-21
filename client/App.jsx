import React, { useState } from "react";
import axios from "axios";
import { Header } from "./components/index";

import "./css/app.css";

const App = () => {
  const [userString, setUserString] = useState("Please enter your string here");
  const [slicedString, setSlicedString] = useState("");

  const handleChange = (event) => {
    setUserString(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const submitUserInput = async () => {
    const data = axios.post("/test", {
      string_to_cut: userString,
    });
    console.log("data", data);
    console.log("hi");
  };

  // const submitUserInput = async () => {};

  const check = () => {
    console.log(userString);
  };

  return (
    <div>
      <Header />
      <div className="container">
        <div>
          <h3>{slicedString}</h3>
        </div>

        <div>
          <input value={userString} onChange={handleChange}></input>
        </div>
        <div>
          <button className="btn">Cut!</button>
          <button onClick={() => submitUserInput()}>Cut string!</button>
          <button onClick={check}>check</button>
        </div>
      </div>
    </div>
  );
};

export default App;
