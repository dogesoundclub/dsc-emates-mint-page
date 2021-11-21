import { BigNumber } from "@ethersproject/bignumber";
import { EMates } from "./abi/emates/typechain";
import ERC721Contract from "./ethereum-standard/ERC721Contract";
declare class EMatesContract extends ERC721Contract<EMates> {
    constructor();
    totalSupply(): Promise<BigNumber>;
}
declare const _default: EMatesContract;
export default _default;
//# sourceMappingURL=EMatesContract.d.ts.map