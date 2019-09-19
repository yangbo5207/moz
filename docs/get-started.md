

```
                                   
 /'\_/`\                           
/\      \    ___   ____    ____    
\ \ \__\ \  / __`\/\_ ,`\ /\_ ,`\  
 \ \ \_/\ \/\ \L\ \/_/  /_\/_/  /_ 
  \ \_\\ \_\ \____/ /\____\ /\____\
   \/_/ \/_/\/___/  \/____/ \/____/
                                   
                                     
```

## Install

```bash
$ yarn add mozz
# or
$ npm i mozz --save
```

## 使用

首先自定义一个hook，这个hooks没有任何特殊，与其他自定义hooks完全一样。

```typescript jsx
// useCounter.ts
import {useState} from "react";

export default function useCounter() {
  const [counter, setCounter] = useState(0);

  return {
    counter,
    decrease: () => setCounter(counter - 1),
    increase: () => setCounter(counter + 1)
  }
}
```

然后在父级组件中，引入mozz，以及刚才自定义好的hook。 利用api createStore 得到特定的 Provider与hook函数useStore

```typescript jsx
import { createStore } from 'mozz';
import useCounter from './useCounter';

export const { Provider, useStore } = createStore(useCounter);
```

父级组件作为目标组件，需要被Provider包裹起来 

```typescript jsx
export default () => <Provider><App /></Provider>;
```

在父级组件内部，可直接使用 useStore 获取自定义hook中，定义好的状态与方法。

```typescript jsx
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
```

子组件 Comp 中，也可以直接使用 useStore 获取状态与方法，他们被父子组件共享。

```typescript jsx
import React from 'react';
import {useStore} from './App';

export default function Comp() {
  const {increase} = useStore();

  return (
    <div>
      <p style={{ fontSize: '12px' }}>我是子组件，当我内部的点击事件执行时，能够影响到counter的值</p>
      <button onClick={increase}>sub +</button>
    </div>
  )
}
```
