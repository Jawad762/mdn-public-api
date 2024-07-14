import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubscriptionService } from './subscription.service';
import { Subscription } from './subscription.entity';
import { SubscriptionsController } from './subscription.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Subscription])],
  providers: [SubscriptionService],
  controllers: [SubscriptionsController],
  exports: [SubscriptionService],
})
export class SubscriptionModule {}
