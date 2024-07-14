import { SubscriptionService } from './subscription.service';
export declare class SubscriptionsController {
    private readonly subscriptionsService;
    constructor(subscriptionsService: SubscriptionService);
    findByHost(host: string): Promise<string>;
}
