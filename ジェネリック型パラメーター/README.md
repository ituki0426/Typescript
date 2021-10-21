# ジェネリック型パラメーター

複数の場所で型レベルの制約を強制するためにつかわれるプレースホルダーの型。多相型パラメーターとも呼ばれる。

(例)
```typescript
function test<T>(arg: T): T {
  return arg;
}

test<number>(1); //=> 1
test<string>("文字列"); //=> 文字列

//※ Genericsでも型推論ができるので、引数から型が明示的にわかる場合は省略が可能
test("文字列２"); //=> "文字列２"
```

```typescript
function reverse<T>(items: T[]): T[] {    
var toreturn = [];    
for (let i = items.length - 1; i >= 0; i--) {
toreturn.push(items[i]);}
return toreturn;}
var sample = [1, 2, 3];
var reversed = reverse(sample);
console.log(reversed); // 3,2,1
// Safety!
reversed[0] = '1';     // Error!
reversed = ['1', '2']; // Error!
reversed[0] = 1;       // Okay
reversed = [1, 2];     // Okay
```

複数の型引数を定義する。
```typescript
function test<T, U, P>(arg1:T, arg2: U, arg3: P): P {
  return arg3;
}

//※ Genericsでも型推論ができるので、引数から型が明示的にわかる場合は省略が可能
test("文字列", true, 4); //=> 4
```

クラスを用いた具体例

```typescript
class Klass<T> {
  item: T;

  constructor(item: T) {
    this.item = item;
  }

  getItem(): T {
    return this.item;
  }
}

let strObj = new Klass<string>("文字列１");
strObj.getItem(); //=> "文字列１"

let numObj = new Klass<number>(5);
numObj.getItem(); //=> 5
```
```typescript
/** A class definition with a generic parameter */
class Queue<T> {
private data = [];  push(item: T) { this.data.push(item); }  pop(): T | undefined { return this.data.shift(); }}
/** Again sample usage */
const queue = new Queue<number>();queue.push(0);queue.push("1"); 
ERROR : cannot push a string. Only numbers allowed// ^ if that error is fixed the rest would be fine too
```
インターフェイスを用いた例

```typescript
interface KeyValue<T, U> {
    key: T;
    value: U;
}

let obj: KeyValue<string, number> = { key: "文字列", value: 2 } //= {key: "文字列", value: 2}
```

そのほかの高度な例
```typescript
const getJSON = <T>(config: {    url: string,    headers?: { [key: string]: string },  }): Promise<T> => {    const fetchConfig = ({      method: 'GET',      'Accept': 'application/json',      'Content-Type': 'application/json',      ...(config.headers || {})    });    return fetch(config.url, fetchConfig)      .then<T>(response => response.json());  }


```
