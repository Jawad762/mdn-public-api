import { Widget } from "./widget.entity";
import { Repository } from "typeorm";
export declare class WidgetService {
    private readonly widgetRepository;
    constructor(widgetRepository: Repository<Widget>);
    private safeParseJSON;
    findBySubId(subscriptionId: string): Promise<Widget[]>;
}
export default WidgetService;
