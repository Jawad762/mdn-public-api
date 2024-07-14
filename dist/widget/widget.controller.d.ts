import { WidgetService } from "./widget.service";
import { Request, Response } from "express";
export declare class WidgetController {
    private readonly widgetService;
    constructor(widgetService: WidgetService);
    findBySubId(req: Request, response: Response): Promise<Response<any, Record<string, any>>>;
}
