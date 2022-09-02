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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const data_repository_1 = require("./data.repository");
const data_entity_1 = require("./data.entity");
const cassandra_driver_1 = require("cassandra-driver");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async getUser() {
        return this.userRepository.getUser();
    }
    async getUserByName(username) {
        return this.userRepository.getUserByName(username);
    }
    async createUser(employee) {
        let id = cassandra_driver_1.types.Uuid.random();
        await this.userRepository.createUser({ id: id, username: employee.username, password: employee.password });
        return id;
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [data_repository_1.UserRepository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=data.service.js.map