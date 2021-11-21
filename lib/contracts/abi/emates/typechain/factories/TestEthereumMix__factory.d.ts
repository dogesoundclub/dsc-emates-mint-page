import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { TestEthereumMix } from "../TestEthereumMix";
export declare class TestEthereumMix__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_signer: string, overrides?: Overrides): Promise<TestEthereumMix>;
    getDeployTransaction(_signer: string, overrides?: Overrides): TransactionRequest;
    attach(address: string): TestEthereumMix;
    connect(signer: Signer): TestEthereumMix__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): TestEthereumMix;
}
//# sourceMappingURL=TestEthereumMix__factory.d.ts.map