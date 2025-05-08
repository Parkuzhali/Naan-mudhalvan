import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {AllComponents} from "./AllComponents";
import Home from "./Home";
import {Product} from "./Product";

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<AllComponents />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Product />} />
        {/* Add more routes here like cart, profile etc. */}
      </Route>
    </Routes>
  </BrowserRouter>
);
