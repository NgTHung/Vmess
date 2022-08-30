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
exports.CassandraService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const cassandra_driver_1 = require("cassandra-driver");
let CassandraService = class CassandraService {
    constructor(configService) {
        this.configService = configService;
    }
    createClient() {
        this.client = new cassandra_driver_1.Client({
            cloud: {
                secureConnectBundle: "src/data/secure-connect-vmess.zip"
            },
            credentials: {
                username: this.configService.get("CLIENT_ID"),
                password: this.configService.get("CLIENT_SECRET")
            },
            keyspace: this.configService.get("CLIENT_KEYSPACE")
        });
    }
    createMapper(mappingOptions) {
        if (this.client == undefined) {
            this.createClient();
        }
        return new cassandra_driver_1.mapping.Mapper(this.client, mappingOptions);
    }
};
CassandraService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], CassandraService);
exports.CassandraService = CassandraService;
//# sourceMappingURL=cassandra.service.js.map