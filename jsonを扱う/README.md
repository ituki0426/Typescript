# TypeScriptでjsonを扱えるようにする。

「tsconfig.json」で下記の設定を有効にすると、jsonを扱えるようになる。

```json
{
  "compilerOptions": {
    /* 中略 */
    "moduleResolution": "node",
    "resolveJsonModule": true
  }
}
```
