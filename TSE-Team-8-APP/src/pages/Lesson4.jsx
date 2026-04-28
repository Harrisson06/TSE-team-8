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
                    {activeOverlay}
                </div>
            )}

            <button id="funFactBtn" onClick={() => setActiveOverlay("fact")}>Fun Fact</button>
            <button id="homeBtn" onClick={() => navigate("/")}>Home</button>
        </div>
    );
}

