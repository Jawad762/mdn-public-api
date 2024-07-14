import { Injectable } from "@nestjs/common";
import { Widget } from "./widget.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class WidgetService {
    constructor(@InjectRepository(Widget) private readonly widgetRepository: Repository<Widget>) {}

    private safeParseJSON(jsonString: string): any {
        try {
            return JSON.parse(jsonString);
        } catch (error) {
            return jsonString;
        }
    }

    async findBySubId(subscriptionId: string) {
        try {
            let widgets = await this.widgetRepository.find({
                where: { subscriptionId: subscriptionId },
            });

            widgets = widgets.map(widget => {
                return {
                    ...widget,
                    dataSource: this.safeParseJSON(widget.dataSource),
                    viewOptions: this.safeParseJSON(widget.viewOptions),
                    structure: this.safeParseJSON(widget.structure),
                    target: this.safeParseJSON(widget.target)
                };
            });
            
            return widgets;
        } catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }
}

export default WidgetService;