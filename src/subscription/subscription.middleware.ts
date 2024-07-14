import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { SubscriptionService } from './subscription.service';

@Injectable()
export class SubscriptionMiddleware implements NestMiddleware {
  constructor(private readonly subscriptionService: SubscriptionService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    // const host = req.get('host');
    const host = 'api-beta.almayadeen.net'
    if (!req.cookies || !req.cookies.subscriptionId || req.cookies.host !== host) {
      const subscriptionId = await this.subscriptionService.findByHost(host);
      if (!subscriptionId || subscriptionId.length === 0) {
        return res.status(400).json({ success: false, error: { message: 'Invalid Host' } })
      }

      res.cookie('subscriptionId', subscriptionId, { httpOnly: true, maxAge: 300000 });
      res.cookie('host', host, { httpOnly: true, maxAge: 300000 });
      // attach id to the request so we can use it in the controller/service
      req.subscriptionId = subscriptionId
    } else {
      req.subscriptionId = req.cookies.subscriptionId
    }     
    next();
  }
}

declare global {
  namespace Express {
    interface Request {
      subscriptionId?: string;
    }
  }
}