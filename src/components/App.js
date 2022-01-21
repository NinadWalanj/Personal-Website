import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import { Switch, Route, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Resume from "./Resume/Resume";
import Contact from "../components/Contact/Contact";
import ScrollToTop from "../components/ScrollToTop";
import { AnimatePresence } from "framer-motion";
import ErrorPage from "./ErrorPage/ErrorPage";

function App() {
  const location = useLocation();
  return (
    <div>
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
    </div>
  );
}

export default App;
