import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Subscription } from './subscription.entity';

@Injectable()
export class SubscriptionService {
  constructor(
    @InjectRepository(Subscription)
    private readonly subscriptionRepository: Repository<Subscription>,
  ) {}

  async findByHost(host: string): Promise<string> {
    const fetchedHost = await this.subscriptionRepository
      .createQueryBuilder('subscription')
      .select('subscription.id')
      .where('subscription.hosts LIKE :host', { host: `%${host.split(':')[0]}%` })
      .getOne();

    return fetchedHost.id
  }
}
