import React from "react";
import Header1 from "../component/Header1"
import Footer from "../component/Footer"
import notFoundImage from "../assets/notFoundImage.jpeg"

const NotFound = () => {
    return(
        <>
            <Header1 />
            <div id="notfound">
            <img src={notFoundImage} alt="404 image"/>
            </div>
            <Footer/>
        </>
    )
}

export default NotFound