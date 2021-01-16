import "./App.css";
import Header from "./components/Header";
import Section from "./components/Section";
import Services from "./components/Services";
import ServicesImage from "./images/Services.png";
import AboutImage from "./images/About.png";
import PortfolioImage from "./images/Portfolio.png";
import CareeerImage from "./images/Careers.png";
import Contact from "./components/Contact";
import ContactInfo from "./components/ContactInfo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Layout from "./Layout/Layout2";

function App() {
    return (
        <Router>
            <Switch>
                <div className="App">
                    <Header />
                    <Route path="/">
                        <Section />
                        <Services
                            sub={"Our"}
                            title={"SERVICES"}
                            para={
                                "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and."
                            }
                            image={ServicesImage}
                            isLarge
                            id={"services"}
                        />
                        <Services
                            title={"ABOUT US"}
                            para={
                                "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and."
                            }
                            image={AboutImage}
                            id={"about"}
                        />
                        <Services
                            sub={"Our"}
                            title={"PORTFOLIO"}
                            para={
                                "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and."
                            }
                            image={PortfolioImage}
                            id={"portfolio"}
                        />
                        <Services
                            sub={"Build Your"}
                            title={"CAREER"}
                            para={
                                "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and."
                            }
                            id={"career"}
                            image={CareeerImage}
                        />
                        <Contact />
                        <ContactInfo />
                    </Route>
                </div>
                <Route path="/apply"></Route>
            </Switch>
        </Router>
    );
}

export default App;
