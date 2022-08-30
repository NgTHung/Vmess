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
const common_1 = require("@nestjs/common");
const data_service_1 = require("./data.service");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async doSomething() {
        const res = await this.userService.getUser();
        return { msg: res };
    }
};
__decorate([
    (0, common_1.Get)('doSomthing'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "doSomething", null);
UserController = __decorate([
    (0, common_1.Controller)('data'),
    __metadata("design:paramtypes", [data_service_1.UserService])
], UserController);
exports.default = UserController;
//# sourceMappingURL=data.controller.js.map