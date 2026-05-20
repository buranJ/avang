import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import ObjectPage from "./pages/Object/Object";
import ForeverPage from "./pages/Forever/ForeverPage";
import AllObjects from "./pages/AllObjects/AllObjects";
import News from "./pages/News/News";
import NewsDetail from "./pages/News/NewsDetail";
import ConstructionProgress from "./pages/ConstructionProgress/ConstructionProgress";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import ProjectDetail from "./pages/ProjectDetail/Projectdetail";
import Aboutus from "./pages/AboutUs/Aboutus";
import MainLayout from "./layouts/MainLayout";
import Contacts from "./pages/Contacts/Contacts";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/object" element={<ObjectPage />} />
        <Route path="/object/:slug" element={<ObjectPage />} />
        <Route path="/forever" element={<ForeverPage />} />
        <Route path="/objects" element={<AllObjects />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:slug" element={<NewsDetail />} />
        <Route path="/construction-progress" element={<ConstructionProgress />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/about" element={<Aboutus />} />
        <Route element={<MainLayout />}>
          <Route path="/contacts" element={<Contacts />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
