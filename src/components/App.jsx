// viewBox="0 0 1366 695"
// Change loader, xx-large view problem

import React, { lazy, Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";
import DelayedFallback from "./DelayedFallback/DelayedFallback";

const ScrollToTop = lazy(
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve(import("./ScrollToTop")), 2000)
    )
);

const Home = lazy(
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve(import("./Home/Home")), 2000)
    )
);

const Navbar = lazy(
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve(import("./Navbar/Navbar")), 2000)
    )
);

const Footer = lazy(
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve(import("./Footer/Footer")), 2000)
    )
);

const About = lazy(
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve(import("./About/About")), 2000)
    )
);

const Resume = lazy(
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve(import("./Resume/Resume")), 2000)
    )
);

const Contact = lazy(
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve(import("./Contact/Contact")), 2000)
    )
);

const ErrorPage = lazy(
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve(import("./ErrorPage/ErrorPage")), 2000)
    )
);

function App() {
  const location = useLocation();
  return (
    <div>
      <Suspense fallback={<DelayedFallback />}>
        <ScrollToTop />
        <Navbar />
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/resume" element={<Resume />} /> */}
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
