import React from "react";

function NumberInput({ value, onChange, placeholder }) {
    return <input type="number" placeholder={placeholder} value={value} onChange={onChange} />;
}

export default NumberInput;
