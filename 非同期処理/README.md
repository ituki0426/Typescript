# 基礎知識

then()を呼び出すにはその関数または、クラス、オブジェクトがPromiseオブジェクトをreturnする必要がある。

構文
```function name(argument):Promise<type>```
typeには戻り値の型を代入する。

また、関数の場合はreturnでPromiseオブジェクトを返す必要がある。

```return new Promise((resolve)=>{})```

また、then()の()内には、前の関数なり定数がresolveした値が代入される。

```typescript
function request():Promise<number>{
	return new Promise((resolve)=>{
		resolve(1)
	})
}
request()
.then((result)=>{
	console.log(result)
})
```

# async await

asyncを使うことで上のコードをより簡単に書くことが出来ます。

```typescript
async function requestAsnc():Promise<number> {
	return 1;
}
requestAsnc()
.then((result)=>{
	console.log(result)
})
```
