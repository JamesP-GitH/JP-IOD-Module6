import React from "react";

function OperatorSelect({ value, onChange }) {
    return (
        <select value={value} onChange={onChange}>
            <option value="">Select</option>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
        </select>
    );
}

export default OperatorSelect;
