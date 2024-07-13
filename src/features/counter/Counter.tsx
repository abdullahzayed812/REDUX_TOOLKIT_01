import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { decrement, increment, incrementByAmount, reset } from "./counterSlice";

export const Counter: React.FC = () => {
  const dispatch = useAppDispatch();

  const { count } = useAppSelector((state) => state.counter);

  const [amount, setAmount] = useState(0);

  const addedValue = Number(amount) || 0;

  const resetAll = () => {
    setAmount(0);
    dispatch(reset());
  };

  return (
    <section>
      <h1>{count}</h1>
      <div>
        <button type="button" onClick={() => dispatch(increment())}>
          +
        </button>
        <button type="button" onClick={() => dispatch(decrement())}>
          -
        </button>
      </div>

      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />

      <div>
        <button
          type="button"
          onClick={() => dispatch(incrementByAmount(addedValue))}
        >
          Add Amount
        </button>
        <button type="button" onClick={resetAll}>
          Reset
        </button>
      </div>
    </section>
  );
};
