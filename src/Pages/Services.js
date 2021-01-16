import React, { useState } from "react";
import classes from "./Services.module.css";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import face from "../../../shared/assets/Images/face.png";
import rightArrowTeam from "../../../shared/assets/Images/rightArrowTeam.png";
import leftArrowTeam from "../../../shared/assets/Images/leftArrowTeam.png";
import whatWeb from "../../../shared/assets/Images/whatWeb.png";
import whatApp from "../../../shared/assets/Images/whatApp.png";
import whatEcommerce from "../../../shared/assets/Images/whatEcommerce.png";
import whatPrototype from "../../../shared/assets/Images/whatPrototype.png";
import webProt from "../../../shared/assets/Images/webProt.png";
import REACTJS from "../../../shared/assets/Images/REACTJS.png";
import wordpress from "../../../shared/assets/Images/wordpress.png";
import PYTHON from "../../../shared/assets/Images/PYTHON.png";
import NODEJS from "../../../shared/assets/Images/NODE JS.png";
import HTMLCSS from "../../../shared/assets/Images/HTML CSS.png";
import ANGULAR from "../../../shared/assets/Images/ANGULAR.png";
import appProt from "../../../shared/assets/Images/appProt.png";
import Android from "../../../shared/assets/Images/Android.png";
import Swift from "../../../shared/assets/Images/Swift.png";
import Flutter from "../../../shared/assets/Images/Flutter.png";
import IOS from "../../../shared/assets/Images/IOS.png";
import Kotlin from "../../../shared/assets/Images/Kotlin.png";
import prodProt from "../../../shared/assets/Images/prodProt.png";
import Sketch from "../../../shared/assets/Images/Sketch.png";
import Figma from "../../../shared/assets/Images/Figma.png";
import XD from "../../../shared/assets/Images/XD.png";
import Invision from "../../../shared/assets/Images/Invision.png";
import AI from "../../../shared/assets/Images/AI.png";
import services1 from "../../../shared/assets/Images/services (1).png";
import services2 from "../../../shared/assets/Images/services (2).png";
import services3 from "../../../shared/assets/Images/services (3).png";
import whatWeDo3 from "../../../shared/assets/Images/whatWeDo3.png";
import Footer from "../Navigations/Footer";
import { NavLink } from "react-router-dom";

const Services = (props) => {
    const [selectedSlide, setSelectedSlide] = useState(0);
    const [images, setImages] = useState([
        { img: face, name: "Muzammil", des: "MERN Stack Dev", text: "Quality is always there. They are very professional" },
        { img: face, name: "Faisal", des: "Front End Dev", text: "Quality is always there. They are very professional" },
    ]);

    const nextSlide = () => {
        if (selectedSlide === images.length - 1) {
            setSelectedSlide(0);
            return;
        }
        setSelectedSlide((prState) => (prState += 1));
    };
    const previousSlide = () => {
        if (selectedSlide === 0) {
            setSelectedSlide(images.length - 1);
            return;
        }
        setSelectedSlide((prState) => (prState -= 1));
    };

    return (
        <div className={classes.Services}>
            <div className={classes.ServicesTeam}>
                <div className={classes.ServicesTeam_Left}>
                    <div className={classes.ServicesTeam_Left_Container}>
                        <Carousel
                            selectedItem={selectedSlide}
                            showThumbs={false}
                            showIndicators={false}
                            showStatus={false}
                            showArrows={false}
                        >
                            {images.map((i) => (
                                <div className={classes.ServicesTeam_Left_Container_Team}>
                                    <img src={i.img} />
                                    <p>{i.name}</p>
                                    <p>{i.des}</p>
                                    <p>{i.text}</p>
                                </div>
                            ))}
                        </Carousel>
                        <div className={classes.ServicesTeam_Left_Container_Arrows}>
                            <img onClick={() => previousSlide()} src={leftArrowTeam} />
                            <img onClick={() => nextSlide()} src={rightArrowTeam} />
                        </div>
                    </div>
                </div>
                <div className={classes.ServicesTeam_Right}>
                    <h1>A better team with</h1>
                    <p>good services</p>
                    <span>
                        But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will
                        give you a complete account of the system, and.
                    </span>
                    <a href="#contact">Get In Touch </a>
                </div>
            </div>
            <div className={classes.WhatWeDo}>
                <div className={classes.WhatWeDo_Heading}>
                    <h1>WHAT WE DO</h1>
                </div>
                <div className={classes.WhatWeDo_Container}>
                    <div className={classes.WhatWeDo_Container_Block}>
                        <div>
                            <img src={whatEcommerce} />
                        </div>
                        <h1>E-Commerce</h1>
                        <h1>Development</h1>
                    </div>
                    <div className={classes.WhatWeDo_Container_Block}>
                        <div>
                            <img src={whatWeb} />
                        </div>
                        <h1>Web</h1>
                        <h1>Development</h1>
                    </div>
                    <div className={classes.WhatWeDo_Container_Block}>
                        <div>
                            <img src={whatApp} />
                        </div>
                        <h1>App</h1>
                        <h1>Development</h1>
                    </div>
                    <div className={classes.WhatWeDo_Container_Block}>
                        <div>
                            <img src={whatPrototype} />
                        </div>
                        <h1>Prototype</h1>
                        <h1>Design</h1>
                    </div>
                </div>
            </div>
            <div className={classes.DevelopmentContainer}>
                <NavLink to={`/blog/web-development`} className={classes.DevelopmentContainer_Left}>
                    <div className={classes.DevelopmentContainer_Left_Container}>
                        <h1>Web Development</h1>
                        <p>services</p>
                        <span>
                            We provide both back-end and front-end development. Our teams build web applications powered by bulletproof
                            code, with stunning interfaces based on responsive web design.
                        </span>
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
                </NavLink>
                <div className={classes.DevelopmentContainer_Right}>
                    <img src={webProt} />
                </div>
            </div>
            <div style={{ marginTop: "60px" }} className={classes.DevelopmentContainer}>
                <div style={{ display: "flex", justifyContent: "flex-end" }} className={classes.DevelopmentContainer_Right}>
                    <img src={appProt} />
                </div>
                <NavLink to={`/blog/mobile-development`} className={classes.DevelopmentContainer_Left}>
                    <div className={classes.DevelopmentContainer_Left_Container}>
                        <h1>Mobile Development</h1>
                        <p>services</p>
                        <span>
                            Smartphones, tablets, wearables - follow your users where they are with carefully crafted mobile apps. Reach
                            customers via Android, iOS, or cross-platform solutions.
                        </span>
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
                </NavLink>
            </div>
            <div style={{ marginTop: "60px" }} className={classes.DevelopmentContainer}>
                <NavLink to={`/blog/product-design`} className={classes.DevelopmentContainer_Left}>
                    <div className={classes.DevelopmentContainer_Left_Container}>
                        <h1>Product Design</h1>
                        <p>services</p>
                        <span>
                            Great code deserves an equally stunning visual representation, and this is what we deliver. Our Product Design
                            team combines beautiful interfaces with captivating user experience.
                        </span>
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
                </NavLink>
                <div className={classes.DevelopmentContainer_Right}>
                    <img src={webProt} />
                </div>
            </div>
            <div style={{ marginTop: "60px", marginBottom: "60px" }} className={classes.Support}>
                <div className={classes.Service_Support}>
                    <div className={classes.Service_Support_Container}>
                        <div>
                            <img src={services1} />
                        </div>
                        <h1 style={{ marginTop: "25px" }}>SEO</h1>
                    </div>
                    <div className={classes.Service_Support_Container}>
                        <div>
                            <img src={services3} />
                        </div>
                        <h1 style={{ marginTop: "25px" }}>Audio Video Production</h1>
                    </div>
                    <div className={classes.Service_Support_Container}>
                        <div>
                            <img src={services2} />
                        </div>
                        <h1 style={{ marginTop: "25px" }}>IT Support</h1>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Services;
