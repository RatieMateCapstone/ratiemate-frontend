import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, NavbarBrand } from "reactstrap";
import User from "../assets/user.png"
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import PropTypes from 'prop-types';

const Header = ({ direction }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen((prevState) => !prevState);
    return(
        <>
            <Navbar id="bar" dark >
                <div>
                <NavbarBrand href="/home" id="web-title">
                    Ratie Mate
                </NavbarBrand>
                </div>
                <div className="links-header1">
                    <NavLink to="/movieindex" id="link">
                        All Movies
                    </NavLink>
                    <NavLink to="/movienew" id="link">
                        Add Movie
                    </NavLink>
                    <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction}>
                        <DropdownToggle className="bg-transparent"><img src={User} alt="Account Icon" className="user"/></DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem header>
                                    Account
                                </DropdownItem>
                                <DropdownItem>
                                    <NavLink to="/usermovies" className="dropdown-link">
                                        My Movies
                                    </NavLink>
                                </DropdownItem>
                                <DropdownItem divider/>
                                <DropdownItem>
                                    <NavLink to="/usermovies" className="dropdown-link">
                                        Log Out
                                    </NavLink>
                                </DropdownItem>
                            </DropdownMenu>
                    </Dropdown>
                </div>
            </Navbar>
        </>
    )
}

Header.propTypes = {
    direction: PropTypes.string,
  };
  

export default Header