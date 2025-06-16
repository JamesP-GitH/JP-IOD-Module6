import React, { useState } from "react";
import NumberInput from "./NumberInput";
import OperatorSelect from "./OperatorSelect";

function Calculator() {
    const [firstNumber, setFirstNumber] = useState("");
    const [secondNumber, setSecondNumber] = useState("");
    const [operator, setOperator] = useState("");
    const [result, setResult] = useState("");

    function handleCalculate() {
        const num1 = parseFloat(firstNumber);
        const num2 = parseFloat(secondNumber);

        if (operator === "/" && num2 === 0) {
            setResult("Cannot divide by 0");
            return;
        }

        let newResult = null;

        switch (operator) {
            case "+":
                newResult = num1 + num2;
                break;
            case "-":
                newResult = num1 - num2;
                break;
            case "*":
                newResult = num1 * num2;
                break;
            case "/":
                newResult = num1 / num2;
                break;
            default:
                newResult = "Please select an operator";
                break;
        }

        setResult(newResult);
    }

    return (
        <div>
            <NumberInput value={firstNumber} onChange={(e) => setFirstNumber(e.target.value)} placeholder="First Digit" />
            <NumberInput value={secondNumber} onChange={(e) => setSecondNumber(e.target.value)} placeholder="Second Digit" />
            <OperatorSelect value={operator} onChange={(e) => setOperator(e.target.value)} />
            <button onClick={handleCalculate}>Calculate</button>
            <div>
                Result: <span>{result}</span>
            </div>
        </div>
    );
}

export default Calculator;
