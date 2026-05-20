import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import ObjectPage from "./pages/Object/Object";
import ForeverPage from "./pages/Forever/ForeverPage";
import AllObjects from "./pages/AllObjects/AllObjects";
import News from "./pages/News/News";
import NewsDetail from "./pages/News/NewsDetail";
import ConstructionProgress from "./pages/ConstructionProgress/ConstructionProgress";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import ProjectDetail from "./pages/ProjectDetail/Projectdetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/object" element={<ObjectPage />} />
        <Route path="/forever" element={<ForeverPage />} />
        <Route path="/objects" element={<AllObjects />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:id" element={<NewsDetail />} />
        <Route path="/construction-progress" element={<ConstructionProgress />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
