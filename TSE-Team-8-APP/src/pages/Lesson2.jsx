// LAST EDITED BY: LEWIS GORMLEY
// DATE: 30/04/2026

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Lesson2Styles.css'

export default function Lesson1() {
    const [showOverlay, setShowOverlay] = useState(true);
    const [activeOverlay, setActiveOverlay] = useState(null);
    const navigate = useNavigate();

    return (
        <div className="lesson2-page">

            {showOverlay && (
                <div 
                    className="information-overlay"
                    onClick={() => setShowOverlay(false)}
                >
                    <p>
                        Around the INB atrium there are plenty of everyday examples of 
                        Artificial Intelligence in use. Click different areas to discover 
                        how AI is helping behind the scenes. <br></br>
                        -- Tap to hide this message --
                    </p>
                </div>
            )}

            {activeOverlay && (
                <div className="overlay" onClick={() => setActiveOverlay(null)}>
                    
                    {activeOverlay === "camera" && (
                        <p>
                            Many modern buildings use AI-powered security cameras. These systems 
                            can detect movement, recognise faces, and track people across different 
                            cameras. The AI analyses video frames in real time and can alert security 
                            if it detects unusual behaviour, such as someone entering restricted 
                            areas or acting suspiciously. <br></br>
                            -- Tap to hide this message --
                        </p>
                    )}

                    {activeOverlay === "cafe" && (
                        <p>
                            AI is used in cafés and shops to improve efficiency and customer experience.
                            Systems can predict busy times, manage stock levels, and reduce waste.
                            For example, AI can analyse past sales data to predict how much food
                            or drink will be needed at certain times of the day. <br></br>
                            -- Tap to hide this message --
                        </p>
                    )}

                    {activeOverlay === "phone" && (
                        <p>
                            AI is used in many mobile apps that students use everyday. Apps like TikTok, 
                            Instagram, and spotify use AI to recommend content. These systems analyse 
                            your behaviour, such as what you watch or listen to, and use that data to 
                            personalise your experience. <br></br>
                            -- Tap to hide this message --
                        </p>
                    )}

                    {activeOverlay === "fact" && (
                        <p>
                            AI systems can process huge amounts of data much faster than humans, which
                            makes them useful for tasks like medical diagnosis, security, and 
                            automation. However, AI still depends on the data it is trained on, 
                            so it is not always perfect. <br></br>
                            -- Tap to hide this message --
                        </p>
                    )}

                </div>
            )}

            <button id="lesson2cameraBtn" onClick={() => setActiveOverlay("camera")}></button>
            <button id="lesson2cafeBtn" onClick={() => setActiveOverlay("cafe")}></button>
            <button id="lesson2phoneBtn" onClick={() => setActiveOverlay("phone")}></button>
            <button id="lesson2funFactBtn" onClick={() => setActiveOverlay("fact")}>Fun Fact</button>
            <button id="lesson2homeBtn" onClick={() => navigate("/")}>Home</button>
        </div>
    );
}