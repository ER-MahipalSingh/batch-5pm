import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Rest from "./features/pages/Rest";
import Home from "./features/home/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rest" element={<Rest />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
