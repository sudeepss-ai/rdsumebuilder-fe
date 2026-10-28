import { matchPath, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ResumeGenerate from "./pages/ResumeGenerate";
import Home from "./pages/Home";
import ResumeDetails from "./pages/ResumeDetails";
import AllResumes from "./pages/AllResumes";
import AllDownloads from "./pages/AllDownloads";
import SingleResume from "./pages/SingleResume";
import PNF from "./pages/PNF";
import { Slide,  ToastContainer } from "react-toastify";

function App() {
  const { pathname } = useLocation();
  const isKnownRoute =
    ["/", "/resume", "/resume-details", "/all-resumes", "/all-downloads"].some(
      (path) => matchPath({ path, end: true }, pathname),
    ) || Boolean(matchPath("/resumes/:id", pathname));

  return (
    <>
      {isKnownRoute && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<ResumeGenerate />} />
        <Route path="/resume-details" element={<ResumeDetails />} />
        <Route path="/all-resumes" element={<AllResumes />} />
        <Route path="/all-downloads" element={<AllDownloads />} />
        <Route path="/resumes/:id" element={<SingleResume />} />

        <Route path="/*" element={<PNF />} />
      </Routes>

      {isKnownRoute && <Footer />}

      {isKnownRoute && (
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Slide}
        />
      )}
    </>
  );
}

export default App;
