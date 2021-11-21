"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PolygonMix_json_1 = __importDefault(require("./abi/pmix/artifacts/contracts/PolygonMix.sol/PolygonMix.json"));
const ERC20Contract_1 = __importDefault(require("./polygon-standard/ERC20Contract"));
class PolygonMixContract extends ERC20Contract_1.default {
    constructor() {
        super("0x5085a6879Af6767732c51CA0fc7422d41d9aAEf6", PolygonMix_json_1.default.abi, []);
    }
}
exports.default = new PolygonMixContract();
//# sourceMappingURL=PolygonMixContract.js.map