import React, {useEffect} from "react";
import AllBooks from "../components/AllBooks";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Books(){

    useEffect(() => {
        const targetSection = document.getElementById("Books".toLowerCase());
        targetSection.scrollIntoView({ behavior: "smooth" });
      }, []);
    return(
        <div id={"Books".toLowerCase()}>
            <Header cartLength={null} />
            <AllBooks />
            <Footer />
        </div>
    )
}

export default Books;