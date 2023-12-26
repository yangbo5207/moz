import {useStore} from './index'
export default function Child() {
  const {increase, decrease} = useStore()

  return (
    <div>
      <p>我是子组件，当我内部的点击事件执行时，能够影响到父组件的 counter 值</p>
      <button onClick={increase}>子组件++</button>
      <button onClick={decrease}>子组件--</button>
    </div>
  )
}