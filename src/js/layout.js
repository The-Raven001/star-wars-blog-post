import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import { PostHandlerForCharacters } from "./component/PostHandlerForCharacters.jsx";
import { PostHandlerForPlanets } from "./component/PostHandlerForPlanets.jsx";
import { PostHandlerForStarships } from "./component/PostHandlerForStarships.jsx";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/single/:theid" element={<Single />} />
            <Route
              path="/character/:id"
              element={<PostHandlerForCharacters />}
            />
            <Route path="/planet/:id" element={<PostHandlerForPlanets />} />
            <Route
              path="*"
              element={
                <h1 className="d-flex justify-content-center">Not found!</h1>
              }
            />
            <Route path="/starship/:id" element={<PostHandlerForStarships />} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
