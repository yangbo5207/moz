import {createStore} from '../../hooks/moz'
import useCounter from './useCounter'
import Child from './Child'

export const {Provider, useStore} = createStore(useCounter)

function Base() {
  const {counter, increase, decrease} = useStore()
  return (
    <div>
      当前的数字是：{counter}
      <button onClick={increase}>++</button>
      <button onClick={decrease}>--</button>

      <Child />
    </div>
  )
}

export default () => {
  return (
    <Provider>
      <Base />
    </Provider>
  )
}