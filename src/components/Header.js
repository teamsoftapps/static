import React, { useEffect, useState } from "react";
import Logo from "../images/Logo.png";
import "../style/Header.css";
import { Tune } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";

function Header() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        window.addEventListener("resize", () => {
            if (window.innerWidth > 991) {
                setShow(false);
            }
        });
    }, []);

    return (
        <div className={`${show ? "header__show" : "header__hide"} `}>
            <div className="header__nav">
                <div className="header__left">
                    <a href="/">
                        <img className="logo" src={Logo} alt="SoftApps" />
                    </a>
                    <ul className="header__sections">
                        <li>
                            <a href="/#home">Home </a>
                        </li>
                        <li>
                            <a href="#services">Services</a>
                        </li>
                        <li>
                            <a href="#about">About Us </a>
                        </li>
                        <li>
                            <a href="#portfolio">Portfolio</a>
                        </li>
                        <li>
                            <a href="#career">Career </a>
                        </li>
                        <li>
                            <a href="#contacts">Contacts</a>
                        </li>
                    </ul>
                </div>
                <IconButton className={"header__button"} onClick={() => setShow(!show)}>
                    <Tune className={"header__icon"} />
                </IconButton>
            </div>
            <ul className="header__res">
                <li>
                    <a onClick={() => setShow(false)} href="/#home">
                        Home{" "}
                    </a>
                </li>
                <li>
                    <a onClick={() => setShow(false)} href="#services">
                        Services
                    </a>
                </li>
                <li>
                    <a onClick={() => setShow(false)} href="#about">
                        About Us{" "}
                    </a>
                </li>

                <li>
                    <a onClick={() => setShow(false)} href="#portfolio">
                        Portfolio
                    </a>
                </li>
                <li>
                    <a onClick={() => setShow(false)} href="#career">
                        Career
                    </a>
                </li>
                <li>
                    <a onClick={() => setShow(false)} href="#contacts">
                        Contact Us
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Header;
