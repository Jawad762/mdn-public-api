import { Injectable, NestMiddleware, BadRequestException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { SubscriptionService } from '../subscription/subscription.service';

@Injectable()
export class SubscriptionMiddleware implements NestMiddleware {
  constructor(private readonly subscriptionService: SubscriptionService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    console.log(req.cookies)

    if (!req.cookies || !req.cookies.subscriptionId) {
      const host = req.get('host');
      if (!host) {
        throw new BadRequestException('Host not found in request headers');
      }

      const subscriptionId = await this.subscriptionService.findByHost(host);
      if (subscriptionId.length === 0) {
        throw new BadRequestException('Subscription not found for the host');
      }

      res.cookie('subscriptionId', subscriptionId, { httpOnly: true, maxAge: 3600000 });
    }
    next();
  }
}
