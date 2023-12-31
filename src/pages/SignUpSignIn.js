import React from "react"
import "../App.css"
import Sign from "../assets/cinemaSign.gif"
import Ticket from "../assets/SignUpTicket.png"
import Ticket1 from "../assets/SignInTicket.png"
import Booth from "../assets/ticketbooth.png"
import { Link } from "react-router-dom"
import Footer from "../component/Footer"

const SignInSignUp = () => {
    return(
        <body id="signinorsignup">
            <div id="choice-container">
                <div className="sign-container">
                    <img src={Sign} alt="Movie Theater Sign" className="sign"/>
                    <h2 className="webtitle">Ratie Mate</h2>
                </div>
                <div className="bottom-container">
                    <div className="ticket">
                        <img src={Ticket} alt="Movie Ticket" className="ticket"/>
                        <Link to="/signup" id="button">
                            <button>
                                Sign Up
                            </button>
                        </Link>
                    </div>
                    <div>
                        <img src={Booth} alt="Ticket Booth" className="booth"/>
                    </div>
                    <div className="ticket">
                        <img src={Ticket1} alt="Movie Ticket" className="ticket"/>
                        <Link to="/login" id="button">
                            <button>
                                Sign In
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer/>
        </body>
    )
}

export default SignInSignUp