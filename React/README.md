# eの型付け

```tsx
const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
	  e.preventDefault();
	};
```

# 関数のrender

普通の関数と同じく、引数を片付けする必要がある。

また、戻り値を片付けする場合には、```JSX.Element```
です。

```typescript
type AppProps = { message: string }; // interfaceでもよい
const getTriangle = (prop) =>{
}
```

# constで定義した関数のrender

```<関数コンポーネント名/>```
で実行する。

```typescript
import * as React from 'react';
import * as ReactDOM from 'react-dom';
// 型のインポート
import type { VFC } from "react"

// 実際の使用例
const SampleComponent: VFC = () => {
  return <div>Hello TypeScript!</div>
}

ReactDOM.render(
	<SampleComponent/>,document.getElementById("main")
)
```

引数付きの場合

直接ReactDom.render内で引数を指定することはできない

```typescript
import * as React from 'react';
import * as ReactDOM from 'react-dom';
// 型のインポート
import App from "./App"
import type { VFC } from "react"
type Welcom_Props={
	message:string
}
// 実際の使用例
const SampleComponent: VFC = ({message}:Welcom_Props) => {
  return <div>Hello {message}</div>
}
function Welcome({message}:Welcom_Props){
	return <h1>Hello,{message}</h1>
}
const Right:VFC=()=>{
	return(
		<div>
			<Welcome message="Sara" />
			<Welcome message="Gafa" />
			<Welcome message="Kota" />
		</div>
	)
}
ReactDOM.render(
	<Right />,document.getElementById("main")
)

ReactDOM.render(<App />,document.getElementById("app"))
```

# Propsについて

