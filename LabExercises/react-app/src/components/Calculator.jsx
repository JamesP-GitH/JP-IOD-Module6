import React from "react";

function Calculator() {
    return (
        <div>
            <input type="number" placeholder="First digit" />
            <select>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
            </select>
            <input type="number" placeholder="Second digit" />
            <button>Calculate</button>
            <div>Result: </div>
        </div>
    );
}

export default Calculator;
