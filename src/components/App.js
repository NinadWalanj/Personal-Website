// viewBox="0 0 1366 695"

import React, { lazy, Suspense } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";

import "./App.css";
import { Switch, Route, useLocation } from "react-router-dom";

import ScrollToTop from "../components/ScrollToTop";
import { AnimatePresence } from "framer-motion";
import DelayedFallback from "./DelayedFallback/DelayedFallback";

const Home = lazy(
  () =>
    new Promise((resolve, reject) =>
      setTimeout(() => resolve(import("../components/Home/Home")), 2000)
    )
);

const Navbar = lazy(
  () =>
    new Promise((resolve, reject) =>
      setTimeout(() => resolve(import("../components/Navbar/Navbar")), 2000)
    )
);

const Footer = lazy(
  () =>
    new Promise((resolve, reject) =>
      setTimeout(() => resolve(import("../components/Footer/Footer")), 2000)
    )
);

const About = lazy(
  () =>
    new Promise((resolve, reject) =>
      setTimeout(() => resolve(import("../components/About/About")), 2000)
    )
);

const Resume = lazy(
  () =>
    new Promise((resolve, reject) =>
      setTimeout(() => resolve(import("../components/Resume/Resume")), 2000)
    )
);

const Contact = lazy(
  () =>
    new Promise((resolve, reject) =>
      setTimeout(() => resolve(import("../components/Contact/Contact")), 2000)
    )
);

const ErrorPage = lazy(
  () =>
    new Promise((resolve, reject) =>
      setTimeout(
        () => resolve(import("../components/ErrorPage/ErrorPage")),
        2000
      )
    )
);

function App() {
  const location = useLocation();
  return (
    <div>
      <Suspense fallback={<DelayedFallback />}>
        <ScrollToTop />
        <Navbar />
        <AnimatePresence exitBeforeEnter initial={false}>
          <Switch location={location} key={location.pathname}>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/contact" component={Contact} />
            <Route component={ErrorPage}></Route>
          </Switch>
        </AnimatePresence>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
