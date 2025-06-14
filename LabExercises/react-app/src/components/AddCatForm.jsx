import React from "react";
import { useState } from "react";

function AddCatForm({ onAddCat }) {
    const [newCatName, setNewCatName] = useState("");
    const [newCatLatinName, setNewCatLatinName] = useState("");
    const [newCatImage, setNewCatImage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        onAddCat(Object.fromEntries(data));
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Cat Name: {"  "}
                    <input name="name" value={newCatName} onChange={(e) => setNewCatName(e.target.value)} />
                </label>{" "}
                <br />
                <label>
                    Latin Name: {"  "}
                    <input name="latinName" value={newCatLatinName} onChange={(e) => setNewCatLatinName(e.target.value)} />
                </label>{" "}
                <br />
                <label>
                    Image Link: {"  "}
                    <input name="image" value={newCatImage} onChange={(e) => setNewCatImage(e.target.value)} />
                </label>
                <br /> <br />
                <button type="submit">Add Cat</button>
            </form>
        </div>
    );
}

export default AddCatForm;
