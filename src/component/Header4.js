import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, NavbarBrand } from "reactstrap";
import User from "../assets/user.png"
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import PropTypes from 'prop-types';

const Header4 = ({ direction, currentUser, logout }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    
    const toggle = () => setDropdownOpen((prevState) => !prevState);
    
    Header4.propTypes = {
        direction: PropTypes.string,
    };

    const handleClick = () => {
        logout()
    }

    return(
        <>
            <Navbar id="bar" dark >
                <div>
                <NavbarBrand id="web-title">
                    Ratie Mate
                </NavbarBrand>
                </div>
                <div className="links-header1">
                    <NavLink to="/movieindex" id="link">
                        All Movies
                    </NavLink>
                    {currentUser && (
                        <NavLink to="/movienew" id="link">
                            Add Movie
                        </NavLink>
                    )}
                    <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction}>
                        <DropdownToggle className="bg-transparent"><img src={User} alt="Account Icon" className="user"/></DropdownToggle>
                            <DropdownMenu>
                                {currentUser ? (
                                    <DropdownItem header>
                                        Greetings, {currentUser.username}!
                                    </DropdownItem>
                                ) : (
                                    <DropdownItem header>
                                        Greetings, Guest!
                                    </DropdownItem>
                                )    
                                }
                                <DropdownItem>
                                    {currentUser && (
                                        <>
                                        <NavLink to="/moviesprotectedindex" className="dropdown-link">
                                            My Movies
                                        </NavLink>
                                        </>
                                    )}
                                </DropdownItem>
                                {!currentUser && (
                                    <>
                                        <DropdownItem divider/>
                                            <DropdownItem className="link-container">
                                                <NavLink to="/login" className="dropdown-link">
                                                Sign In
                                                </NavLink>
                                            </DropdownItem>
                                        <DropdownItem className="link-container">
                                            <NavLink to="/signup" className="dropdown-link">
                                                Sign Up
                                            </NavLink>
                                        </DropdownItem>
                                    </>
                                )}
                                <DropdownItem>
                                    {currentUser&& (
                                        <>
                                            <DropdownItem divider/>
                                            <NavLink className="dropdown-link" onClick={handleClick} to="/">
                                                Log Out
                                            </NavLink>
                                        </>
                                    )}
                                </DropdownItem>
                            </DropdownMenu>
                    </Dropdown>
                </div>
            </Navbar>
        </>
    )
}

  

export default Header4