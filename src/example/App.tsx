import React, {FC} from 'react';
import logo from './logo.svg';
import './App.css';
import {createStore} from "../moz";
import useCounter from "./useCounter";
import Comp from './Comp';

export const { Provider, useStore } = createStore(useCounter);

const App: FC = () => {
  const { counter, decrease, increase } = useStore();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a className="App-link" href="/" rel="noopener noreferrer">
          Learn moz
        </a>

        <div>
          <p>{counter}</p>
          <button onClick={increase}>+</button>
          <button onClick={decrease}>-</button>
        </div>
        <Comp />
      </header>
    </div>
  );
};

export default () => <Provider><App /></Provider>;
