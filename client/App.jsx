import React, { useState } from "react";
import { Header } from "./components/index";
import "./css/app.css";

const App = () => {
  const [userString, setUserString] = useState("");

  const handleChange = (event) => {
    setUserString(event.target.value);
  };

  const check = () => {
    console.log(userString);
  };

  return (
    <div>
      <Header />
      <div className="container">
        <div>
          <h2>Hi World</h2>
        </div>

        <div>
          <input value={userString} onChange={handleChange}></input>
        </div>
        <div>
          <button class="btn">Cut!</button>
          <button onClick={check}>check</button>
        </div>
      </div>
    </div>
  );
};

export default App;
