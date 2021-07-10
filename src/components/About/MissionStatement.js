import { useState, useEffect } from "react";
import "./MissionStatement.scss";
import image from '../../images/mission.svg';
const MissionStatement = () => {
    return (
        <div class="statement">
            <div class="statement__image"><img src={image}></img></div>
            <div class="statement__description">
                <div class="statement__description__title"><h1>Our mission</h1></div>
                <div class="statement__description__content">
                    Our team at INJECT DevOps, are honoured to develop a cutting edge application that 
                    utilises the renowned ASUS Tinker Edge R device. The team comprises seven high achieving 
                    final year computer science and information technology undergraduate students. Our members
                    study different majors which greatly improves our capabilities and contributions
                    as a team and have worked on numerous projects together in which we have
                    achieved great results. We aim to provide the most feasible solution to home owners and 
                    businesses and we strive to produce a high quality product.
                    <br></br>
                    <br></br>
                    The project aims to deliver a product that will have advanced facial recognition
                    capabilities. We envision our product to have limitless posiblities, we hope the application
                    can be adapted for many environments. The INJECT DevOps team is excited to be working with Tinker Edge R, 
                    and our experience as a team, have allowed us to start experimenting with facial recognition and
                    brainstorm development ideas.
                </div>
            </div>
        </div>
    )
}

export default MissionStatement