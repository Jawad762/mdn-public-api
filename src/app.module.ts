import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SubscriptionModule } from './subscription/subscription.module';
import { SubscriptionMiddleware } from './subscription/subscription.middleware';
import { Subscription } from './subscription/subscription.entity';
import { Widget } from './widget/widget.entity';
import { WidgetModule } from './widget/widget.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: async () => ({
        type: 'mssql',
        host: process.env.DB_SERVER,
        port: parseInt(process.env.DB_PORT),
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        entities: [Subscription, Widget],
        // synchronize: true,
        options: { encrypt: false }
      }),
      inject: [ConfigService],
    }),
    SubscriptionModule, WidgetModule
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(SubscriptionMiddleware)
      .forRoutes('*');
  }
}
