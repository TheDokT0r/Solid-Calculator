import { Router, Route, Routes } from "@solidjs/router";
import { lazy } from "solid-js";
import Navbar from "./components/Navbar";
import './index.css';

const Calculator = lazy(() => import("./pages/Calculator"));
const About = lazy(() => import("./pages/About"));
const Records = lazy(() => import("./pages/Records"));


function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" component={Calculator} />
          <Route path="/about" component={About} />
          <Route path='/records' component={Records} />
        </Routes>
      </Router>

      <footer>Made this app cause I'm bored lol</footer>
    </>
  );
}

export default App;