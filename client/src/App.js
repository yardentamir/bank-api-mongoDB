import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Header from "./components/Header/Header";

import GetRoutes from "./routes/get";
import PostRoute from "./routes/post";
import putRoutes from "./routes/put";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        {GetRoutes()}
        {PostRoute()}
        {putRoutes()}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
