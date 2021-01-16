import React from "react";
import "../style/Section.css";
import PlayButton from "../images/Play Button.png";
import Digital from "../images/Digital.png";

function Section() {
    return (
        <div id="home" class="container">
            <div class="row">
                <div class="digitialization">
                    <h1 class="digi-head">Digitialization</h1>
                    <h2 class="make-your-future">MAKE YOUR FUTURE DIGITAL</h2>
                    <p class="digitia-para">
                        SoftApps.io is a Canadian-based sofware development company, with branches extended to the US and Pakistan. We are a
                        complete cycle application development company.
                    </p>
                    <img src={PlayButton} height="60px" width="60px" class="position-absolute play-img" alt="" />
                    <a href="#play-image" class="btn-explore">
                        Explore
                    </a>
                </div>
                <div class="digital-image">
                    <img src={Digital} class="img-fluid" alt="" />
                </div>
            </div>
        </div>
    );
}

export default Section;
