import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import ChildParentDataFlow from "./ChildParentDataFlow";
import Accordian from "./accordion";

function App() {
  return (
    <>
      <Accordian />
    </>
  );
}

export default App;
