# モジュール化について

_____________________________________________________________________________________________________________________________

・基本的に1ファイル=1モジュール。（一つのファイルにいくつものモジュールを格納しない）

# 名前付きexport

_______________________________________________________________________________________________________________________________

1モジュールから複数の関数をexport。

クラスはexportできない。

```javascript
export function Foo() {
  return (
    <h1>FOO</h1>
  );
}
export const Bar = () => {
  return (
    <h1>BAR</h1>
  );
}
```

# 名前なし(dafult)export

.1ファイル(1モジュール)1export

.アロー関数は宣言後にexport

.クラスをexportできる。

```javascript
export default function Foo() {
  return (
    <h1>FOO</h1>
  );
}
```

_______________________________________________________________________________________________________________________________________

```javascript
const Bar = () => {
  return (
    <h1>BAR</h1>
  );
}
export default Bar;

```

_________________________________________________________________________________________________________________________________________

```javascript
export default class Hoge extends Fuga {
  render() {
    return (
      <h1>Hoge</h1>
    );
  }
}
```

# モジュール全体のimport

___________________________________________________________________________________________________________________________

.名前なし(default)exportしたモジュールをimportする。

・モジュール全体のimport

# 関数ごとのimport

__________________________________________________________________________________________________________________________________

・名前付きexportされたモジュールをimportする。

・{}内にimportしたい関数名を書く。

```javascript
Hoge.js
import { Foo, Bar } from "./FooBar";
```

```javascript
FooBar.js
export function Foo() {
  return (
    <h1>FOO</h1>
  );
}
export const Bar = () => {
  return (
    <h1>BAR</h1>
  );
}
```