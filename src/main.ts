import { BodyNode, DomNode, el } from "@hanul/skynode";
import { utils } from "ethers";
import CommonUtil from "./CommonUtil";
import EMatesContract from "./contracts/EMatesContract";
import EMatesMinterContract from "./contracts/EMatesMinterContract";
import EthereumMixContract from "./contracts/EthereumMixContract";
import EthereumWallet from "./ethereum/EthereumWallet";

(async () => {

    const TODAY_COUNT = 400;

    let mintPrice: DomNode;
    let mixBalance: DomNode;
    let mintCount: DomNode;
    let bar: DomNode;
    let walletAddress: DomNode;

    BodyNode.append(el(".panel",
        el("img.dsc", { src: "/images/dsc.png", srcset: "/images/dsc@2x.png 2x" }),
        mintPrice = el(".mint-price", "MINT PRICE:"),
        mixBalance = el(".mix-balance", "YOUR EMIX:"),
        el("img.title", { src: "/images/title.png", srcset: "/images/title@2x.png 2x" }),
        el("img.image", { src: "/images/image.png", srcset: "/images/image@2x.png 2x" }),
        el(".wallet-address-container",
            el("h3", "ADDRESS"),
            walletAddress = el(".wallet-address"),
        ),
        el("a.mint-button",
            el("img", { src: "/images/mint.png", srcset: "/images/mint@2x.png 2x" }),
            { click: () => EMatesMinterContract.mint() },
        ),
        el(".mint-count-container",
            el("span", "MINT PROGRESS"),
            mintCount = el("span"),
        ),
        el(".mint-bar-container",
            bar = el(".mint-bar"),
        ),
    ));

    if (await EthereumWallet.connected() !== true) {
        await EthereumWallet.connect();
    }
    const address = await EthereumWallet.loadAddress();
    if (address !== undefined) {
        walletAddress.empty().appendText(CommonUtil.shortenAddress(address));
    }

    //const price = await EMatesMinterContract.mintPrice();
    //mintPrice.empty().appendText(`MINT PRICE: ${CommonUtil.numberWithCommas(utils.formatEther(price))} EMIX`);
    mintPrice.empty().appendText("MINT PRICE: 30 EMIX");

    const progress = async () => {
        const remains = (await EMatesMinterContract.limit()).sub(await EMatesContract.totalSupply()).toNumber();
        bar.style({ width: `${(TODAY_COUNT - remains) / TODAY_COUNT * 100}%` });
        mintCount.empty().appendText(`${TODAY_COUNT - remains}/${TODAY_COUNT}`);
        if (address !== undefined) {
            const balance = await EthereumMixContract.balanceOf(address);
            mixBalance.empty().appendText(`YOUR EMIX: ${CommonUtil.numberWithCommas(utils.formatEther(balance))} EMIX`);
        }
    };
    progress();
    setInterval(() => progress(), 2000);
})();