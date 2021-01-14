import React from "react";
import "../style/Services.css";
import person from "../images/Ellipse 63.png";
import AI from "../images/AI.png";
import Android from "../images/Android.png";
import diamond from "../images/dianond.png";
import ang from "../images/ANGYLAR.png";
import { useState } from "react";
import ServicesImage from "../images/Services.png";

const team = [
    {
        id: 1,
        name: "Hafeez Qadri",
        desig: "CEO 1",
        text: "Quality is always there. They are very professional",
        image: person,
    },
    { id: 2, name: "Hafeez Qadri", desig: "CEO 2", text: "Quality is always there. They are very professional", image: ang },
    {
        id: 3,
        name: "Hafeez Qadri",
        image: AI,
        desig: "CEO 3",
        text: "Quality is always there. They are very professional",
    },
    {
        id: 4,
        name: "Hafeez Qadri",
        image: Android,
        desig: "CEO 4",
        text: "Quality is always there. They are very professional",
    },
    {
        id: 5,
        image: diamond,
        name: "Hafeez Qadri",
        desig: "CEO 5   ",
        text: "Quality is always there. They are very professional",
    },
];

function Team() {
    // const [index, setIndex] = useState(0);

    // const handleRandom = () => {
    //     setIndex(Math.round(Math.random() * (team.length - 1)));
    // };

    // const handleIncrement = () => {
    //     if (index === team.length - 1) {
    //         setIndex(0);
    //     } else {
    //         setIndex(index + 1);
    //     }
    // };
    // const handleDecrement = () => {
    //     if (index === 0) {
    //         setIndex(team.length - 1);
    //     } else {
    //         setIndex(index - 1);
    //     }
    // };

    return (
        <div class="row services">
            <div class="our-services">
                <h2 class="our-heading">OUR</h2>
                <h1 class="services-heading">SERVICES</h1>
                <p class="digitia-para">
                    But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give
                    you a complete account of the system, and.
                </p>
                <a href="#testimonals" class="button btn-explore">
                    Explore
                </a>
            </div>
            <img className="services__image" src={ServicesImage} />
            {/* <div className="">

            </div> */}
            {/* <section className="section">
                <img src={team[index].image} alt="" />
                <h3>{team[index].name}</h3>
                <h2>{team[index].desig}</h2>
                <p>
                    But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give
                </p>
                <div className="arrow">
                    <button onClick={handleDecrement} className="left">
                        {"<"}
                    </button>
                    <button onClick={handleIncrement} className="right">
                        {">"}
                    </button>
                </div>
                <button onClick={handleRandom}>Random</button>
            </section> */}
        </div>
    );
}

export default Team;
