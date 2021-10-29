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
