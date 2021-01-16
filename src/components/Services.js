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
