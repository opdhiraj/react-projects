import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import ChildParentDataFlow from "./ChildParentDataFlow";
import Accordian from "./accordion";
import RandomColor from "./random-color";
import StarRating from "./star-rating";

function App() {
  return (
    <>
      {/* Accordian component */}

      <Accordian />

      {/* Random color */}
      <RandomColor />

      {/* star rating component */}
      <StarRating />
    </>
  );
}

export default App;
