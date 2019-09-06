# mozz

基于react hooks实现的状态管理工具。

> 本来想叫moz的，结果发布npm包的时候，发现mo a ~ z 都被占了，只要叫mozz了

[![GitHub](https://img.shields.io/github/license/awmleer/reto.svg?logo=github)](https://github.com/awmleer/reto)
[![npm version](https://img.shields.io/npm/v/mozz.svg?logo=npm)](https://www.npmjs.com/package/mozz)
[![npm downloads](https://img.shields.io/npm/dw/mozz.svg?logo=npm)](https://www.npmjs.com/package/mozz)
![React](https://img.shields.io/npm/dependency-version/reto/peer/react?logo=react)

#### 特性

+ 基于React hooks 实现，支持所有官方与自定义hooks
+ 超级轻量，核心代码只有十来行
+ 无侵入性，可单独使用，也可以与redux，mobx配合使用
+ 支持Typescript，可轻松获取返回的状态类型，无需额外定义声明
+ 使用简单，基本与hooks方式一致

#### 安装

```typescript
> yarn add mozz
```

#### 使用

首先自定义一个hook，这个hooks没有任何特殊，与其他自定义hooks完全一样。

```typescript
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

然后在父级组件中，引入mozz，以及刚才自定义好的hook。
利用api `createStore`得到特定的 Provider与hook函数useStore

```typescript
import { createStore } from 'mozz';
import useCounter from './useCounter';

export const { Provider, useStore } = createStore(useCounter);
```

父级组件作为目标组件，需要被`Provider`包裹起来

```typescript
export default () => <Provider><App /></Provider>;
```

在父级组件内部，可直接使用 `useStore` 获取自定义hook中，定义好的状态与方法。

```typescript
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

子组件 `Comp` 中，也可以直接使用 `useStore` 获取状态与方法，他们被父子组件共享。

```typescript
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

OK，没有啦，使用就跟useState一样简单。
