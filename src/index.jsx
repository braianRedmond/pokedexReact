import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import App from "./App";
import Kanto from "./Routes/Kanto";
import Detail from "./Routes/Detail";


import { ContextProvider } from "./Components/utils/global.context";
import "./index.css";
import Johto from "./Routes/Johto";
import Hoenn from "./Routes/Hoenn";
import Sinnoh from "./Routes/Sinnoh";
import Unova from "./Routes/Unova";
import Kalos from "./Routes/Kalos";
import Alola from "./Routes/Alola";
import Galar from "./Routes/Galar"
import Home from "./Routes/Home"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  <BrowserRouter>
    <ContextProvider>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index path="/home" element={<Home />} />
          <Route index path="/kanto" element={<Kanto />} />
          <Route index path="/johto" element={<Johto />} />
          <Route index path="/hoenn" element={<Hoenn />} />
          <Route index path="/sinnoh" element={<Sinnoh />} />
          <Route index path="/unova" element={<Unova />} />
          <Route index path="/kalos" element={<Kalos />} />
          <Route index path="/alola" element={<Alola />} />
          <Route index path="/galar" element={<Galar />} />
          <Route path="/dentist/:id" element={<Detail />} />
        </Route>
      </Routes>
    </ContextProvider>
  </BrowserRouter>

);
