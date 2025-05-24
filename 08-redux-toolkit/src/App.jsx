import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from "./redux/slices/counterSlice";

const App = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  const [num, setNum] = useState(0);

  const handleIncrease = () => {
    dispatch(increment());
  };

  const hanldeDecrease = () => {
    dispatch(decrement());
  };

  const handleReset = () => {
    dispatch(reset());
  };

  const handleAddNum = () => {
    dispatch(incrementByAmount(num));
  };

  return (
    <div>
      <h1>Counter System</h1>
      <button onClick={handleIncrease}> + </button>
      <p>Count Here: {count}</p>
      <button onClick={hanldeDecrease}> - </button>
      <br />
      <br />
      <button onClick={handleReset}>Try Me ?</button>
      <br />
      <br />
      <input
        onChange={(e) => setNum(e.target.value)}
        type="number"
        placeholder="insert Number"
      />
      <br />
      <br />
      <button onClick={handleAddNum}>Add Num</button>
    </div>
  );
};

export default App;
