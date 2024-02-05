import React from "react";
import AllBooks from "../components/AllBooks";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Books(){
    return(
        <div>
            <Header />
            <AllBooks />
            <Footer />
        </div>
    )
}

export default Books;