# interfaceの定義

➀配列のを用いた例

配列を用いた肩を宣言する方法は2つある。

## interfaceに連想配列を指定する
```tsx
export interface Company {
  name?:string
  email?:string
  [x in string]: {name?:string, worker?:number}
}
```
