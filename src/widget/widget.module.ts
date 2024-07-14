import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WidgetService } from './widget.service';
import { Widget } from './widget.entity';
import { WidgetController } from './widget.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Widget])],
  providers: [WidgetService],
  controllers: [WidgetController],
  exports: [WidgetService],
})
export class WidgetModule {}
