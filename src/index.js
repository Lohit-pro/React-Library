import React from "react";
import ReactDOM from "react-dom/client";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Cart from "./pages/Cart";

library.add(fas);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Home",
    element: <Home />,
  },
  {
    path: "/Books",
    element: <Books />
  },
  {
    path: "/Cart",
    element: <Cart />
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
