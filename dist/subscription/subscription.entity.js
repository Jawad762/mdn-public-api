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
exports.Subscription = void 0;
const typeorm_1 = require("typeorm");
let Subscription = class Subscription {
};
exports.Subscription = Subscription;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Subscription.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'PublicId' }),
    __metadata("design:type", String)
], Subscription.prototype, "publicId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Code' }),
    __metadata("design:type", String)
], Subscription.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Name' }),
    __metadata("design:type", String)
], Subscription.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Status' }),
    __metadata("design:type", String)
], Subscription.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'CreationDate', type: 'datetime' }),
    __metadata("design:type", Date)
], Subscription.prototype, "creationDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Hosts' }),
    __metadata("design:type", String)
], Subscription.prototype, "hosts", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Master' }),
    __metadata("design:type", Boolean)
], Subscription.prototype, "master", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'LandingPage' }),
    __metadata("design:type", String)
], Subscription.prototype, "landingPage", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'LogoId' }),
    __metadata("design:type", Number)
], Subscription.prototype, "logoId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'LogoIconId' }),
    __metadata("design:type", Number)
], Subscription.prototype, "logoIconId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Type' }),
    __metadata("design:type", String)
], Subscription.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'OrganizationId' }),
    __metadata("design:type", Number)
], Subscription.prototype, "organizationId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'ConnectionStringKey' }),
    __metadata("design:type", String)
], Subscription.prototype, "connectionStringKey", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'TriggerSyncTime', type: 'datetime' }),
    __metadata("design:type", Date)
], Subscription.prototype, "triggerSyncTime", void 0);
exports.Subscription = Subscription = __decorate([
    (0, typeorm_1.Entity)('Subscription')
], Subscription);
//# sourceMappingURL=subscription.entity.js.map