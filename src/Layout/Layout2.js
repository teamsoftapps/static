import React, { useEffect, useState } from "react";
import classes from "./Layout2.module.css";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Digital from "../../shared/assets/Images/Digital.png";
import Play from "../../shared/assets/Images/Play.png";
import face from "../../shared/assets/Images/Arvin-Manoj-Founder-CEO-SoftApps.io.png";
import rightArrowTeam from "../../shared/assets/Images/rightArrowTeam.png";
import leftArrowTeam from "../../shared/assets/Images/leftArrowTeam.png";
import whatWeb from "../../shared/assets/Images/whatWeb.png";
import whatApp from "../../shared/assets/Images/whatApp.png";
import whatEcommerce from "../../shared/assets/Images/whatEcommerce.png";
import whatPrototype from "../../shared/assets/Images/whatPrototype.png";
import webProt from "../../shared/assets/Images/webProt.png";
import REACTJS from "../../shared/assets/Images/REACTJS.png";
import wordpress from "../../shared/assets/Images/wordpress.png";
import PYTHON from "../../shared/assets/Images/PYTHON.png";
import NODEJS from "../../shared/assets/Images/NODE JS.png";
import HTMLCSS from "../../shared/assets/Images/HTML CSS.png";
import ANGULAR from "../../shared/assets/Images/ANGULAR.png";
import appProt from "../../shared/assets/Images/appProt.png";
import Android from "../../shared/assets/Images/Android.png";
import Swift from "../../shared/assets/Images/Swift.png";
import Flutter from "../../shared/assets/Images/Flutter.png";
import IOS from "../../shared/assets/Images/IOS.png";
import Kotlin from "../../shared/assets/Images/Kotlin.png";
import prodProt from "../../shared/assets/Images/prodProt.png";
import Sketch from "../../shared/assets/Images/Sketch.png";
import Figma from "../../shared/assets/Images/Figma.png";
import XD from "../../shared/assets/Images/XD.png";
import Invision from "../../shared/assets/Images/Invision.png";
import AI from "../../shared/assets/Images/AI.png";
import whoWeAre1 from "../../shared/assets/Images/whoWeAre1.png";
import TotalProjects from "../../shared/assets/Images/TotalProjects.png";
import HappyClients from "../../shared/assets/Images/HappyClients.png";
import AwardAchieved from "../../shared/assets/Images/AwardAchieved.png";
import Contact from "../../shared/assets/Images/Contact.png";
import Logo from "../../shared/assets/Images/Logo.png.svg";
import { useHttpClient } from "../../shared/hooks/http-hook";
const Layout = (props) => {
    const [images, setImages] = useState([
        {
            img: face,
            name: "Arvin Manoj",
            des: "CEO",
            text:
                "I am the Founder of SoftApps.io. A Leading Organization since 2019. Many Experts are working under this software company.",
        },
        // {
        //     img: face,
        //     name: "Ahmed Mustafa",
        //     des: "COO",
        //     text: "I am the chief of operation at SoftApps.io. I am responsible for the working strategies, and progressive outcome.",
        // },
        // {
        //     img: face,
        //     name: "Saad Sheikh",
        //     des: "Senior UI UX Designer",
        //     text: "I am the senior Graphic Designer, my area of expertise are UI and UX design for websites and Mobile Apps.",
        // },
        // {
        //     img: face,
        //     name: "Sheikh Muzammil ",
        //     des: "Full Stack Developer",
        //     text: "I am serving SoftApps.io as a full stack developer. My area of expertise are MERN and React Native.",
        // },
        // {
        //     img: face,
        //     name: "Faisal Hatila",
        //     des: "Front End Developer",
        //     text: "I am Front End Developer in this firm. My area is to build responsive layout of dynamics websites.",
        // },
        // {
        //     img: face,
        //     name: "Muhammad Zohaib",
        //     des: "SEO Executive",
        //     text: "I am an SEO Executive at Softapps.io. My job is to promote our products and manage their appearance on Search Engines.",
        // },
        // {
        //     img: face,
        //     name: "Nitin Manoj",
        //     des: "WordPress Developer",
        //     text: "I am emerging WordPress Developer of this team, Creating different sites as per my ability.",
        // },
        // {
        //     img: face,
        //     name: "Naresh Nath",
        //     des: "Junior UI UX Designer",
        //     text: "I am junior Graphic Designer in this company. My nature of job is create eye catching graphics.",
        // },
    ]);

    const [show, setShow] = useState(false);

    const pushHeight = () => {
        setShow(!show);
    };

    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [submitted, setSubmitted] = useState(false);
    const [name, setName] = useState(undefined);
    const [email, setEmail] = useState(undefined);
    const [subject, setSubject] = useState(undefined);
    const [message, setMessage] = useState(undefined);
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [subjectError, setSubjectError] = useState(false);
    const [messageError, setMessageError] = useState(false);

    const submitContactFormHandler = async () => {
        let errors = false;
        if (!name || (name && name.length < 1)) {
            errors = true;
            setNameError(true);
        } else {
            setNameError(false);
        }
        if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
            errors = true;
            setEmailError(true);
        } else setEmailError(false);
        if (!subject || (subject && subject.length < 5)) {
            errors = true;
            setSubjectError(true);
        } else setSubjectError(false);
        if (!message || (message && message.length < 10)) {
            errors = true;
            setMessageError(true);
        } else setMessageError(false);
        if (errors) return;
        try {
            const responseData = await sendRequest(
                `${process.env.REACT_APP_BACKEND_URL}/contact`,
                "POST",
                {
                    "Content-Type": "application/json",
                },
                JSON.stringify({ name, email, subject, message }),
            );
            console.log("responseData", responseData);
            if (responseData) {
                setSubmitted(true);
            }
        } catch (error) {}
    };

    //     <div className={[classes.MobileNavigation, show && classes.height].join(" ")}>
    //     <MobileNavLinks logoutHandler={logoutHandler} loginShowHandler={loginShowHandler} onClick={pushHeight} />
    // </div>

    let content0 = (
        <div id="home" className={classes.Header}>
            <div className={classes.HeaderContainer}>
                <div className={classes.HeaderContainerLogo}>
                    <img src={Logo} />
                </div>
                <div onClick={pushHeight} className={classes.HeaderBurger}>
                    <span className={[show && classes.topDiv]}></span>
                    <span className={[show && classes.middleDiv]}></span>
                    <span className={[show && classes.bottomDiv]}> </span>
                </div>
            </div>
            <div className={[classes.HeaderMenu, show && classes.height].join(" ")}>
                <p onClick={pushHeight}>
                    <a style={{ display: show ? "block" : "none" }} href="#home">
                        Home
                    </a>
                </p>
                <p onClick={pushHeight}>
                    <a style={{ display: show ? "block" : "none" }} href="#services">
                        Services
                    </a>
                </p>
                <p onClick={pushHeight}>
                    <a style={{ display: show ? "block" : "none" }} href="#portfolio">
                        Portfolio
                    </a>
                </p>
                <p onClick={pushHeight}>
                    <a style={{ display: show ? "block" : "none" }} href="#about">
                        About Us
                    </a>
                </p>
                <p onClick={pushHeight}>
                    <a style={{ display: show ? "block" : "none" }} href="#contact">
                        Contact Us
                    </a>
                </p>
            </div>
        </div>
    );

    let content1 = (
        <div className={classes.Container}>
            <div className={classes.ContainerDiv}>
                <div className={classes.Left}>
                    <div className={classes.Home1}>
                        <h1>Digitalization</h1>
                        <p>MAKE YOUR FUTURE DIGITAL</p>
                        <span>
                            SoftApps.io is a Canadian-based sofware development company, with branches extended to the US and Pakistan. We
                            are a complete cycle application development company.
                        </span>
                        <div style={{ height: "90px" }}>
                            <div style={{ position: "relative", cursor: "pointer" }}>
                                <a>Explore</a>
                                <img src={Play} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.Right}>
                    <div className={classes.Home2}>
                        <img src={Digital} />
                    </div>
                </div>
            </div>
        </div>
    );

    let content2 = (
        <div id="services" className={classes.Container}>
            <div className={classes.ContainerDiv}>
                <div className={classes.Left}>
                    <div className={classes.Services1}>
                        <p>Our</p>
                        <h1>SERVICES</h1>
                        <span>
                            But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I
                            will give you a complete account of the system, and.
                        </span>
                        {/* <a onClick={() => props.exploreFunctionHandler("services")}>Explore</a> */}
                        <a onClick={() => {}}>Explore</a>
                    </div>
                </div>
                <div className={classes.Right}>
                    <div className={classes.Services2}>
                        <div className={classes.Services2_Container}>
                            <Carousel width={"100%"} showThumbs={false} showIndicators={false} showStatus={false} showArrows={false}>
                                {images.map((i) => (
                                    <div className={classes.Services2_Container_Team}>
                                        <div>
                                            <img src={i.img} />
                                        </div>
                                        <p>{i.name}</p>
                                        <p>{i.des}</p>
                                        <p>{i.text}</p>
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    let content3 = (
        <div className={classes.Container}>
            <div className={classes.ContainerDiv}>
                <div className={classes.Services3}>
                    <h1>A better team with</h1>
                    <p>good services</p>
                    <span>
                        But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will
                        give you a complete account of the system, and.
                    </span>
                    <a href="#contact">Get In Touch </a>
                </div>
            </div>
        </div>
    );

    let content4 = (
        <div className={classes.ContainerDiv}>
            <div className={classes.Services3}>
                <h1>Web Development</h1>
                <p>services</p>
                <span>
                    We provide both back-end and front-end development. Our teams build web applications powered by bulletproof code, with
                    stunning interfaces based on responsive web design.
                </span>
            </div>
        </div>
    );
    let content5 = (
        <div className={classes.Container}>
            <div className={classes.SingleContainerDiv}>
                <div className={classes.TechStack_Container}>
                    <div className={classes.TechStack}>
                        <div>
                            <img src={REACTJS} />
                        </div>
                        <span>React JS</span>
                    </div>
                    <div className={classes.TechStack}>
                        <div>
                            <img src={NODEJS} />
                        </div>
                        <span>Node JS</span>
                    </div>
                    <div className={classes.TechStack}>
                        <div>
                            <img src={ANGULAR} />
                        </div>
                        <span>Angular JS</span>
                    </div>
                </div>
                <div className={classes.TechStack_Container}>
                    <div className={classes.TechStack}>
                        <div>
                            <img src={PYTHON} />
                        </div>
                        <span>Python</span>
                    </div>
                    <div className={classes.TechStack}>
                        <div>
                            <img src={HTMLCSS} />
                        </div>
                        <span>HTML CSS</span>
                    </div>
                    <div className={classes.TechStack}>
                        <div>
                            <img src={wordpress} />
                        </div>
                        <span>WordPress</span>
                    </div>
                </div>
            </div>
        </div>
    );

    let content6 = (
        <div className={classes.ContainerDiv}>
            <div className={classes.Services3}>
                <h1>Mobile Development</h1>
                <p>services</p>
                <span>
                    Smartphones, tablets, wearables - follow your users where they are with carefully crafted mobile apps. Reach customers
                    via Android, iOS, or cross-platform solutions.
                </span>
            </div>
        </div>
    );

    let content7 = (
        <div className={classes.Container}>
            <div className={classes.SingleContainerDiv}>
                <div className={classes.TechStack_Container}>
                    <div className={classes.TechStack}>
                        <div>
                            <img src={IOS} />
                        </div>
                        <span>IOS</span>
                    </div>
                    <div className={classes.TechStack}>
                        <div>
                            <img src={Swift} />
                        </div>
                        <span>Swift</span>
                    </div>
                    <div className={classes.TechStack}>
                        <div>
                            <img src={Android} />
                        </div>
                        <span>Android</span>
                    </div>
                </div>
                <div className={classes.TechStack_Container}>
                    <div className={classes.TechStack}>
                        <div>
                            <img src={Kotlin} />
                        </div>
                        <span>Kotlin</span>
                    </div>
                    <div className={classes.TechStack}>
                        <div>
                            <img src={Flutter} />
                        </div>
                        <span>Flutter</span>
                    </div>
                    <div className={classes.TechStack}>
                        <div>
                            <img src={REACTJS} />
                        </div>
                        <span>React Native</span>
                    </div>
                </div>
            </div>
        </div>
    );
    let content8 = (
        <div className={classes.ContainerDiv}>
            <div className={classes.Services3}>
                <h1>Product Design</h1>
                <p>services</p>
                <span>
                    Great code deserves an equally stunning visual representation, and this is what we deliver. Our Product Design team
                    combines beautiful interfaces with captivating user experience.
                </span>
            </div>
        </div>
    );

    let content9 = (
        <div className={classes.Container}>
            <div className={classes.SingleContainerDiv}>
                <div className={classes.TechStack_Container}>
                    <div className={classes.TechStack}>
                        <div>
                            <img src={XD} />
                        </div>
                        <span>Adobe XD</span>
                    </div>
                    <div className={classes.TechStack}>
                        <div>
                            <img src={AI} />
                        </div>
                        <span>Illustrator</span>
                    </div>
                    <div className={classes.TechStack}>
                        <div>
                            <img src={AI} />
                        </div>
                        <span>Photoshop</span>
                    </div>
                </div>
                <div className={classes.TechStack_Container}>
                    <div className={classes.TechStack}>
                        <div>
                            <img src={Sketch} />
                        </div>
                        <span>Sketch</span>
                    </div>
                    <div className={classes.TechStack}>
                        <div>
                            <img src={Invision} />
                        </div>
                        <span>inVision</span>
                    </div>
                    <div className={classes.TechStack}>
                        <div>
                            <img src={Figma} />
                        </div>
                        <span>Figma</span>
                    </div>
                </div>
            </div>
        </div>
    );

    let content10 = (
        <div id="portfolio" className={classes.Container}>
            <div className={classes.SingleContainerDiv}>
                <div className={classes.Services1}>
                    <p>Our</p>
                    <h1>PORTFOLIO</h1>
                    <span>
                        But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will
                        give you a complete account of the system, and.
                    </span>
                    {/* <a onClick={() => props.exploreFunctionHandler("services")}>Explore</a> */}
                    <a onClick={() => {}}>Explore</a>
                </div>
            </div>
        </div>
    );
    let content11 = (
        <div id="about" className={classes.Container}>
            <div className={classes.SingleContainerDiv}>
                <div className={classes.Services1}>
                    <h1>About Us</h1>
                    <span>
                        But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will
                        give you a complete account of the system, and.
                    </span>
                    {/* <a onClick={() => props.exploreFunctionHandler("services")}>Explore</a> */}
                </div>
            </div>
        </div>
    );
    let content12 = (
        <div className={classes.Container}>
            <div className={classes.SingleContainerDiv}>
                <h1 style={{ fontSize: "1.5rem" }}>Who We Are</h1>
                <div style={{ width: "100%", marginTop: "20px", marginBottom: "60px" }}>
                    <img style={{ width: "100%" }} src={whoWeAre1} />
                </div>
                <p style={{ fontSize: ".8rem", textAlign: "justify" }}>
                    <strong>SoftApps.io</strong> is a Canadian-based sofware development company, with branches extended to the US and
                    Pakistan. We are a complete cycle application development company, starting from scratch, leading to the initial idea,
                    landing to application design, providing quality assurance examination and deployment along with further maintenance.
                </p>
                <h1 style={{ fontSize: "1.5rem", margin: "20px 0" }}>Why Us?</h1>
                <p style={{ fontSize: ".8rem", textAlign: "justify" }}>
                    <strong>We are an off-shore software agency, having our approach to the US and Pakistan. </strong>
                </p>
                <p style={{ fontSize: ".8rem", textAlign: "justify" }}>
                    We aim to provide innovative and creative solutions by doing an in-depth analysis of your problem. We started this
                    company with a mission to become one of the top leading IT Solution Companies.
                </p>
                <p style={{ fontSize: ".8rem", alignSelf: "flex-start", marginTop: "20px" }}>
                    <strong>24*7 Live Support </strong>
                </p>
                <p style={{ fontSize: ".8rem", alignSelf: "flex-start" }}>
                    Always there for you. One of our representative will always here to solve your queries.
                </p>
                <p style={{ fontSize: ".8rem", alignSelf: "flex-start" }}>
                    <strong>BEST ROI Techniques</strong>
                </p>
                <p style={{ fontSize: ".8rem", alignSelf: "flex-start" }}>
                    Your success is the most incredible asset we enjoy. Softapps.io team has always grown with the modernizing era.
                </p>
            </div>
        </div>
    );

    let content13 = (
        <div className={classes.TotalProjects}>
            <div className={classes.TotalProjectsContainer}>
                <div className={classes.TotalProjectsContainer_Item}>
                    <div className={classes.TotalProjectsContainer_Item_Image}>
                        <img style={{ width: "100%" }} src={TotalProjects} />
                    </div>
                    <p>Total Projects</p>
                    <p>+21</p>
                </div>
                <div className={classes.TotalProjectsContainer_Item}>
                    <div className={classes.TotalProjectsContainer_Item_Image}>
                        <img style={{ width: "100%" }} src={HappyClients} />
                    </div>
                    <p>Happy Clients</p>
                    <p>+113</p>
                </div>
                <div className={classes.TotalProjectsContainer_Item}>
                    <div className={classes.TotalProjectsContainer_Item_Image}>
                        <img style={{ width: "100%" }} src={AwardAchieved} />
                    </div>
                    <p>Awards</p>
                    <p>+25</p>
                </div>
            </div>
        </div>
    );

    let content14 = (
        <div id="contact" className={classes.Container}>
            <div className={classes.ContainerDiv}>
                <div className={classes.Contact1}>
                    <h1>
                        Contact <span style={{ color: "black" }}>Us!</span>
                    </h1>
                    <p>
                        But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will
                        give you a complete account of the system, and.
                    </p>
                </div>
            </div>
            <div className={classes.ContainerDiv}>
                {submitted ? (
                    <p>Thank you for contacting us, we will get back to you shortly.</p>
                ) : (
                    <div className={classes.Form}>
                        <div className={classes.FormElement}>
                            <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                            {nameError && <p>Please, enter a valid name</p>}
                        </div>
                        <div className={classes.FormElement}>
                            <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            {emailError && <p>Please, enter a valid email</p>}
                        </div>
                        <div className={classes.FormElement} value={subject} onChange={(e) => setSubject(e.target.value)}>
                            <input placeholder="Subject" />
                            {subjectError && <p>Please, enter a valid subject</p>}
                        </div>
                        <div className={classes.FormElement}>
                            <textarea
                                rows={5}
                                placeholder="Type Your Message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                            {messageError && <p>Please, enter a valid message</p>}
                        </div>
                        <a onClick={() => submitContactFormHandler()}>Submit</a>
                    </div>
                )}
            </div>
        </div>
    );

    let content15 = (
        <div className={classes.Container}>
            <div style={{ width: "100%" }}>
                <img style={{ width: "100%" }} src={Contact} />
            </div>
        </div>
    );

    let content16 = (
        <div style={{ backgroundColor: "#2a2a71", width: "100%", padding: "1rem 0", display: "flex", justifyContent: "center" }}>
            <img className={classes.LogoFooter} src={Logo} />
        </div>
    );

    return (
        <div className={classes.Layout}>
            {content0}
            {content1}
            {content2}
            {content3}
            {content4}
            {content5}
            {content6}
            {content7}
            {content8}
            {content9}
            {content10}
            {content11}
            {content12}
            {content13}
            {content14}
            {content15}
            {content16}
            {/* <div className={classes.Container}>
                <div className={classes.ContainerDiv}>
                    <div className={classes.Left}></div>
                    <div className={classes.Right}></div>
                </div>
            </div> */}
        </div>
    );
};

export default Layout;
