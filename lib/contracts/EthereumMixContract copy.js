"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EthereumMix_json_1 = __importDefault(require("./abi/emix/artifacts/contracts/EthereumMix.sol/EthereumMix.json"));
const ERC20Contract_1 = __importDefault(require("./ethereum-standard/ERC20Contract"));
class EthereumMixContract extends ERC20Contract_1.default {
    constructor() {
        super("0x5DB69B9f173f9D9FA91b7cDCc4Dc9939C0499CFe", EthereumMix_json_1.default.abi, []);
    }
}
exports.default = new EthereumMixContract();
//# sourceMappingURL=EthereumMixContract%20copy.js.map