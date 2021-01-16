import React, { useCallback, useContext, useEffect, useRef, useState } from "react";
import classes from "./MainPage.module.css";
import Home from "./Home";
import Services from "./Services";
import About from "./About";
import Portfolio from "./Portfolio";
import Careers from "./Careers";
import Contact from "./Contact";
import Contact2 from "./Contact2";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useSlide } from "../../../shared/hooks/slide-hook";
import { SlideContext } from "../../../shared/context/slide-context";

const PortfolioSection = React.lazy(() => import("../Pages/Portfolio"));
const AboutSection = React.lazy(() => import("../Pages/About"));
const CareerSection = React.lazy(() => import("../Pages/Career"));
const ServicesSection = React.lazy(() => import("../Pages/Services"));

const MainPage = (props) => {
    // const { exploreState, setSlideNumberHandler, slideNumber, setExploreStateHandler } = useContext(SlideContext);
    // const { exploreState, setExploreStateHandler } = useSlide();
    const { exploreState, exploreStateHandler, setNextSlideNumberHandler, setPreviousSlideNumberHandler, slideNumber } = props;

    const exploreFunctionHandler = (id) => {
        exploreStateHandler(id);
    };

    let content;

    if (!exploreState) {
        content = (
            <Carousel selectedItem={slideNumber} showThumbs={false} showIndicators={false} showStatus={false} showArrows={false}>
                <div className={classes.MainPage}>
                    <Home exploreFunctionHandler={exploreFunctionHandler} />
                </div>
                <div className={classes.MainPage}>
                    <Services exploreFunctionHandler={exploreFunctionHandler} />
                </div>
                <div className={classes.MainPage}>
                    <About exploreFunctionHandler={exploreFunctionHandler} />
                </div>
                <div className={classes.MainPage}>
                    <Portfolio exploreFunctionHandler={exploreFunctionHandler} />
                </div>
                <div className={classes.MainPage}>
                    <Careers exploreFunctionHandler={exploreFunctionHandler} />
                </div>
                <div className={classes.MainPage}>
                    <Contact exploreFunctionHandler={exploreFunctionHandler} />
                </div>
                <div className={classes.MainPage}>
                    <Contact2 />
                </div>
            </Carousel>
        );
    }

    if (exploreState === "portfolio") {
        content = (
            <div className={classes.MainPage}>
                <PortfolioSection />
            </div>
        );
    }

    if (exploreState === "about") {
        content = (
            <div className={classes.MainPage}>
                <AboutSection />
            </div>
        );
    }

    if (exploreState === "career") {
        content = (
            <div className={classes.MainPage}>
                <CareerSection />
            </div>
        );
    }
    if (exploreState === "services") {
        content = (
            <div className={classes.MainPage}>
                <ServicesSection />
            </div>
        );
    }

    // Change Here
    return content;

    return (
        <div className={classes.MainPage}>
            <ServicesSection />
        </div>
    );
};

export default MainPage;
