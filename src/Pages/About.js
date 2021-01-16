import React from "react";
import Ecommerce from "../../../shared/assets/Images/ecommerce.png";
import Web from "../../../shared/assets/Images/Web.png";
import WhoWeAreLeftCircle from "../../../shared/assets/Images/whoWeAreLeftCircle.png";
import WhyUsLeftHalfCircle from "../../../shared/assets/Images/whyUsLeftHalfCircle.png";
import WhoWeAreLeft from "../../../shared/assets/Images/whoWeAreLeft.png";
import BestQuality from "../../../shared/assets/Images/BestQuality.png";
import AwardAchieved from "../../../shared/assets/Images/AwardAchieved.png";
import HappyClients from "../../../shared/assets/Images/HappyClients.png";
import TotalProjects from "../../../shared/assets/Images/TotalProjects.png";
import T24x7LiveSupport from "../../../shared/assets/Images/24x7LiveSupport.png";
import BestROITechniques from "../../../shared/assets/Images/BestROITechniques.png";
import ExperiencedProfessionals from "../../../shared/assets/Images/ExperiencedProfessionals.png";
import ResultOrientedProjects from "../../../shared/assets/Images/ResultOrientedProjects.png";
import classes from "./About.module.css";
import Footer from "../Navigations/Footer";
import ContactInfo from "../Navigations/ContactInfo";

const About = (props) => {
    const services = [
        {
            id: 1,
            title: "Ecommerce Development",
            image: Ecommerce,
        },
        {
            id: 2,
            title: "Web Development",
            image: Web,
        },
        {
            id: 3,
            title: "App Development",
            image: Ecommerce,
        },
        {
            id: 4,
            title: "Prototype Design",
            image: Web,
        },
    ];
    const achievements = [
        {
            id: 1,
            image: TotalProjects,
            title: "Total Projects",
            qty: 21,
        },
        {
            id: 2,
            image: HappyClients,
            title: "Happy Clients",
            qty: 113,
        },
        {
            id: 1,
            image: AwardAchieved,
            title: "Award Achieved",
            qty: 25,
        },
    ];
    return (
        <div className={classes.About}>
            <div className={classes.whatWeDo}>
                <div className={classes.whatWeDoHeading}>
                    <h2>WHAT WE DO</h2>
                </div>
                <div className={classes.ourServices}>
                    <div style={{ display: "flex" }}>
                        {services.map((service, i) => {
                            return (
                                <div key={i} className={classes.ourServicesItemDiv}>
                                    <div className={classes.ourServicesItemDivImageDiv}>
                                        <img src={service.image} />
                                    </div>
                                    <div style={{ display: "flex", justifyContent: "center" }}>
                                        <p className={classes.ourServicesItemDivText}>{service.title}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className={classes.whoWeAre}>
                <div className={classes.whoWeAreHeading}>
                    <h2>WHO ARE WE?</h2>
                </div>
                <div className={classes.whoWeAreContentMainDiv}>
                    <div className={classes.whoWeAreContentLeftDiv}>
                        <div className={classes.whoWeAreContentLeftDivCircleImageDiv}>
                            <img src={WhoWeAreLeftCircle} />
                        </div>
                        <div className={classes.whoWeAreContentLeftDivTeamImageDiv}>
                            <img src={WhoWeAreLeft} />
                        </div>
                    </div>
                    <div className={classes.whoWeAreContentRighttDiv}>
                        <p>
                            <span style={{ fontWeight: 600, fontSize: "19px" }}>SoftApps.io</span> is a Canadian-based sofware development
                            company, with branches extended to the US and Pakistan. We are a complete cycle application development company,
                            starting from scratch, leading to the initial idea, landing to application design, providing quality assurance
                            examination and deployment along with further maintenance.
                        </p>
                    </div>
                </div>
            </div>
            <div className={classes.whyUs}>
                <div className={classes.whyUsHeading}>
                    <h2>WHY US?</h2>
                </div>
                <div className={classes.whyUsContentMainDiv}>
                    <div className={classes.whyUsContentLeftDiv}>
                        <div className={classes.whyUsContentLeftDivHalfCircleImageDiv}>
                            <img src={WhyUsLeftHalfCircle} />
                        </div>
                        <div>
                            <div>
                                <div>
                                    <h3>We are an off-shore software agency, having our approach to the US and Pakistan.</h3>
                                </div>
                                <div>
                                    <p>
                                        We aim to provide innovative and creative solutions by doing an in-depth analysis of your problem.
                                        We started this company with a mission to become one of the top leading IT Solution Companies.
                                    </p>
                                </div>
                            </div>
                            <div style={{ marginTop: "3rem" }}>
                                <div>
                                    <h3>Best Quality</h3>
                                </div>
                                <div>
                                    <p>
                                        We transform your ideas into digital means. A user-friendly and engaging interface will help you in
                                        grabbing clients
                                    </p>
                                </div>
                            </div>
                            <div style={{ marginTop: "2rem" }}>
                                <div>
                                    <h3>Result Oriented Projects</h3>
                                </div>
                                <div>
                                    <p>
                                        We believe in result. We assist our clients through our platform while building creative solutions
                                        for consistent returns for our clients
                                    </p>
                                </div>
                            </div>
                            <div style={{ marginTop: "2rem" }}>
                                <div>
                                    <h3>Experienced Professionals</h3>
                                </div>
                                <div>
                                    <p>
                                        Our dedicated team has a vast experience regarding the services we provide. We take a fresh start
                                        for our every project, toil on it, and come up with consistent results.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.whyUsContentRighttDiv}>
                        <div className={classes.whyUsContentRighttDivImagesTilesMainDiv}>
                            <div className={classes.whyUsContentRighttDivImagesTilesDiv}>
                                <img src={BestQuality} alt="Best Quality" />
                            </div>
                            <div style={{ transform: "translate(-50px,70px)" }} className={classes.whyUsContentRighttDivImagesTilesDiv}>
                                <img src={T24x7LiveSupport} alt="24 x 7 Support" />
                            </div>
                            <div style={{ transform: "translate(-100px,0px)" }} className={classes.whyUsContentRighttDivImagesTilesDiv}>
                                <img src={ResultOrientedProjects} alt="Result Oriented Projects" />
                            </div>
                            <div style={{ transform: "translate(-150px,70px)" }} className={classes.whyUsContentRighttDivImagesTilesDiv}>
                                <img src={BestROITechniques} alt="Best ROI" />
                            </div>
                            <div style={{ transform: "translate(-200px,0px)" }} className={classes.whyUsContentRighttDivImagesTilesDiv}>
                                <img src={ExperiencedProfessionals} alt="Experienced" />
                            </div>
                        </div>
                        <div style={{ transform: "translateY(80px)" }}>
                            <div>
                                <h3>24x7 Live Support</h3>
                                <p>Always there for you. One of our representative will always here to solve your queries.</p>
                            </div>
                            <div>
                                <h3>Best ROI Techniques</h3>
                                <p>
                                    Your success is the most incredible asset we enjoy. Softapps.io team has always grown with the
                                    modernizing era.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        // transform: "translateY(-190px)",
                        //fucking style
                    }}
                >
                    <button
                        style={{
                            backgroundColor: "#362869",
                            color: "#fff",
                            fontSize: "25px",
                            border: "none",
                            borderRadius: "5px",
                            padding: "5px 15px",
                        }}
                    >
                        DEMO
                    </button>
                </div>
            </div>
            {/* <div className={classes.ourTeam}>
        <div className={classes.whyUsHeading}>
          <h2>OUR TEAM</h2>
        </div>
        <div>
          <div style={{ display: "flex" }}>
            {[...Array(5)].map((i, j) => {
              return (
                <div
                  style={{ width: "180px", height: "180px", margin: "0 15px" }}
                >
                  <img
                    style={{ maxWidth: "100%" }}
                    src={BestQuality}
                    alt="Best Quality"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div> */}
            <div className={classes.ourAchievements}>
                <div className={classes.achievementsItemsMainDiv}>
                    {achievements.map((achievement, i) => {
                        return (
                            <div className={classes.achievementsItemsDiv} key={i}>
                                <div className={classes.achievementsItemsImageDiv}>
                                    <img src={achievement.image} alt={achievement.title} />
                                </div>
                                <div>
                                    <p>{achievement.title}</p>
                                </div>
                                <div>
                                    <h1>{`+ ${achievement.qty}`}</h1>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default About;
