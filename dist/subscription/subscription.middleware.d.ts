import { NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { SubscriptionService } from '../subscription/subscription.service';
export declare class SubscriptionMiddleware implements NestMiddleware {
    private readonly subscriptionService;
    constructor(subscriptionService: SubscriptionService);
    use(req: Request, res: Response, next: NextFunction): Promise<void>;
}
