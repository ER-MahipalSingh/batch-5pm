import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Rest from "./features/pages/Test/Rest";
import Home from "./features/pages/Home/Home";
import Parent from "./features/pages/Test/Parent";
import Hookes from "./features/pages/Test/Hookes";
import Images from "./features/pages/Test/Images";
import Local from "./features/pages/Test/Local";
import Form from "./features/pages/Test/Form";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rest" element={<Rest />} />
        <Route path="/parent" element={<Parent />} />
        <Route path="/hookes" element={<Hookes />} />
        <Route path="/image" element={<Images />} />
        <Route path="/local" element={<Local />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
