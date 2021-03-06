# Promiseとは

___________________________________________________________________________

非同期処理の結果を、成功(resolve)または、失敗(reject)で返すオブジェクトです。

Promiseを使用すると、以下のような非同期処理を簡潔に書ける。

・非同期処理の成功、失敗の処理を分岐する

・複数の非同期処理を順番に実行したり、並列して実行する。

# Promiseの基本

___________________________________________________________________________

```new Promise```
でインスタンスを生成して使用する。

Promiseの引数には関数を指定し、その関数内に実行したい非同期処理を記述する。

```javascript
var myPromise = new Promise(function (resolve, reject) {
  // 実行したい処理を記述
  setTimeout(function() {
    // 成功
    resolve('成功!'); // resolve(渡したい値)
  }, 3000);
});


myPromise
  .then(function(value) {
    // 非同期処理が成功した場合
    console.log('実行結果:' + value); // => 実行結果:成功!
  })
  .catch(function(value) {
    // 非同期処理が失敗した場合
    console.log('実行結果:' + value); // 呼ばれない
  });
```
# 複数の値を受け渡す

_________________________________________________________________________


```javascript
// 複数の値を配列で渡す
var myPromise2 = new Promise(function (resolve, reject) {
  // 複数の値を渡す場合は、配列にまとめる
  resolve([123, 'abc']); // resolve([値1, 値2...])
});


myPromise2
  .then(function(value) {
    console.log(value[0]); // => 123
    console.log(value[1]); // => abc
  });
```

# Promise.resolve()

________________________________________________________________________


構文:Promise.resolve(value)

Promiseで非同期処理を書くとき、```new Promise```
で```Promise```
オブジェクトを生成する方法と、
```Promise.resole()```
で```Promise```
オブジェクトを生成する方法があります。


引数

```valuue```
 　このPromiseで解決する際の引数。

返値

与えられた値で解決されたPromise、またはvalueがプロミスオブジェクトであった場合、値として渡されたプロミスです。

解説
静的なPromise.resolveメソッドの使用

次のコードは、2つの方法で```Promise```
オブジェクトを生成します。どちらも```Hello```
で```resoleve```
された```Promise```
オブジェクトが返ってくる。

```javascript

```


# 例

```javascript
Promise.resolve('Success').then(function(value) {
  console.log(value); // "Success"
}, function(value) {
  // not called
});
```

# then()メソッド

_______________________________________________________________________________________________________

then()メソッドはPromiseを返す。最大2つの引数、Promiseが成功した場合と失敗した場合のコールバック関数を取ります。

```javascript
const promise1 = new Promise((resolve, reject) => {
  resolve('Success!');
});

promise1.then((value) => {
  console.log(value);
  // expected output: "Success!"
});

```
then()メソッドの1つ目の引数には、Promiseの処理が成功したときの処理、2つ目の引数には失敗したときの処理を書く。

またこの時、アロー関数の名前は何でもよい。順番がすべてである。

```javascript
let promise=new Promise(function(resolve,reject){
   setTimeout(()=>reject(new Error("Whoop")),1000)
})
/*
let promise=new Promise(function(resolve,reject){
   setTimeout(()=>resolve("Done"),1000)
})
*/
promise.then(
	error => console.log(error+" sit!"),
	result => console.log(result+" fuck")
);
```
Error fuckが処理される。

```javascript
let promise=new Promise(function(resolve,reject){
   setTimeout(()=>resolve("Done"),1000)
})

promise.then(
	error => console.log(error+" sit!"),
	result => console.log(result+" fuck")
);
```
Done sit!が出力される。
# 返値

Promiseが完了するか拒否されると、それぞれのハンドラー関数（onFulfilledまたはonRejected）が非同期に呼び出されます。


# thenメソッドの使用

# cath()について。
```javascript
function taskA () {
  console.log("TaskA");
}

function taskB () {
  console.log("TaskB");
}

function onRejected(error) {
  console.log("error = " + error);
}

var promise = Promise.resolve();
promise
  .then(taskA)
  .then(taskB)
  .catch(onRejectted);
```
