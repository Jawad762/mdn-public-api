import { Controller, Get, Query } from '@nestjs/common';
import { SubscriptionService } from './subscription.service';

@Controller('subscriptions')
export class SubscriptionsController {
  constructor(private readonly subscriptionsService: SubscriptionService) {}

  @Get()
  async findByHost(@Query('host') host: string): Promise<string> {
    return this.subscriptionsService.findByHost(host);
  }
}
