import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Features from "../components/Features";
import Dashboard from "../components/Dashboard";
import FeaturedBooks from "../components/FeaturedBooks";
import DiscountedBooks from "../components/DiscountedBooks";
import ExploreMore from "../components/ExploreMore";

function Home() {
  return (
    <div>
      <Header />
      <Dashboard />
      <Features />
      <FeaturedBooks />
      <DiscountedBooks />
      <ExploreMore />
      <Footer />
    </div>
  );
}

export default Home;
