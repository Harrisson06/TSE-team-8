// LAST EDITED BY: QUINN CARR
// DATE: 28/04/2026

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Lesson3Styles.css'

export default function Lesson3() {
    const [showOverlay, setShowOverlay] = useState(true);
    const [activeOverlay, setActiveOverlay] = useState(null);
    const navigate = useNavigate();

    return (
        <div className="lesson3-page">

            {showOverlay && (
                <div 
                    className="information-overlay"
                    onClick={() => setShowOverlay(false)}
                >
                    <p>
                        The workshop room, where many lines of code are written. 
                        However, could you spot any cybersecurity issues? Click 
                        on the parts of the room where they could be present.<br></br>
                        -- Tap to hide this message --
                    </p>
                </div>
            )}

            {activeOverlay && (
                <div className="overlay" onClick={() => !showOverlay && setActiveOverlay(null)}>
                    
                    {activeOverlay === "door" && (
                        <p>
                            Always leave doors locked when leaving, 
                            especially if they lead to rooms with sensitive data.<br></br>
                            -- Tap to hide this message --
                        </p>
                    )}

                    {activeOverlay === "computer" && (
                        <p>
                            Log off computers when you're not near them if they
                            contain sensitive data, and make sure no one is looking
                            over your shoulder!<br></br>
                            -- Tap to hide this message --
                        </p>
                    )}

                    {activeOverlay === "phishing" && (
                        <p>
                            Never respond to suspicious emails or messages, 
                            especially those asking for personal or sensitive information.<br></br>
                            -- Tap to hide this message --
                        </p>
                    )}

                    {activeOverlay === "fact" && (
                        <p>
                            Cybersecurity analysts can reach over £80,000 per annum!<br></br>
                            -- Tap to hide this message --
                        </p>
                    )}

                </div>
            )}

            <button id="doorBtn" onClick={() => setActiveOverlay("door")}></button>
            <button id="mainCompBtn" onClick={() => setActiveOverlay("computer")} ></button>
            <button id="phishingBtn" onClick={() => setActiveOverlay("phishing")}></button>
            <button id="funFactBtn" onClick={() => setActiveOverlay("fact")}>Fun Fact</button>
            <button id="homeBtn" onClick={() => navigate("/")}>Home</button>
        </div>
    );
}