# 型付けが任意のフック

(1)useState

(2)useContext

```typescript
import * as React from 'react'
import * as ReactDOM from 'react-dom';
import { useState,useEffect,useContext } from 'react'
//TSでcontestを使うにはReact.createContext必要。ただし、型の指定が面倒くさい
const Name=React.createContext('');
const TextOutput:React.FC=()=>{
	const name=useContext(Name);
	return(
		<p>Hello,{name}</p>
	)
}
const Space:React.FC=()=>{
	return(
		<TextOutput />
	)
}
const TextInpu=()=>{
	const [str,setStr]=useState('初期値');//Nameを初期化している。
	useEffect(()=>{
		document.title=`input is ${str}!`
	});
	return(
		<div>
			<form>
				<label>
					入力欄<br />
					<textarea
					value={str}
					onChange={event=>setStr(event.target.value)}
					/>
				</label>
			</form>
			<Name.Provider value={str}>
				<Space />
			</Name.Provider>
		</div>
	)
}
ReactDOM.render(
	<TextInpu />,
	document.getElementById('root')
)
```

(3)useMe

# 型付けが必須のフック

(1)useReducer

(2)useCallback

(3)useRef:関数コンポーネントでは、Classコンポーネント時のref属性の代わりに、useRefを使って要素への参照を行います。またuseRefでは、useStateのようにコンポーネント内度の値を保持することが出来ま　　す。

例（JS）
```javascript
```

例(TS)
```typescript
```

(4)useImprerativeHandle

# 型付けが不要のフック

(1)useEffect/useLayoutEffect

useEffect：useEffectを使うと、useEffectに渡された関数はレンダーの結果が場面に反映された後に動作します。つまり、useEffectとは、「関数の実行タイミングをReactのレンダリング後まで遅らせるHook」です。

```typescript
useEffect(() => {
  /* 第1引数には実行させたい副作用関数を記述*/
},[依存する変数の配列]) // 第2引数には副作用関数の実行タイミングを制御する依存データを記述
```


(2)useDebugValue
