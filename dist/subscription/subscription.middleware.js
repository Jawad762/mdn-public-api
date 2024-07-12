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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionMiddleware = void 0;
const common_1 = require("@nestjs/common");
const subscription_service_1 = require("../subscription/subscription.service");
let SubscriptionMiddleware = class SubscriptionMiddleware {
    constructor(subscriptionService) {
        this.subscriptionService = subscriptionService;
    }
    async use(req, res, next) {
        console.log(req.cookies);
        if (!req.cookies || !req.cookies.subscriptionId) {
            const host = req.get('host');
            if (!host) {
                throw new common_1.BadRequestException('Host not found in request headers');
            }
            const subscriptionId = await this.subscriptionService.findByHost(host);
            if (subscriptionId.length === 0) {
                throw new common_1.BadRequestException('Subscription not found for the host');
            }
            res.cookie('subscriptionId', subscriptionId, { httpOnly: true, maxAge: 3600000 });
        }
        next();
    }
};
exports.SubscriptionMiddleware = SubscriptionMiddleware;
exports.SubscriptionMiddleware = SubscriptionMiddleware = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [subscription_service_1.SubscriptionService])
], SubscriptionMiddleware);
//# sourceMappingURL=subscription.middleware.js.map