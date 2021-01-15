import React from "react";
import "../style/Services.css";

function Services({ title, sub, para, image, isLarge, id }) {
    return (
        <div class="services" id={id}>
            <div className="our__services">
                <h2>{sub}</h2>
                <h1>{title}</h1>
                <p>{para}</p>
                {/* <Link> */}
                <button>Explore</button>
                {/* </Link> */}
            </div>
            {isLarge ? (
                <div className={"services__image"}>
                    <img src={image} />
                </div>
            ) : (
                <img src={image} />
            )}
        </div>
    );
}

export default Services;

{
    /* <div class="row services">
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
</div> */
}
