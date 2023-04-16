import { Router, Route, Routes } from "@solidjs/router";
import { lazy } from "solid-js";
// import Calculator from "./pages/Calculator";
// import About from "./pages/About";
// import Records from "./pages/Records";
import Navbar from "./components/Navbar";

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
    </>
  );
}

export default App;