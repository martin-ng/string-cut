import React, { useState } from "react";
import axios from "axios";
import { Header } from "./components/index";
import "./css/app.css";

const App = () => {
  const [userString, setUserString] = useState("");
  const [slicedString, setSlicedString] = useState(
    "Your sliced string will be shown here"
  );

  const handleChange = (event) => {
    setUserString(event.target.value);
  };

  const submitUserInput = async () => {
    try {
      const { data } = await axios.post("/test", {
        string_to_cut: userString,
      });
      setSlicedString(data["return_string"]);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div>
      <Header />
      <div className="container">
        <div>
          <h2 className="result-string">{slicedString}</h2>
        </div>

        <div>
          <input
            placeholder="Please enter your string here"
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <button className="btn" onClick={submitUserInput}>
            Cut!
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
