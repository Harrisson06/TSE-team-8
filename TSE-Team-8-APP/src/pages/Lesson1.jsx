// LAST EDITED BY: LEWIS GORMLEY
// DATE: 30/04/2026

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Lesson1Styles.css'

export default function Lesson1() {
    const [showOverlay, setShowOverlay] = useState(true);
    const [activeOverlay, setActiveOverlay] = useState(null);
    const navigate = useNavigate();

    return (
        <div className="lesson1-page">

            {showOverlay && (
                <div 
                    className="information-overlay"
                    onClick={() => setShowOverlay(false)}
                >
                    <p>
                        The lecture hall contains several embedded systems. 
                        Can you identify them? Click on different parts of the room to learn more.<br></br>
                        -- Tap to hide this message --
                    </p>
                </div>
            )}

            {activeOverlay && (
                <div className="overlay" onClick={() => setActiveOverlay(null)}>
                    
                    {activeOverlay === "monitors" && (
                        <p>
                            The huge lecture hall screen use embedded systems to control what 
                            is being displayed. They recieve an input from a computer and process 
                            it to show images, slides, or videos. Inside these screens there is 
                            a small computer of their own that handles display settings, resolution, 
                            and input switching automatically. <br></br>
                            -- Tap to hide this message --
                        </p>
                    )}

                    {activeOverlay === "door" && (
                        <p>
                            The keycard door is controlled by an embedded system that scans and 
                            verifies your student ID. When you tap your card, the system checks
                            if you are authorised to enter. If access is allowed, the system 
                            sends a signal to unlock the door. Otherwise, it remains locked. <br></br>
                            -- Tap to hide this message --
                        </p>
                    )}

                    {activeOverlay === "lighting" && (
                        <p>
                            The lighting system in a lecture hall is often automated using embedded 
                            systems. Sensors can detect brightness levels or whether people are present.
                            The system can then adjust lighting automatically to save energy or improve
                            visability during lectures. <br></br>
                            -- Tap to hide this message --
                        </p>
                    )}

                    {activeOverlay === "fact" && (
                        <p>
                            Embedded systems are everywhere from traffic lights and washing machines
                            to medical devices. Most computing devices are actually embedded systems 
                            designed to perform one specific task efficiently. <br></br>
                            -- Tap to hide this message --
                        </p>
                    )}

                </div>
            )}

            <button id="lesson1monitorBtn" onClick={() => setActiveOverlay("monitors")}></button>
            <button id="lesson1doorBtn" onClick={() => setActiveOverlay("door")}></button>
            <button id="lesson1lightBtn" onClick={() => setActiveOverlay("lighting")}></button>
            <button id="lesson1funFactBtn" onClick={() => setActiveOverlay("fact")}>Fun Fact</button>
            <button id="lesson1homeBtn" onClick={() => navigate("/")}>Home</button>
        </div>
    );
}