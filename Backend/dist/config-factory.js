"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConfigService = void 0;
const config_1 = require("@nestjs/config");
async function getConfigService() {
    return new config_1.ConfigService();
}
exports.getConfigService = getConfigService;
//# sourceMappingURL=config-factory.js.map