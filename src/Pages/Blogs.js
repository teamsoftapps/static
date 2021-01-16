import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import classes from "./Blogs.module.css";
import { Helmet } from "react-helmet";

import mobileDev from "../../../shared/assets/Images/Mobile-Development.png";
import webDev from "../../../shared/assets/Images/Web-Development.png";
import prodDesign from "../../../shared/assets/Images/Product-Design.png";
import Footer from "../Navigations/Footer";

const Blogs = (props) => {
    const [blogMode, setBlogMode] = useState(0);
    const params = useParams().id;
    const history = useHistory();

    const title = ["", "Web Development - SoftApps.io", "Mobile Development - SoftApps.io", "Product Design - SoftApps.io"];
    const sites = ["", "web-development", "mobile-development", "product-design"];

    const images = ["", webDev, mobileDev, prodDesign];
    const blogHeading = [
        "",
        "Our passionate team of developers has deep knowledge and expertise in world-class android apps reactive native",
        "We offer a team of adept, skill-full, and eager developers for your iOS React Native solutions",
        "We transform your ideas into digital means. A user-friendly and engaging interface will help you in grabbing clients",
    ];

    useEffect(() => {
        if (params === "web-development") setBlogMode(1);
        else if (params === "mobile-development") setBlogMode(2);
        else if (params === "product-design") setBlogMode(3);
        else {
            history.push("/");
            history.go("/");
        }
    }, [params]);

    let content;

    if (blogMode === 1) {
        content = (
            <div className={classes.Blog}>
                <h1 style={{ fontSize: "1.8rem" }}>Web App Development</h1>
                <p style={{ margin: "1.5rem 0", fontSize: ".95rem" }}>
                    Progressive mobile applications are in fact a combination of creative software and desktop formats. The android device
                    designers are continuously upgrading to SDKs and paradigms. Many companies interested in cellular technology find
                    innovative approaches to hit the top. In the US, there have been quite a few smartphone device creation packages. That
                    is pretty luxurious in the world and will help you use your office skills. For achieving success in the ground, you need
                    to own a professional, attractive Web App development. That’s what SoftApps.io offers. When you have a website, there
                    are no walls between success and your business.
                </p>
                <h1 style={{ fontSize: "1.8rem" }}>Website Development</h1>
                <p style={{ margin: "1.5rem 0", fontSize: ".95rem" }}>
                    However, With the era turning into achievable goals at a fast speed, there are many devices. In all of them that people
                    use and expect a smooth user experience. The protocols and standards of quality assurance are applied throughout the
                    development. SoftApps.io provides quality assurance teams use the latest automated tools the project delivered is of the
                    highest quality. Our QA experts work closely with our engineering team to churn out a streamlined product that through
                    creativity brings tangible value to your market. <br></br>
                    <br></br>Our deployment methodology is flawless and allows the developed application to perform exceptionally well. We
                    include the application services to the iTunes AppStore and GooglePlay store. We provide support services round the
                    clock after a mobile application has been delivered.
                </p>
            </div>
        );
    }

    if (blogMode === 2) {
        content = (
            <div className={classes.Blog}>
                <h1 style={{ fontSize: "1.8rem" }}>Mobile App Development</h1>
                <p style={{ margin: "1.5rem 0", fontSize: ".95rem" }}>
                    We live in an age where everyone’s got a computer in his back. About half of the world’s mobile users say “they can’t
                    survive without their mobile”Our highly qualified software engineers build device architectures that ensure the full
                    functionality of the mobile devices. It is done by following strategies that promote the lowest overheads. Mobile App
                    Development is the solution for the modern era.<br></br> <br></br>We use a mobile protection model from the initial
                    implementation level, which finds the best balance between accessibility and risk reduction. Using a user-centric
                    philosophy, we create applications with simple interfaces and outstanding functionality that offer gratifying mobile
                    experience and outshine others.
                </p>
                <h1 style={{ fontSize: "1.8rem" }}>Android Development</h1>
                <p style={{ margin: "1.5rem 0", fontSize: ".95rem" }}>
                    We code software that delivers efficiency and ensures interoperability by integrating with current infrastructures and
                    holding margin in their architecture for the potential introduction of new technology and protocols. However, For iOS
                    development, In line with Apple’s User Interface Guide, elegant and physically appealing technology principles,
                    templates, and functionalities. Premium download on apple AppStore and GooglePlay store AppStore approval as a
                    conditionality for project sign-off and final activation of payment requirement by AppStore approval
                    <br></br>
                    <br></br>
                    Our highly qualified development team designs projects with the best existing platforms on the market. They design
                    smartphone apps that are highly engaging and power-packed with features. Additionally, Our systems are structurally
                    stable and perform exceptionally. Depending on the specifications of the customer our mobile apps are built in both
                    native and hybrid platforms.
                    <br></br>
                    <br></br>
                    SoftApps.io is a globally trusted software company in Pakistan with a zeal for perfection that provides several services
                    including mobile app development services in the town. SoftApps.io does not deliver mobile apps only, but delivers
                    trust, ethics, and confidentially too! Under the umbrella of mobile app development services; we proffer Android app
                    development and iOS app development too.
                    <br></br>
                    <br></br>
                    Our highly experienced developers know how to create eye-catchy and innovative mobile apps. Our reputation in the market
                    has increased by ten-fold due to serving on time, with promised quality.
                </p>
                <h1 style={{ fontSize: "1.8rem" }}>IOS Development</h1>
                <p style={{ margin: "1.5rem 0", fontSize: ".95rem" }}>
                    In the present era, we cannot refuse the need for mobile apps for firms and businesses. According to research, people
                    spend 162 minutes daily approximately on cell phones. Mobile apps can increase business exposure and promote the
                    visibility of the firm. Concomitantly; more exposure, more sales, more revenue. Secondly, mobile apps also enable us to
                    keep track of consumer’s choices, behavior patterns, preferences, and activities. This accumulated data will help firms
                    to know about what consumer is looking for and how can they improve customer experience.
                    <br></br>
                    <br></br>
                    Moreover, mobile apps succor to create brand awareness. People tend to remember what they see repeatedly. Once if they
                    have downloaded the app, the engaging features of the app can make a customer loyal to the brand. The in-app features
                    like promotions and offers to convince the user to download the app. You can consider food apps here. Instead of
                    ordering through landlines, people prefer ordering online through apps. This is only because food apps have different
                    ongoing discounts and promotions. Moreover, This can also be counted as online marketing.
                    <br></br>
                    <br></br>
                    We as a mobile app development company hire developers that have rich experience in designing scalable, engaging apps
                    that can be accessed through different gadgets like tablets, mobile phones, and desktop. Eventually, This enables a
                    broader range of audiences to access apps.
                    <br></br>
                    <br></br>
                    Our professional developers will begin with a clean slate. Prioritize your requirements and suggest to you what can be
                    done to get even better results through demos and meetings. You will receive will updates at every step as we believe in
                    transparent communication. Once the app is ready, we’ll give it a test drive before launching it for the users.
                    <br></br>
                    <br></br>
                    SoftApps.io listed among Pakistan top software houses due to its professionalism, quality of work, and commitments. We
                    offer many other services too. Mobile App development is a chunk of our services. The rest piece is huge. You can
                    request a quote now!
                </p>
            </div>
        );
    }

    if (blogMode === 3) {
        content = (
            <div className={classes.Blog}>
                <h1 style={{ fontSize: "1.8rem" }}>UI and UX Designing</h1>
                <p style={{ margin: "1.5rem 0", fontSize: ".95rem" }}>
                    We provide a team of highly experienced, professional, and devoted UI and UX Prototypes & Designing. They work on the
                    overall functionality, system, and feel of the website. The primary goal of our developers is to provide user
                    satisfaction and user engagement. Our UI and UX Designing experts have in-depth knowledge of aesthetic interfaces
                    keeping creativity in the main course. They conduct extensive research and come up with UI and UX Prototypes & Designs
                    strategies based on your goals or target.<br></br> <br></br>Our developers further possess a keen knowledge about CSS
                    extension languages (Less, Sass), HTML5, MongoDB, plugins, node packages, and CSS preprocessor tool. They are very
                    proficient in using the command line and Git version control. Creation of a user friendly, yet the engaging interface is
                    a mutual goal of both; i.e. UI and UX Designing. Our architecture department has developed various types of applications
                    and operating structures for all the major industries. You can rely on their diligent study of the root cause, the
                    knowledge of system architecture and animation design, a detailed post-mortem, and more. You’ll get a full quality
                    product which is similarly stunning and simple to use on all platforms.
                </p>
                <h1 style={{ fontSize: "1.5rem" }}>UI and UX Designing </h1>
                <p style={{ margin: "1.5rem 0", fontSize: ".95rem" }}>
                    Our developers have a huge collection of themes and ideas. You can scroll through them and select your favorite one. On
                    the other hand, if you have any design in your mind, you can suggest that and our savvy pros would continue with your
                    suggested design. It all begins with a brief. You wave a signal to us and consider it done. We respect the validated
                    philosophy of UI / UX, but at the same time we embrace revolutionary UI / UX principles and in the area of Artificially
                    Intelligent, Virtual and Augmented Reality, and 3D Animation constantly grow. Our UI / UX design services express the
                    meaning of the company, enhancing and turning the business-to-customer experience into beneficial market opportunities.
                    <br></br>
                    <br></br>
                    In a nutshell, UI and UX designing is not only about creating an ornamental interface but also about the back end. A
                    good designer would always keep the application’s presentation and usability in mind. SoftApp.io isn’t only about
                    delivering apps, but it delivers trust and a whole new level of user experience. Clients want to develop your product
                    with a team mapping out a simple design plan, hitting targets, and achieving a spot-on end result? Switch to UI and UX
                    tools provided by SoftApps.io, Our design team is a small design lab inside a big tech firm that lets you rapidly and
                    efficiently create an interactive app.
                </p>
            </div>
        );
    }

    return (
        <div className={classes.Blogs}>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{title[blogMode]}</title>
                <link rel="canonical" href={`https://www.softapps.io/blog/${sites[blogMode]}`} />
            </Helmet>
            <div style={{ backgroundImage: `url(${images[blogMode]})` }} className={classes.BlogHeader}>
                <div className={classes.BlogHeaderOverlay}>
                    <div className={classes.BlogHeaderHeading}>
                        <h1>{blogHeading[blogMode]}</h1>
                    </div>
                </div>
            </div>
            {content}
            <Footer />
        </div>
    );
};
export default Blogs;
