"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const subscription_module_1 = require("./subscription/subscription.module");
const subscription_middleware_1 = require("./subscription/subscription.middleware");
const subscription_entity_1 = require("./subscription/subscription.entity");
const widget_entity_1 = require("./widget/widget.entity");
const widget_module_1 = require("./widget/widget.module");
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(subscription_middleware_1.SubscriptionMiddleware)
            .forRoutes('*');
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                useFactory: async () => ({
                    type: 'mssql',
                    host: process.env.DB_SERVER,
                    port: parseInt(process.env.DB_PORT),
                    username: process.env.DB_USER,
                    password: process.env.DB_PASSWORD,
                    database: process.env.DB_NAME,
                    entities: [subscription_entity_1.Subscription, widget_entity_1.Widget],
                    options: { encrypt: false }
                }),
                inject: [config_1.ConfigService],
            }),
            subscription_module_1.SubscriptionModule, widget_module_1.WidgetModule
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map