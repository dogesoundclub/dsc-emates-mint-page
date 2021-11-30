import { BigNumber } from "ethers";
import EthereumWallet from "../ethereum/EthereumWallet";
import EMatesMinterV2Artifact from "./abi/emates/artifacts/contracts/EMatesMinterV2.sol/EMatesMinterV2.json";
import { EMatesMinter } from "./abi/emates/typechain";
import EMatesContract from "./EMatesContract";
import EthereumContract from "./EthereumContract";
import EthereumMixContract from "./EthereumMixContract";

class EMatesMinterContract extends EthereumContract<EMatesMinter> {

    constructor() {
        super("0xfB67b3868d5FDCAE0e93F254e50C4aC552EaE270", EMatesMinterV2Artifact.abi, []);
    }

    public async mintPrice(): Promise<BigNumber> {
        return await this.contract.mintPrice();
    }

    public async limit(): Promise<BigNumber> {
        return await this.contract.limit();
    }

    public async mint() {

        const contract = await this.connectAndGetWalletContract();
        const owner = await EthereumWallet.loadAddress();
        if (contract !== undefined && owner !== undefined) {

            const price = await this.mintPrice();

            if ((await EthereumMixContract.balanceOf(owner)).lt(price)) {
                if (confirm("Ethereum Mix가 부족합니다. Mix를 Ethereum Mix로 스왑하시겠습니까?")) {
                    open("https://mix.chainhorizon.org/");
                }
            }

            else if ((await EthereumMixContract.allowance(owner, this.address)).lt(price)) {

                const deadline = Math.ceil(Date.now() / 1000) + 1000000;
                const signed = await EthereumWallet.signERC20Permit(

                    await EthereumMixContract.getName(),
                    "1",
                    EthereumMixContract.address,

                    this.address,
                    price,
                    await EthereumMixContract.getNonce(owner),
                    deadline,
                );

                if ((await EMatesContract.totalSupply()).gte(await this.limit())) {
                    alert("더 이상 민팅이 불가능합니다.");
                } else {
                    await contract.mintWithPermit(deadline, signed.v, signed.r, signed.s);
                }
            } else {
                if ((await EMatesContract.totalSupply()).gte(await this.limit())) {
                    alert("더 이상 민팅이 불가능합니다.");
                } else {
                    await contract.mint();
                }
            }
        }
    }
}

export default new EMatesMinterContract();
