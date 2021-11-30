import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { EMatesMinterV2 } from "../EMatesMinterV2";
export declare class EMatesMinterV2__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_emates: string, _emix: string, _mintPrice: BigNumberish, overrides?: Overrides): Promise<EMatesMinterV2>;
    getDeployTransaction(_emates: string, _emix: string, _mintPrice: BigNumberish, overrides?: Overrides): TransactionRequest;
    attach(address: string): EMatesMinterV2;
    connect(signer: Signer): EMatesMinterV2__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): EMatesMinterV2;
}
//# sourceMappingURL=EMatesMinterV2__factory.d.ts.map