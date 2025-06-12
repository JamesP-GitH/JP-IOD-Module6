import React from "react";

function SingleCat({ name, latinName, image }) {
    return (
        <div
            style={{
                border: "1px solid #cccccc",
                padding: "10px",
                marginBottom: "4px",
                maxWidth: "200px",
            }}
        >
            <h3>{name}</h3>
            <p>
                <em>{latinName}</em>
            </p>
            <img src={image} alt={name} style={{ width: "100%", borderRadius: "6px" }} />
        </div>
    );
}

export default SingleCat;
