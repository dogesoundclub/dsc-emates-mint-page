import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { EMatesMinter } from "../EMatesMinter";
export declare class EMatesMinter__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_emates: string, _emix: string, _mintPrice: BigNumberish, overrides?: Overrides): Promise<EMatesMinter>;
    getDeployTransaction(_emates: string, _emix: string, _mintPrice: BigNumberish, overrides?: Overrides): TransactionRequest;
    attach(address: string): EMatesMinter;
    connect(signer: Signer): EMatesMinter__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): EMatesMinter;
}
//# sourceMappingURL=EMatesMinter__factory.d.ts.map