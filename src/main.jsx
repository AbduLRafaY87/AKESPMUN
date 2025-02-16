import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useTransition, animated } from "@react-spring/web";
import "./app.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/about/AboutPage";
import TeamPage from "./pages/team/TeamPage";
import CommitteesPage from "./pages/committees/CommitteesPage";
import RegistrationsPage from "./pages/registrations/RegistrationsPage";
import ContactPage from "./pages/contact/ContactPage";
import NotFoundPage from "./components/NotFoundPage";

const AnimatedRoutes = () => {
  const location = useLocation();

  const transitions = useTransition(location, {
    from: { opacity: 0, clipPath: "inset(100% 0 0 0)" }, // Curtain from top
    enter: { opacity: 1, clipPath: "inset(0% 0 0 0)" },
    leave: { opacity: 0, clipPath: "inset(100% 0 0 0)" }, // Curtain to top
    config: { tension: 200, friction: 20 },
  });

  return (
    <div className="flex-1">
      {transitions((style, item) => (
        <animated.div style={style} className="flex-1">
          <Routes location={item}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/committees" element={<CommitteesPage />} />
            <Route path="/registrations" element={<RegistrationsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </animated.div>
      ))}
    </div>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </div>
    </BrowserRouter>
  </StrictMode>
);
