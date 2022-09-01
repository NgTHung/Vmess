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
var UserRepository_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const common_1 = require("@nestjs/common");
const cassandra_driver_1 = require("cassandra-driver");
const data_entity_1 = require("./data.entity");
const cassandra_service_1 = require("../cassandra/cassandra.service");
let UserRepository = UserRepository_1 = class UserRepository {
    constructor(cassandraService) {
        this.cassandraService = cassandraService;
        this.logger = new common_1.Logger(UserRepository_1.name);
    }
    async onModuleInit() {
        const mappingOptions = {
            models: {
                'User': {
                    tables: ['user'],
                    mappings: new cassandra_driver_1.mapping.UnderscoreCqlToCamelCaseMappings
                }
            }
        };
        this.userMapper = this.cassandraService.createMapper(mappingOptions).forModel('User');
        await this.cassandraService.client.connect().then((v) => { this.logger.log("Sucessfully connected Cassandradb"); }).catch((e) => { this.logger.error(`ERROR when connect Cassandradb: ${e}`); });
    }
    async getUser() {
        return (await this.userMapper.findAll()).toArray();
    }
    async getUserByName(username) {
        return (await this.userMapper.find({ username: username })).toArray();
    }
    async createUser(user) {
        return (await this.userMapper.insert(user)).toArray();
    }
};
UserRepository = UserRepository_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [cassandra_service_1.CassandraService])
], UserRepository);
exports.UserRepository = UserRepository;
//# sourceMappingURL=data.repository.js.map