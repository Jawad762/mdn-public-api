import { Repository } from 'typeorm';
import { Subscription } from './subscription.entity';
export declare class SubscriptionService {
    private readonly subscriptionRepository;
    constructor(subscriptionRepository: Repository<Subscription>);
    findByHost(host: string): Promise<string>;
}
