import AboutCompany from "../../components/Aboutcompany/Aboutcompany";
import AboutVarious from "../../components/Aboutvarious/Aboutvarious";
import Header from "../../components/Header/Header";
import History from "../../components/History/History";
import Footer from "../../components/Footer/Footer";


function App() {
  return (
    <>
      <Header />
      <div className="page-content">
        <AboutCompany />
        <AboutVarious />
        <History />
        <Footer />
      </div>
    </>
  );
}

export default App;
