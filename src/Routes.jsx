import React from "react";
import {
  BrowserRouter,
  Routes as ContainerRoutes,
  Route,
} from "react-router-dom";

import Header from "./components/Header";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Skills from "./Pages/Skills";
import Contact from "./Pages/Contact";

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <ContainerRoutes>
        <Route exacth path="/" element={<Home />} />
        <Route path="/matheusbini/projects" element={<Projects />} />
        <Route path="/matheusbini/skills" element={<Skills />} />
        <Route path="/matheusbini/contact" element={<Contact />} />
      </ContainerRoutes>
    </BrowserRouter>
  );
};

export default Routes;
