import { Controller, Get, Query } from '@nestjs/common';
import { SubscriptionService } from './subscription.service';

@Controller('subscriptions')
export class SubscriptionController {
  constructor(private readonly subscriptionService: SubscriptionService) {}

  @Get()
  async findByCode(@Query('host') host: string): Promise<string> {
    return this.subscriptionService.findByHost(host);
  }
}
