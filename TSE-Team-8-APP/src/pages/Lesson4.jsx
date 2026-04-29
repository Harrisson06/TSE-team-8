// LAST EDITED BY: QUINN CARR
// DATE: 28/04/2026

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Lesson4Styles.css';
import topImg from "../assets/Lesson4Img.png";
import bottomImg from "../assets/Lesson4Img2.png";

export default function Lesson4(){
    const [showOverlay, setShowOverlay] = useState(true);
    const [activeOverlay, setActiveOverlay] = useState(null);
    const navigate = useNavigate();

    return (
        <div className = "lesson4-page">
            <div className="top-half">
                <img src={topImg} alt="" />
            </div>

            <div className="bottom-half">
                <img src={bottomImg} alt="" />
            </div>

            {showOverlay && (
                <div                 
                    className="information-overlay"
                    onClick={() => setShowOverlay(false)}
                >
                    <p>
                        The University also creates some amazing robots, <br></br>
                        tap the buttons to find out more!<br></br>
                        -- Tap to hide this message --
                    </p>
                </div>
            )}

            {activeOverlay && (
                <div className="overlay" onClick={() => !showOverlay && setActiveOverlay(null)}>
                    {activeOverlay === "robot" && (
                        <p>
                            The university creates cool robots that can assist in agriculture.
                            Their robots can identify harvest ready crops, identify disease and
                            effectively analyse plant traits. You could work on one yourself!<br></br>
                            -- Tap to hide this message --
                        </p>
                    )}

                    {activeOverlay === "workshop" && (
                        <p>
                            The refurbished engineering workshops
                            consist of teaching spaces, a large engineering space split into bays
                            for dedicated project work and collaborative research, 
                            and a separate robotics lab. The university provides a large open-plan 
                            space for scaling, testing and trialling robotics.<br></br>
                            -- Tap to hide this message --
                        </p>
                    )}

                    {activeOverlay === "fact" && (
                        <p>
                            Robots can help in hospitals, fix satellites in outer space,
                            help in agriculture and restore coral reefs in the ocean!<br></br>
                            -- Tap to hide this message
                        </p>
                    )}
                </div>
            )}

            <button id="robotBtn" onClick={() => setActiveOverlay("robot")}></button>
            <button id="workshopBtn" onClick={() => setActiveOverlay("workshop")} ></button>
            <button id="funFactBtn" onClick={() => setActiveOverlay("fact")}>Fun Fact</button>
            <button id="homeBtn" onClick={() => navigate("/")}>Home</button>
        </div>
    );
}

