import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { EMates } from "../EMates";
export declare class EMates__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_feeReceiver: string, _fee: BigNumberish, overrides?: Overrides): Promise<EMates>;
    getDeployTransaction(_feeReceiver: string, _fee: BigNumberish, overrides?: Overrides): TransactionRequest;
    attach(address: string): EMates;
    connect(signer: Signer): EMates__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): EMates;
}
//# sourceMappingURL=EMates__factory.d.ts.map