import { BigNumber } from "@ethersproject/bignumber";
import EMatesArtifact from "./abi/emates/artifacts/contracts/EMates.sol/EMates.json";
import { EMates } from "./abi/emates/typechain";
import ERC721Contract from "./ethereum-standard/ERC721Contract";

class EMatesContract extends ERC721Contract<EMates>{

    constructor() {
        super("0xD0242443f18586C389a1013539e93f3a7b27018C", EMatesArtifact.abi, []);
    }

    public async totalSupply(): Promise<BigNumber> {
        return await this.contract.totalSupply();
    }
}

export default new EMatesContract();
