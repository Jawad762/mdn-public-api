import { Controller, Get, Req, Res } from "@nestjs/common";
import { WidgetService } from "./widget.service";
import { Request, Response } from "express";

@Controller('posts')
export class WidgetController {
    constructor(private readonly widgetService: WidgetService) {}

    @Get()
    async findBySubId(@Req() req: Request, @Res() response: Response) {
        try {
            const subId = req.subscriptionId
            const widgets = await this.widgetService.findBySubId(subId)
            return response.status(200).json({ success: true, data: widgets })
        } catch (error) {
            console.error(error)
            return response.status(500).json({ success: false, error: { message: 'Something went wrong...' } })
        }
    }
}   