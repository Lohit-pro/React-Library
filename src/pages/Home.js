import React, {useEffect} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Features from "../components/Features";
import Dashboard from "../components/Dashboard";
import FeaturedBooks from "../components/FeaturedBooks";
import DiscountedBooks from "../components/DiscountedBooks";
import ExploreMore from "../components/ExploreMore";

function Home() {

  useEffect(() => {
    const targetSection = document.getElementById("Home".toLowerCase());
    targetSection.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div id={"Home".toLowerCase()}>
      <Header cartLength={null} />
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
