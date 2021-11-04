# 型付けが任意のフック

(1)useState

(2)useContext

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
