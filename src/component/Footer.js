import React from "react";
import { Navbar } from "reactstrap"
import { NavLink } from "react-router-dom"

const Footer = () => {
    return(
        <>
            <Navbar 
                id="navbarfooter"
                dark
                fixed="bottom"
            >
                <div className="footer">
                    <NavLink id="aboutuslink" to="/aboutus">
                        About Us
                    </NavLink>
                    <p id="footerwords" >Ratie Mate &copy; Ilene, Roniel, Adrian, and Tori</p>
                </div>
            </Navbar>

        </>
    )
}

export default Footer