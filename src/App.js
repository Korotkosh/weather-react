import "./App.css";
import Search from "./Search";
import axios from "axios";

function App() {
  return (
    <div className="App">
      <h1>Weather Search Engine</h1>
      <Search />
      <a
        href="https://github.com/Korotkosh/weather-react"
        target="_blank"
        rel="noreferrer"
      >
        @GitHub repository
      </a>
    </div>
  );
}

export default App;
