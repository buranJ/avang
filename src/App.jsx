import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Object from "./pages/Object/Object";
import ForeverPage from "./pages/Forever/ForeverPage";
import AllObjects from "./pages/AllObjects/AllObjects";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/object" element={<Object />} />
        <Route path="/forever" element={<ForeverPage />} />
        <Route path="/objects" element={<AllObjects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
