import React from "react";
import { useState } from "react";

function Emoji() {
    const [emotion, setEmotion] = useState("🙂");

    return (
        <div className="MoodChanger componentBox">
            <button onClick={() => setEmotion(emotion === "🙂" ? "🙁" : "🙂")}>Change Emoji</button>
            <div>Current Emotion: {emotion}</div>
        </div>
    );
}

export default Emoji;
