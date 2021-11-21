"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EMates_json_1 = __importDefault(require("./abi/emates/artifacts/contracts/EMates.sol/EMates.json"));
const ERC721Contract_1 = __importDefault(require("./ethereum-standard/ERC721Contract"));
class EMatesContract extends ERC721Contract_1.default {
    constructor() {
        super("0xD0242443f18586C389a1013539e93f3a7b27018C", EMates_json_1.default.abi, []);
    }
    async totalSupply() {
        return await this.contract.totalSupply();
    }
}
exports.default = new EMatesContract();
//# sourceMappingURL=EMatesContract.js.map