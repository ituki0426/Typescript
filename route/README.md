# ルーティングの基本

ルーティングを使えるようにするには以下のようにすればよい。

route.ts
```typescript
import * as Express from "express";
const router = Express.Router();
router.get("URL",操作); //
router.post("URL",操作); //
export default router;
```

また、設定したルーティングを使用するには、以下のようにする。

server.ts

```typescript
import route from "./route"
import * as Express from "express";
const app = Express();
app.use("URL",route);
```
