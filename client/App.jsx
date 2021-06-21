import React from "react";
import { Header } from "./components/index";
import "./css/app.css";

const App = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <div>
          <h2>Hi World</h2>
        </div>

        <div>
          <input></input>
        </div>
        <div>
          <button class="btn">Cut!</button>
        </div>
      </div>
    </div>
  );
};

export default App;
