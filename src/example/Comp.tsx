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
