import { BigNumberish } from "@ethersproject/bignumber";
import { CompMint } from "./abi/compmint/typechain";
import PolygonContract from "./PolygonContract";
declare class EMatesMinterContract extends PolygonContract<CompMint> {
    constructor();
    mint(id: BigNumberish): Promise<void>;
}
declare const _default: EMatesMinterContract;
export default _default;
//# sourceMappingURL=CompMintContract.d.ts.map