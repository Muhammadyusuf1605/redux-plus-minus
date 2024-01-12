import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "./features/counter/counterSlice";
import { useRef } from "react";

function App() {
  const { value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const inputVal = useRef();

  const handlesubmit = async (e) => {
    e.preventDefault();

    await dispatch(incrementByAmount(+inputVal.current.value));

    inputVal.current.value = "";
  };

  return (
    <>
      <h1>{value}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <form onSubmit={handlesubmit}>
        <input type="number" ref={inputVal} />
        <button type="submit">Add</button>
      </form>
    </>
  );
}

export default App;
