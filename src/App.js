import React, { useState } from "react";
import ListCard from "./components/ListCard";
import "./App.css";

const initial = [
  {
    id: 0,
    text: "learn react",
    status: false,
    time: new Date().toTimeString()
  }
];

const App = () => {
  const [input, setInput] = useState("");
  const [dataBase, setDataBase] = useState(initial);
  let ID = 1;

  const updateDataBase = () => {
    if (input.trim().length > 0) {
      setDataBase([
        ...dataBase,
        {
          id: ID++,
          text: input,
          status: false,
          time: new Date().toTimeString()
        }
      ]);

      setInput("");
    }
  };

  const deleteHandler = (id) => {
    const updateDataBaseAgain = dataBase.filter((x, index) => index !== id);
    setDataBase(updateDataBaseAgain);
  };
  return (
    <>
      <div className="App">
        <h1> What's your plan?</h1>
        <div id="part1">
          {dataBase &&
            dataBase.map((x, index) => {
              return (
                <ListCard
                  x={x}
                  index={index}
                  key={index}
                  deleteHandler={deleteHandler}
                />
              );
            })}
          <div style={{ marginTop: "20px" }}>
            <input
              placeholder="plan is.."
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button id="search" onClick={updateDataBase}>
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
