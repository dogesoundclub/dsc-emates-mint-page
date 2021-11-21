"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const ethers_1 = require("ethers");
const CommonUtil_1 = __importDefault(require("./CommonUtil"));
const EMatesContract_1 = __importDefault(require("./contracts/EMatesContract"));
const EMatesMinterContract_1 = __importDefault(require("./contracts/EMatesMinterContract"));
const EthereumMixContract_1 = __importDefault(require("./contracts/EthereumMixContract"));
const EthereumWallet_1 = __importDefault(require("./ethereum/EthereumWallet"));
(async () => {
    const TODAY_COUNT = 200;
    let mintPrice;
    let mixBalance;
    let mintCount;
    let bar;
    let walletAddress;
    skynode_1.BodyNode.append((0, skynode_1.el)(".panel", (0, skynode_1.el)("img.dsc", { src: "/images/dsc.png", srcset: "/images/dsc@2x.png 2x" }), mintPrice = (0, skynode_1.el)(".mint-price", "MINT PRICE:"), mixBalance = (0, skynode_1.el)(".mix-balance", "YOUR EMIX:"), (0, skynode_1.el)("img.title", { src: "/images/title.png", srcset: "/images/title@2x.png 2x" }), (0, skynode_1.el)("img.image", { src: "/images/image.png", srcset: "/images/image@2x.png 2x" }), (0, skynode_1.el)(".wallet-address-container", (0, skynode_1.el)("h3", "ADDRESS"), walletAddress = (0, skynode_1.el)(".wallet-address")), (0, skynode_1.el)("a.mint-button", (0, skynode_1.el)("img", { src: "/images/mint.png", srcset: "/images/mint@2x.png 2x" }), { click: () => EMatesMinterContract_1.default.mint() }), (0, skynode_1.el)(".mint-count-container", (0, skynode_1.el)("span", "MINT PROGRESS"), mintCount = (0, skynode_1.el)("span", "8000/8000")), (0, skynode_1.el)(".mint-bar-container", bar = (0, skynode_1.el)(".mint-bar"))));
    if (await EthereumWallet_1.default.connected() !== true) {
        await EthereumWallet_1.default.connect();
    }
    const address = await EthereumWallet_1.default.loadAddress();
    if (address !== undefined) {
        walletAddress.empty().appendText(CommonUtil_1.default.shortenAddress(address));
    }
    const price = await EMatesMinterContract_1.default.mintPrice();
    mintPrice.empty().appendText(`MINT PRICE: ${CommonUtil_1.default.numberWithCommas(ethers_1.utils.formatEther(price))}`);
    const progress = async () => {
        const remains = (await EMatesMinterContract_1.default.limit()).sub(await EMatesContract_1.default.totalSupply()).toNumber();
        bar.style({ width: `${(TODAY_COUNT - remains) / TODAY_COUNT * 100}%` });
        mintCount.empty().appendText(`${TODAY_COUNT - remains}/${TODAY_COUNT}`);
        if (address !== undefined) {
            const balance = await EthereumMixContract_1.default.balanceOf(address);
            mixBalance.empty().appendText(`YOUR EMIX: ${CommonUtil_1.default.numberWithCommas(ethers_1.utils.formatEther(balance))}`);
        }
    };
    progress();
    setInterval(() => progress(), 1000);
})();
//# sourceMappingURL=main.js.map