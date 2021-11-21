import EthereumMixArtifact from "./abi/emix/artifacts/contracts/EthereumMix.sol/EthereumMix.json";
import { EthereumMix } from "./abi/emix/typechain";
import ERC20Contract from "./ethereum-standard/ERC20Contract";

class EthereumMixContract extends ERC20Contract<EthereumMix>{

    constructor() {
        super("0x5DB69B9f173f9D9FA91b7cDCc4Dc9939C0499CFe", EthereumMixArtifact.abi, []);
    }
}

export default new EthereumMixContract();
