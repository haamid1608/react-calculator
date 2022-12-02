import { useState } from "react";
import "./calc.css";

const arr = [
  "=",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "+",
  "-",
  "*",
  "÷",
  "C",
];
const numArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const operatorArr = ["+", "-", "*", "÷"];
const equalOperator = "=";
const clearOpp = "C";

function Calculator() {
  const [inputNumber, setInputNumber] = useState("");
  const [result, setResult] = useState();
  const [operator, setOperator] = useState();
  const [displayVal, setDisplayVal] = useState("");
  const [defaultDisp, setDefaultDisp] = useState("0");

  function setInput(e) {
    setInputNumber(inputNumber.concat(e.target.name));
    console.log(e.target.name);
  }

  function inpOperator(e) {
    setOperator(e.target.name);
    setDisplayVal("");
    if (result === undefined) {
      setResult(inputNumber);
    }
    setInputNumber("");
    setDefaultDisp(e.target.name);
  }

  function performCalculation(opt) {
    let number1 = Number(result);
    let number2 = Number(inputNumber);
    let res;

    switch (opt) {
      case "+":
        res = number1 + number2;
        break;

      case "-":
        res = number1 - number2;
        break;

      case "*":
        res = number1 * number2;
        break;

      case "÷":
        res = number1 / number2;

      default:
        break;
    }
    setResult(res);
    setDisplayVal(res);
  }

  function clearAllFields() {
    setResult("");
    setInputNumber("");
    setDisplayVal("");
    setDefaultDisp("0");
  }

  return (
    <>
      <div className="calc-wrapper">
        <div className="calc-head">CASIO</div>
        <div className="calc-display">
          {inputNumber === ""
            ? defaultDisp
            : displayVal === ""
            ? inputNumber
            : displayVal}
        </div>
        <div className="calc-btn-wrapper">
          {arr.map((element, index) => {
            return (
              <>
                <button
                  name={element}
                  className={(element === "=" ? "equals" : element) + " btn"}
                  key={index}
                  onClick={
                    numArr.includes(element)
                      ? setInput
                      : operatorArr.includes(element)
                      ? inpOperator
                      : element === clearOpp
                      ? clearAllFields
                      : () => performCalculation(operator)
                  }
                >
                  {element}
                </button>
                {index % 4 === 0 && <br />}
              </>
            );
          })}
        </div>
      </div>
      <div className="footer"> Developed with love by Haamid &hearts;</div>
    </>
  );
}
export default Calculator;
