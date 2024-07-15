import { Test, TestingModule } from '@nestjs/testing';
import { WidgetController } from './widget.controller';
import { WidgetService } from './widget.service';
import { Widget } from './widget.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

describe('WidgetController', () => {
  let widgetsController: WidgetController;
  let widgetsService: WidgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WidgetController],
      providers: [
        WidgetService,
        {
          provide: getRepositoryToken(Widget),
          useClass: Repository,
        },
      ],
    }).compile();

    widgetsService = module.get<WidgetService>(WidgetService);
    widgetsController = module.get<WidgetController>(WidgetController);
  });

  describe('findBySubId', () => {
    it('should return an array of widgets', async () => {
      const result = [{ id: 1, subscriptionId: 'sub123' }] as unknown as Widget[];
      jest.spyOn(widgetsService, 'findBySubId').mockResolvedValue(result);

      const req: any = { subscriptionId: 'sub123' };
      const res: any = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      await widgetsController.findBySubId(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ success: true, data: result });
    });
  });
});
