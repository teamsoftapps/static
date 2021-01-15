import React from "react";
import classes from "./ContactInfo.module.css";
import PhoneRed from "../images/PhoneRed.png";
import EmailRed from "../images/EmailRed.png";
import FacebookWhite from "../images/FacbookWhite.png";
import LinkedinWhite from "../images/LinkedinWhite.png";
import TwitterWhite from "../images/TwitterWhite.png";
import YoutubeWhite from "../images/YoutubeWhite.png";
import InstagramWhite from "../images/InstagramWhite.png";
import MapImage from "../images/softAppsMap.PNG";

const ContactInfo = (props) => {
    return (
        <div id={"contact"} className={classes.ContactInfo}>
            <div className={classes.contactDetailDiv}>
                <div className={classes.detailDiv}>
                    <div>
                        <div>
                            <h1 className={classes.colHeading}>Address</h1>
                        </div>
                        <div style={{ margin: "10px 0" }}>
                            <div>
                                <h2 style={{ color: "#fff" }}>Canada</h2>
                            </div>
                            <div>
                                <p style={{ color: "#fff" }}>2192, Avenue d'O0rleans Montreal, H1W249, Canada.</p>
                            </div>
                        </div>
                        <div style={{ margin: "10px 0" }}>
                            <div>
                                <h2 style={{ color: "#fff" }}>USA</h2>
                            </div>
                            <div>
                                <p style={{ color: "#fff" }}>87/12 Sugerland Houston, TX 7218, USA.</p>
                            </div>
                        </div>
                        <div style={{ margin: "10px 0" }}>
                            <div>
                                <h2 style={{ color: "#fff" }}>Pakistan</h2>
                            </div>
                            <div>
                                <p style={{ color: "#fff" }}>A26, Block-6, PECHS, Karachi, Sindh, Pakistan.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div style={{ display: "flex", alignItems: "center", margin: "10px 0" }}>
                                <h1 className={classes.colHeading}>Phone</h1>
                            </div>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <div style={{ height: "20px", width: "20px", margin: "0 10px 0 0" }}>
                                    <img alt="Call" src={PhoneRed} style={{ maxWidth: "100%" }} />
                                </div>
                                <div>
                                    <a href="tel:+15145503281" style={{ textDecoration: "none", color: "#fff", fontWeight: "bold" }}>
                                        +1(514)550-3281
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div style={{ display: "flex", alignItems: "center", margin: "10px 0" }}>
                                <h1 className={classes.colHeading}>Email</h1>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", margin: "10px 0" }}>
                                <div style={{ height: "20px", width: "20px", margin: "0 10px 0 0" }}>
                                    <img alt="Email" src={EmailRed} style={{ maxWidth: "100%" }} />
                                </div>
                                <div>
                                    <p style={{ color: "#fff", fontWeight: "bold" }}>
                                        <a
                                            href="mailto:ceo@softapps.io"
                                            style={{ textDecoration: "none", color: "#fff", fontWeight: "bold" }}
                                        >
                                            ceo@softapps.io
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", margin: "10px 0" }}>
                                <div style={{ height: "20px", width: "20px", margin: "0 10px 0 0" }}>
                                    <img alt="Email" src={EmailRed} style={{ maxWidth: "100%" }} />
                                </div>
                                <div>
                                    <p style={{ color: "#fff", fontWeight: "bold" }}>
                                        <a
                                            href="mailto:management@softapps.io"
                                            style={{ textDecoration: "none", color: "#fff", fontWeight: "bold" }}
                                        >
                                            management@softapps.io
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", margin: "10px 0" }}>
                                <div style={{ height: "20px", width: "20px", margin: "0 10px 0 0" }}>
                                    <img alt="Email" src={EmailRed} style={{ maxWidth: "100%" }} />
                                </div>
                                <div>
                                    <p style={{ color: "#fff", fontWeight: "bold" }}>
                                        <a
                                            href="mailto:careers@softapps.io"
                                            style={{ textDecoration: "none", color: "#fff", fontWeight: "bold" }}
                                        >
                                            careers@softapps.io
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div style={{ display: "flex", alignItems: "center", margin: "10px 0" }}>
                                <h1 className={classes.colHeading}>Connect With Us</h1>
                            </div>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <a
                                    href="https://www.facebook.com/softapps.io/"
                                    target="_blank"
                                    style={{
                                        margin: "0 8px 0 0",
                                        width: "20px",
                                        height: "25px",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        cursor: "pointer",
                                    }}
                                >
                                    <img alt="Social" src={FacebookWhite} style={{ maxWidth: "100%" }} />
                                </a>
                                <a
                                    href="https://www.instagram.com/softapps.io/"
                                    target="_blank"
                                    style={{
                                        margin: "0 8px 0 0",
                                        width: "20px",
                                        height: "25px",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        cursor: "pointer",
                                    }}
                                >
                                    <img alt="Social" src={InstagramWhite} style={{ maxWidth: "100%" }} />
                                </a>
                                <a
                                    href="https://twitter.com/SoftappsI"
                                    target="_blank"
                                    style={{
                                        margin: "0 8px 0 0",
                                        width: "20px",
                                        height: "25px",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        cursor: "pointer",
                                    }}
                                >
                                    <img alt="Social" src={TwitterWhite} style={{ maxWidth: "100%" }} />
                                </a>
                                <a
                                    href="https://pk.linkedin.com/company/softapps-io"
                                    target="_blank"
                                    style={{
                                        margin: "0 8px 0 0",
                                        width: "20px",
                                        height: "25px",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        cursor: "pointer",
                                    }}
                                >
                                    <img alt="Social" src={LinkedinWhite} style={{ maxWidth: "100%" }} />
                                </a>
                                <a
                                    href="https://www.youtube.com/channel/UCmm8i8hNtK590FedEUtW4XA"
                                    target="_blank"
                                    style={{
                                        margin: "0 8px 0 0",
                                        width: "20px",
                                        height: "25px",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        cursor: "pointer",
                                    }}
                                >
                                    <img alt="Social" src={YoutubeWhite} style={{ maxWidth: "100%" }} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <a
                    target="_blank"
                    href="https://www.google.com/maps/place/SoftApps.io/@24.8682356,67.0730781,16.44z/data=!4m5!3m4!1s0x3eb33fd36cfaff9f:0x3c18dea14684aaf8!8m2!3d24.8682893!4d67.077202"
                    className={classes.mapDiv}
                >
                    <img src={MapImage} alt={""} />
                </a>
            </div>
        </div>
    );
};

export default ContactInfo;
