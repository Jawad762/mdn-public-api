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
exports.WidgetController = void 0;
const common_1 = require("@nestjs/common");
const widget_service_1 = require("./widget.service");
let WidgetController = class WidgetController {
    constructor(widgetService) {
        this.widgetService = widgetService;
    }
    async findBySubId(req, response) {
        try {
            const subId = req.subscriptionId;
            const widgets = await this.widgetService.findBySubId(subId);
            return response.status(200).json({ success: true, data: widgets });
        }
        catch (error) {
            console.error(error);
            return response.status(500).json({ success: false, error: { message: 'Something went wrong...' } });
        }
    }
};
exports.WidgetController = WidgetController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], WidgetController.prototype, "findBySubId", null);
exports.WidgetController = WidgetController = __decorate([
    (0, common_1.Controller)('posts'),
    __metadata("design:paramtypes", [widget_service_1.WidgetService])
], WidgetController);
//# sourceMappingURL=widget.controller.js.map