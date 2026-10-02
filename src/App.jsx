import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Rest from "./features/pages/Test/Rest";
import Home from "./features/pages/Home/Home";
import Parent from "./features/pages/Test/Parent";
import Hookes from "./features/pages/Test/Hookes";
import Images from "./features/pages/Test/Images";
import Local from "./features/pages/Test/Local";
import Form from "./features/pages/Test/Form";
import CallBackFun from "./features/pages/Test/CallBackFun";
import Memo from "./features/pages/Test/Memo";
import Login from "./features/component/User/Login";

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
        <Route path="/callback" element={<CallBackFun />} />
        <Route path="/memo" element={<Memo />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
