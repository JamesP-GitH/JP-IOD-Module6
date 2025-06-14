import React from "react";

function SingleCat({ name, latinName, image, onDelete }) {
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
            {image ? (
                <img src={image} alt={name} style={{ width: "100%", borderRadius: "6px" }} />
            ) : (
                <div style={{ width: "100%", height: "100px", borderRadius: "6px", background: "#cccccc", textAlign: "center" }}>
                    No Image
                </div>
            )}
            <button type="button" onClick={onDelete}>Remove</button>
        </div>
    );
}

export default SingleCat;
