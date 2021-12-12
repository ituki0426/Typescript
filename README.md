## 型エイリアス

変数宣言(let var const)を使って、値の別名（エイリアス）となる変数を宣言できるのと同時に、ある方を指し示す型エイリアスを宣言することが出来る。

構文

```typescript
type alias:　型の別名の意
```

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
