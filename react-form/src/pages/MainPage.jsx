import React from "react";
import Home from "../components/Home";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import FeedbackForm from "../components/FeedbackForm";

const MainPage = () => {
  return (
    <div className="main-page">
      <Home />
      <About />
      <Skills />
      <Projects />
      <FeedbackForm />
    </div>
  );
};

export default MainPage;
