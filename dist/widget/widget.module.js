"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WidgetModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const widget_service_1 = require("./widget.service");
const widget_entity_1 = require("./widget.entity");
const widget_controller_1 = require("./widget.controller");
let WidgetModule = class WidgetModule {
};
exports.WidgetModule = WidgetModule;
exports.WidgetModule = WidgetModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([widget_entity_1.Widget])],
        providers: [widget_service_1.WidgetService],
        controllers: [widget_controller_1.WidgetController],
        exports: [widget_service_1.WidgetService],
    })
], WidgetModule);
//# sourceMappingURL=widget.module.js.map