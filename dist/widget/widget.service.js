"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WidgetService = void 0;
const common_1 = require("@nestjs/common");
const widget_entity_1 = require("./widget.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let WidgetService = class WidgetService {
    constructor(widgetRepository) {
        this.widgetRepository = widgetRepository;
    }
    safeParseJSON(jsonString) {
        try {
            return JSON.parse(jsonString);
        }
        catch (error) {
            return jsonString;
        }
    }
    async findBySubId(subscriptionId) {
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
        }
        catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }
};
exports.WidgetService = WidgetService;
exports.WidgetService = WidgetService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(widget_entity_1.Widget)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], WidgetService);
exports.default = WidgetService;
//# sourceMappingURL=widget.service.js.map