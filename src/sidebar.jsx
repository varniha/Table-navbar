import React, { useState } from 'react';
import {
    FaBars,
    FaHome,
    FaUserAlt,
    FaArrowAltCircleRight
} from "react-icons/fa";
import './sidebar.css'
import { NavLink } from 'react-router-dom';

const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path: "/home",
            name: "Home",
            icon: <FaHome />
        },
       
        {
            path: "/staffdetails",
            name: "StaffDetails",
            icon: <FaUserAlt />
        },
       
        {
            path: "/logout",
            name: "Logout",
            icon: <FaArrowAltCircleRight />
        }
    ]
    return (
        <div className='nav'>
            <div style={{ width: isOpen ? "280px" : "60px" }} className="sidebar">
                <div className='header_section'>
                   
                </div>
                <div className="top_section">
                    <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">Menu</h1>
                    <div style={{ marginLeft: isOpen ? "80px" : "0px" }} className="bars">
                        <FaBars onClick={toggle} />
                    </div>
                </div>
                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                            <div className="icon">{item.icon}</div>
                            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <main>{children}</main>
        </div>
    );
};

export default Sidebar;