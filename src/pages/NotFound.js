import React from "react";
import Header1 from "../component/Header1"
import Footer from "../component/Footer"
import notFoundImage from "../assets/notFoundImage.jpeg"

const NotFound = () => {
    return(
        <body id="notfound-page">
            <Header1 />
            <div id="notfound">
            <img src={notFoundImage} alt="404 image"/>
            </div>
            <Footer/>
        </body>
    )
}

export default NotFound