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
      <h1>Still working on the app, nothing to see here folks</h1>
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