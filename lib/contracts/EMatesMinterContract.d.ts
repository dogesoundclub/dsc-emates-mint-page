import { BigNumber } from "ethers";
import { EMatesMinter } from "./abi/emates/typechain";
import EthereumContract from "./EthereumContract";
declare class EMatesMinterContract extends EthereumContract<EMatesMinter> {
    constructor();
    mintPrice(): Promise<BigNumber>;
    limit(): Promise<BigNumber>;
    mint(): Promise<void>;
}
declare const _default: EMatesMinterContract;
export default _default;
//# sourceMappingURL=EMatesMinterContract.d.ts.map