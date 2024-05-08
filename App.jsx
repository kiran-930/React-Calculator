import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState();

  const calcScreen = document.getElementById("calScreen");

  const [InputValue, setInput] = useState("");

  const clearAllContent = function () {
    setInput("");
  };
  const delContent = function () {
    setInput(InputValue.slice(0, -1));
  };

  const displayContent = function (content) {
    setInput((oldValue) => oldValue + content);
  };

  const showVal = function () {
    try {
      let num = eval(InputValue);
      setInput(num.toString());
    } catch (err) {
      setInput("Not valid Input");
    }
  };

  return (
    <>
      <div className="box">
        <div className="calc">
          <div className="caldis">
            <input
              type="text"
              placeholder="0"
              id="calScreen"
              value={InputValue}
            />
          </div>

          <div className="sm-box">
            <button onClick={() => displayContent("(")} className="btn">
              (
            </button>
            <button onClick={() => displayContent(")")} className="btn">
              )
            </button>

            <button onClick={clearAllContent} className="btn ac">
              AC
            </button>
            <button onClick={() => displayContent("/")} className="btn">
              /
            </button>
          </div>

          <div className="sm-box">
            <button onClick={() => displayContent("7")} className="btn">
              7
            </button>
            <button onClick={() => displayContent("8")} className="btn">
              8
            </button>
            <button onClick={() => displayContent("9")} className="btn">
              9
            </button>
            <button onClick={() => displayContent("*")} className="btn">
              *
            </button>
          </div>

          <div className="sm-box">
            <button onClick={() => displayContent("4")} className="btn">
              4
            </button>
            <button onClick={() => displayContent("5")} className="btn">
              5
            </button>
            <button onClick={() => displayContent("6")} className="btn">
              6
            </button>
            <button onClick={() => displayContent("-")} className="btn">
              -
            </button>
          </div>

          <div className="sm-box">
            <button onClick={() => displayContent("1")} className="btn">
              1
            </button>
            <button onClick={() => displayContent("2")} className="btn">
              2
            </button>
            <button onClick={() => displayContent("3")} className="btn">
              3
            </button>
            <button onClick={() => displayContent("+")} className="btn">
              +
            </button>
          </div>

          <div className="sm-box">
            <button onClick={() => displayContent("0")} className="btn">
              0
            </button>
            <button onClick={() => displayContent(".")} className="btn">
              .
            </button>
            <button onClick={delContent} className="btn del">
              del
            </button>
            <button onClick={showVal} className="btn">
              =
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
