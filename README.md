## 型エイリアス

変数宣言(let var const)を使って、値の別名（エイリアス）となる変数を宣言できるのと同時に、ある方を指し示す型エイリアスを宣言することが出来る。

構文

```typescript
type alias:　型の別名の意
```
合併型と交差型

AとBという二つのものがある場合、それらの合併とはそれらの和（A,B,またはその両方に含まれるすべての物）を指し、交差とは、それらごk兆通して持つもの（AとBの両方に含まれるすべての物）を指します

TSでは、合併を表すには「|」、交差を表すには、「&」を用いる。

合併型を持つ値は、必ずしもどちらか1つのメンバーであるとは限らない。実際には、同時に両方のメンバーになれるのです。

例
```typescript
type Cat ={
	name:string,
	purrs:boolean
}
type Dog={
	name:string,
	barks:boolean,
	wags:boolean
}
type CatOrDogOrBoth=Cat|Dog
type CatandDog=Cat&Dog
let a: CatOrDogOrBoth={
	name:"Bonkers",
	purrs:true
}
a={
	name:"Bonkers",
	barks:true,
	wags:false
}
a={
	name:"Bonkers",
	purrs:true,
	barks:true,
	wags:false
}
```
では、これはどうでしょうか？

```typescript
function(a:string,b:naumber){
   return a || b
}
```

aがtrueとみなされる値であれば、戻り値の型はstringになり、そうで開ければnumberになる。

すなわち、 string | number　です。

例
```typescript
type Color = 'red'//typeで文字列を型にすると、それ以外を受け付けなくなる。
let x = Math.random() < .5
if(x){
	type Color='blue'
	let b:Color='blue'
	console.log(b);
}else{
	let c:Color='red'//
	console.log(c)
}


```

例
```typescript
type STORE={
	count:number
}
type ACTIONTYPE_2= | {type:"increment"} | {type:"decrement"};

const reducer = (state:STORE,action:ACTIONTYPE_2)=>{
	switch(action.type){
		case "increment":
			return {count:state.count+1}
		case "decrement":
			return {count:state.count-1};
		default:
			return state;
	}
};
const count:STORE={
	count:1
}
const Inc:ACTIONTYPE_2={
	type:"increment"
}
type ACTIONTYPE_1=increment|decrement
type increment={
	type:"increment"
}
type decrement={
	type:"decrement"
}
const reducer_2=(state:STORE,action:ACTIONTYPE_1)=>{
	switch(action.type){
		case "increment":
			return {count:state.count+1}
		case "decrement":
			return {count:state.count-1};
		default:
			return state;
	}
}
console.log(reducer(count,Inc).count)
console.log(reducer_2(count,Inc).count)
//結果は同じになる
```
## インデックスネグスチャ

構文：```[key:T]:U```

これはオブジェクトが複数のkey(型T)を含む可能性があることを示す。


```tsx
let obj:{
	[key:string]:string//インデックスネグスチャ
}
obj={
	id:"123",
	token:"hogetoken",
	name:"hogename"
}
console.log(obj.id);//123
```
## 配列

配列定義方法：T[]とArrayは同義

```tsx
const even1:number[]=[2,3,4]
even1.push(3);
console.log(...even1);//2,3,4,3
const even2:Array<number>=[2,3,4]
even2.push(3);
console.log(...even2)//2,3,4,3
```

合併型も使える

## 可変長引数（タプルパラメーター）

```tsx
const func3=(...args:string[]):string[]=>{
	return args
}

const st1:string='Hello'

const st2:string='wolrd'

const st3:string='hogehoge'

console.log((func3(st1,st2,st3)));

console.log(...func3(st1,st2,st3))
```

## タプル

タプルは配列の各要素の数と型を定義できる。

```tsx
function bind<T,U extends any[],R>(
	func:(arg1:T,...rest:U)=>R,
	value:T,
):((...args:U)=>R){
	return (...args:U)=>func(value,...args);

}
const add = (x: number, y: number) => x + y;

const add1 = bind(add, 1);

console.log(add1(5)); // 6

```

## keyof演算子

型コンテキストでkeyofを利用するとオブジェクトのプロパテでィ名を抽出して文字列リテラルのユニオン型を取得できる。

```tsx
type Person = {
  name: string;
  old: number;
};

type Keys = keyof Person; // "name" | "old"

let keys: Keys;
keys = 'name'; // OK
keys = 'old'; // OK
keys = 'xxx'; // Error: Type '"xxx"' is not assignable to type '"name" | "old"'.
```

```tsx
type Person={
	name:string;
	old:number;
}
type Keys=keyof Person;// "name" | "old"
let keys:Keys[]=[];

keys.push("name");
keys.push("old");
keys.push("hello")//error
console.log(...keys);//name old　と出力される。
```

## in

```tsx
type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      }
};

type ProductPayload = {
  [Types.Create]: {
    id: number;
    name: string;
    price: number;
  };
  [Types.Delete]: {
    id: number;
  };
};
type ProductType = {
  id: number;
  name: string;
  price: number;
};
export type ProductActions = ActionMap<ProductPayload>[keyof ActionMap<
  ProductPayload
>];
```

## オプショナルチェイニング

オブジェクトのプロパティで、nullやundefinedのチェックに「？」を使うことで、ぷろぱてぃがnullがundefinedの場合は、次のプロパティにはアクセスせず、undefinedを返す。

```tsx
type Foo={
	bar?:{
		baz?:string
	}
}
const foo1:Foo={
	bar:{
		baz:"hoge"
	}
}
const foo2:Foo={
}
const getHoge=(foo:Foo)=>{
	if(foo.bar?.baz){
		console.log(foo.bar.baz)
	}
}
const getHoge_mis=(foo:Foo)=>{
	console.log(foo.bar?.baz)
}
getHoge(foo1);//hoge
getHoge_mis(foo1);//hoge
getHoge(foo2);//undefinedを返す。
getHoge_mis(foo2);//何も返さない
```
