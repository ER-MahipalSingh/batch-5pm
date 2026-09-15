import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Rest from "./features/pages/Test/Rest";
import Home from "./features/pages/Home/Home";
import Parent from "./features/pages/Test/Parent";
import Hookes from "./features/pages/Test/Hookes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rest" element={<Rest />} />
        <Route path="/parent" element={<Parent />} />
        <Route path="/hookes" element={<Hookes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
