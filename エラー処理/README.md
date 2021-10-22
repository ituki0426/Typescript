```typescript
import express, { HttpException, Request, Response, NextFunction } from 'express';
import apiRouter from './api/controller'
const app = express();
const router = express.Router();

// Routing
app.get('/api/user', async (req: Request, res: Response, next: NextFunction): Promise<data> => {
  try {
    const data = await something(….);
    return data;
  } catch (err) {
    return next( badRequestException('ジョニー別府！', {
      type: "Not idol, Great teacher!"
    }) );
  }
});

// error handling
export default function errorHandler(
  err: HttpException,
  req: Request,
  res: Response,
): void {
  res.status(500).send('error message');
}
```

___________________________________________________________________________________________________________

# エラーのステータスを変えたりエラー時にデータを返す。

```typescript
/ errorException.ts 
import { Request, Response } from 'express';

type errorData = {
  [key: string]: any;
};

class HttpException extends Error {
  statusCode?: number;
  message: string;
  data: errorData;
  constructor(statusCode: number, message: string, data?: errorData) {
    super(message);
    this.statusCode = statusCode || 500;
    this.message = message;
    this.data = data ? { ...data } : {};
  }
}

export const badRequestException =
  (message = '400 Bad Request', data?: errorData,): HttpException => {
    return new HttpException(400, message, data);
};

export const forbiddenException =
  (message = '403 Forbidden', data?: errorData,): HttpException => {
    return new HttpException(403, message, data);
};

// Error Handler Middleware

export default function errorHandler(
  err: HttpException,
  req: Request,
  res: Response,
): void {
  // 直接 メッセージだけを入れられないので error {} 内にメッセージ・データを格納する
  res.status(err.statusCode || 500).send({
    message: err.message,
    error: {
      ...err.data,
    },
  });
}
```

____________________________________________________________________________________________________________

```typescript
// app.ts
import express, { HttpException, Request, Response, NextFunction } from 'express';
import apiRouter from './api/controller'
import errorHandler, { badRequestException } fromn './errorException';
const app = express();
const router = express.Router();

// Routing
app.get('/api/user', async (req: Request, res: Response, next: NextFunction): Promise<data> => {
  try {
    const data = await something(….);
    return data;
  } catch (err) {
    return next( badRequestException('ジョニー別府！') );
  }
});

app.use(errorHandler);
```
