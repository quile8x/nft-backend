import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    //console.log('Request...', req.body);
   // console.log('Response...', res);
    next();
  }
}

  export function logger(req: Request, res: Response, next: NextFunction) {
    console.log(`Request`, req.body);
    res.on('finish', () => {
        const { statusCode,   } = res;
        console.log(`Response:`,statusCode);
      });
     
    //   res.on('close', () => {
    //     const { statusCode } = res;
    //     const contentLength = res.get('content-length');
    //     console.log(`Response:`,statusCode, contentLength);
    //   });
    next();
  };