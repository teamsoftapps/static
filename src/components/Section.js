import React from "react";
import "../style/Section.css";
import PlayButton from "../images/Play Button.png";
import Digital from "../images/Digital.png";

function Section() {
    return (
        <div class="container" id="home">
            <div class="row">
                <div class="digitialization">
                    <h1 class="digi-head">Digitialization</h1>
                    <h2 class="make-your-future">MAKE YOUR FUTURE DIGITAL</h2>
                    <p class="digitia-para">
                        But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will
                        give you a complete account of the system, and.
                    </p>
                    <img src={PlayButton} height="60px" width="60px" class="position-absolute play-img" alt="" />
                    <a href="#play-image" class=" btn-explore">
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
