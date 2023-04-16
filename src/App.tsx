import { Route, Routes } from "@solidjs/router";
import Calculator from "./pages/Calculator";
import About from "./pages/About";

function App() {
  return (
    <Routes>
      <Route path="/" component={Calculator} />
      <Route path="/about" component={About} />
    </Routes>
  )
}

export default App;