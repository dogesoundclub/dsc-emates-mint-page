"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IEMatesMinter__factory = void 0;
const ethers_1 = require("ethers");
class IEMatesMinter__factory {
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IEMatesMinter__factory = IEMatesMinter__factory;
const _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "limit",
                type: "uint256",
            },
        ],
        name: "SetLimit",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "mintPrice",
                type: "uint256",
            },
        ],
        name: "SetMintPrice",
        type: "event",
    },
    {
        inputs: [],
        name: "emates",
        outputs: [
            {
                internalType: "contract IEMates",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "emix",
        outputs: [
            {
                internalType: "contract IEthereumMix",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "limit",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "mint",
        outputs: [
            {
                internalType: "uint256",
                name: "id",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "mintPrice",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "deadline",
                type: "uint256",
            },
            {
                internalType: "uint8",
                name: "v",
                type: "uint8",
            },
            {
                internalType: "bytes32",
                name: "r",
                type: "bytes32",
            },
            {
                internalType: "bytes32",
                name: "s",
                type: "bytes32",
            },
        ],
        name: "mintWithPermit",
        outputs: [
            {
                internalType: "uint256",
                name: "id",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
];
//# sourceMappingURL=IEMatesMinter__factory.js.map