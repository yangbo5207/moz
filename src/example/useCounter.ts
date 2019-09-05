import {useState} from "react";

export default function useCounter() {
  const [counter, setCounter] = useState(0);

  return {
    counter,
    decrease: () => setCounter(counter - 1),
    increase: () => setCounter(counter + 1)
  }
}
