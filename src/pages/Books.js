import React from "react";
import AllBooks from "../components/AllBooks";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Books(){
    return(
        <div>
            <Header cartLength={null} />
            <AllBooks />
            <Footer />
        </div>
    )
}

export default Books;