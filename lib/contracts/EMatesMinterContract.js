"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EthereumWallet_1 = __importDefault(require("../ethereum/EthereumWallet"));
const EMatesMinterV2_json_1 = __importDefault(require("./abi/emates/artifacts/contracts/EMatesMinterV2.sol/EMatesMinterV2.json"));
const EMatesContract_1 = __importDefault(require("./EMatesContract"));
const EthereumContract_1 = __importDefault(require("./EthereumContract"));
const EthereumMixContract_1 = __importDefault(require("./EthereumMixContract"));
class EMatesMinterContract extends EthereumContract_1.default {
    constructor() {
        super("0xfB67b3868d5FDCAE0e93F254e50C4aC552EaE270", EMatesMinterV2_json_1.default.abi, []);
    }
    async mintPrice() {
        return await this.contract.mintPrice();
    }
    async limit() {
        return await this.contract.limit();
    }
    async mint() {
        const contract = await this.connectAndGetWalletContract();
        const owner = await EthereumWallet_1.default.loadAddress();
        if (contract !== undefined && owner !== undefined) {
            const price = await this.mintPrice();
            if ((await EthereumMixContract_1.default.balanceOf(owner)).lt(price)) {
                if (confirm("Ethereum Mix가 부족합니다. Mix를 Ethereum Mix로 스왑하시겠습니까?")) {
                    open("https://mix.chainhorizon.org/");
                }
            }
            else if ((await EthereumMixContract_1.default.allowance(owner, this.address)).lt(price)) {
                const deadline = Math.ceil(Date.now() / 1000) + 1000000;
                const signed = await EthereumWallet_1.default.signERC20Permit(await EthereumMixContract_1.default.getName(), "1", EthereumMixContract_1.default.address, this.address, price, await EthereumMixContract_1.default.getNonce(owner), deadline);
                if ((await EMatesContract_1.default.totalSupply()).gte(await this.limit())) {
                    alert("더 이상 민팅이 불가능합니다.");
                }
                else {
                    await contract.mintWithPermit(deadline, signed.v, signed.r, signed.s);
                }
            }
            else {
                if ((await EMatesContract_1.default.totalSupply()).gte(await this.limit())) {
                    alert("더 이상 민팅이 불가능합니다.");
                }
                else {
                    await contract.mint();
                }
            }
        }
    }
}
exports.default = new EMatesMinterContract();
//# sourceMappingURL=EMatesMinterContract.js.map