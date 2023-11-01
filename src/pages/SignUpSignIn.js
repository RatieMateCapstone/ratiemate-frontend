import React from "react"
import "../App.css"
import Sign from "../assets/giphy.gif"
import Ticket from "../assets/SignUpTicket.png"
import Ticket1 from "../assets/SignInTicket.png"
import Booth from "../assets/ticketbooth.png"
import { Link } from "react-router-dom"

const SignInSignUp = () => {
    return(
        <body>
            <div className="sign-container">
                <img src={Sign} alt="Movie Theater Sign" className="sign"></img>
                <h2 className="webtitle">Movie Matcher</h2>
            </div>
            <div className="bottom-container">
                <div className="ticket">
                    <img src={Ticket} alt="Movie Ticket" className="ticket"></img>
                    <Link to="/signup" id="button">
                        <button>
                            Sign Up
                        </button>
                    </Link>
                </div>
                <div>
                    <img src={Booth} alt="Ticket Booth" className="booth"></img>
                </div>
                <div className="ticket">
                    <img src={Ticket1} alt="Movie Ticket" className="ticket"></img>
                    <Link to="/signin" id="button">
                        <button>
                            Sign In
                        </button>
                    </Link>
                </div>
            </div>
        </body>
    )
}

export default SignInSignUp