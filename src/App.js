import React from "react";
import "./App.css";
import "./index.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { Routes, Route } from "react-router-dom"; // Import Routes and Route components
import Home from "./pages/Home";
import Books from "./pages/Books";
import Cart from "./pages/Cart";
import BookInfo from "./pages/BookInfo";
import Error404 from "./pages/Error404";

library.add(fas);

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/:id" element={<BookInfo />} />
        <Route path="/cart" element={<Cart />} />
        <Route component={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
