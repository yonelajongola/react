import React from "react";
import Weather from "./Weather";
import "./styles.css";
import "./Weather.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="East London" />

        <footer>
          <strong>
            This was Coded by Yonela Jongola{" "}
            <a
              href="https://github.com/yonelajongola/react"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>{" "}
            and Hosted on{" "}
            <a href="https:// /" target="_blank" rel="noopener noreferrer">
              Netlify
            </a>
          </strong>
        </footer>
      </div>
    </div>
  );
}
