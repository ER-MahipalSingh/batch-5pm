import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Rest from "./features/pages/Test/Rest";
import Home from "./features/pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rest" element={<Rest />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
