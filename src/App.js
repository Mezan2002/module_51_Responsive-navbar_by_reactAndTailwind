import "./App.css";
import Chart from "./components/Chart/Chart";
import Navbar from "./components/Navbar/Navbar";
import Pricing from "./components/Pricing/Pricing";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Pricing></Pricing>
      <Chart></Chart>
    </div>
  );
}

export default App;
