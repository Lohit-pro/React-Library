import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Features from "../components/Features";
import Dashboard from "../components/Dashboard";
import FeaturedBooks from "../components/FeaturedBooks";

function Home() {
  return (
    <div>
      <Header />
      <Dashboard />
      <Features />
      <FeaturedBooks />
      <Footer />
    </div>
  );
}

export default Home;
