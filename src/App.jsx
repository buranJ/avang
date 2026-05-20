import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
// import Home from "./pages/Home/Home";
import Object from "./pages/Object/Object";
import Home from "./pages/Home/Home";
import ForeverPage from "./pages/Forever/ForeverPage";
import AllObjects from "./pages/AllObjects/AllObjects";
import News from "./pages/News/News";
import NewsDetail from "./pages/News/NewsDetail";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import ProjectDetail from "./pages/ProjectDetail/Projectdetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/object" element={<Object />} />
        <Route path="/forever" element={<ForeverPage />} />
        <Route path="/objects" element={<AllObjects />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:id" element={<NewsDetail />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
      {/* <Home /> */}
    </BrowserRouter>
  );
}

export default App;
