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

(2)useDebugValue
