# useReducerとは

useRedcuerはuseStateと同様に状態管理（state management）を行うことが出来るHookです。

Javascriptのreduce()とは

Javascriptのreduceは配列の関数で、配列の要素を1つずつ取り出すloop処理の中で指定した関数（コールバック関数）を手寄与し新しい値を戻します。

reduceを使って配列の合計
```javascript
const test = [10,20,30]

// arrow アロー関数を利用した場合
const sum = test.reduce((previousValue, currentValue) => previousValue + currentValue)

// arrow 関数を利用しない場合
const sum = test.reduce(function(previousValue, currentValue){
    return previousValue + currentValue
})

// コールバッグ関数を渡した場合
const callback_func = (previousValue, currentValue) => previousValue + currentValue

const sum = test.reduce(callback_func)

console.log(sum) 
```
useReducer()について。

useRducerの第1引数＝dispatch()によって呼び出される関数

また、dispatch()によって呼び出される関数内では、switch文が用いられることが多い。

useReducerの第2引数＝初期状態

# ケース1

```tsx
const initialState = { count: 0 };

type ACTIONTYPE =
  | { type: "increment"; payload: number }
  | { type: "decrement"; payload: string };

function reducer(state: typeof initialState, action: ACTIONTYPE) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - Number(action.payload) };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "decrement", payload: "5" })}>
        -
      </button>
      <button onClick={() => dispatch({ type: "increment", payload: 5 })}>
        +
      </button>
    </>
  );
}
```
# ケース2

```tsx
import React, { useReducer } from 'react';

const initialState = {
    count: 2
}

const reducer = (state, action) => {

    switch(action.type){
        case 'INCREMENT':
            return {count: state.count + action.payload}
        case 'DECREMENT':
            return {count: state.count - action.payload}
        case 'DOUBLE_INCRE':
            return {count: state.count * 2}
        case 'RESET':
            return {count: 0}
        default:
            return state
    }
}

function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div className="">
            <h1>Counter</h1>
            <h2>カウント: { state.count }</h2>
            <button onClick={() => dispatch({type: 'INCREMENT', payload: 5})}>+</button>
            <button onClick={() => dispatch({type: 'DECREMENT', payload: 5})}>-</button>
            <button onClick={() => dispatch('DOUBLE_INCRE')}>++</button>
            <button onClick={() => dispatch('RESET')}>0</button>
        </div>
  );
}

export default Counter;
```
