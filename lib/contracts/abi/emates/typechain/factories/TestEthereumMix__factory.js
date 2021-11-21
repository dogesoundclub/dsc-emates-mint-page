"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestEthereumMix__factory = void 0;
const contracts_1 = require("@ethersproject/contracts");
class TestEthereumMix__factory extends contracts_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(_signer, overrides) {
        return super.deploy(_signer, overrides || {});
    }
    getDeployTransaction(_signer, overrides) {
        return super.getDeployTransaction(_signer, overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static connect(address, signerOrProvider) {
        return new contracts_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.TestEthereumMix__factory = TestEthereumMix__factory;
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_signer",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "Approval",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnershipTransferred",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "receiver",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "fromChain",
                type: "uint256",
            },
            {
                indexed: true,
                internalType: "address",
                name: "sender",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "sendId",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "ReceiveOverHorizon",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "sender",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "toChain",
                type: "uint256",
            },
            {
                indexed: true,
                internalType: "address",
                name: "receiver",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "sendId",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "SendOverHorizon",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "signer",
                type: "address",
            },
        ],
        name: "SetSigner",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "Transfer",
        type: "event",
    },
    {
        inputs: [],
        name: "DOMAIN_SEPARATOR",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "PERMIT_TYPEHASH",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
        ],
        name: "allowance",
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
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "approve",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "balanceOf",
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
        name: "decimals",
        outputs: [
            {
                internalType: "uint8",
                name: "",
                type: "uint8",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "subtractedValue",
                type: "uint256",
            },
        ],
        name: "decreaseAllowance",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "addedValue",
                type: "uint256",
            },
        ],
        name: "increaseAllowance",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "mint",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "name",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "nonces",
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
        name: "owner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
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
        name: "permit",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "fromChain",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "toChain",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "sender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "sendId",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "signature",
                type: "bytes",
            },
        ],
        name: "receiveOverHorizon",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "received",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "sender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "toChain",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "receiver",
                type: "address",
            },
        ],
        name: "sendCount",
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
                name: "toChain",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "receiver",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "sendOverHorizon",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "sended",
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
                internalType: "address",
                name: "_signer",
                type: "address",
            },
        ],
        name: "setSigner",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "signer",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "symbol",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "totalSupply",
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
                internalType: "address",
                name: "recipient",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "transfer",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "transferFrom",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "version",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
const _bytecode = "0x60a06040523480156200001157600080fd5b5060405162001c2738038062001c2783398101604081905262000034916200028b565b6040518060400160405280600c81526020016b08ae8d0cae4caeada409ad2f60a31b8152506040518060400160405280600481526020016308a9a92b60e31b815250604051806040016040528060018152602001603160f81b8152508282620000ac620000a66200019160201b60201c565b62000195565b8151620000c1906004906020850190620001e5565b508051620000d7906005906020840190620001e5565b50508151620000ef91506006906020840190620001e5565b508251602080850191909120825183830120604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f94810194909452830191909152606082015246608082018190523060a08301529060c00160408051808303601f1901815291905280516020909101206080525050600880546001600160a01b0319166001600160a01b03949094169390931790925550620002fa9050565b3390565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b828054620001f390620002bd565b90600052602060002090601f01602090048101928262000217576000855562000262565b82601f106200023257805160ff191683800117855562000262565b8280016001018555821562000262579182015b828111156200026257825182559160200191906001019062000245565b506200027092915062000274565b5090565b5b8082111562000270576000815560010162000275565b6000602082840312156200029e57600080fd5b81516001600160a01b0381168114620002b657600080fd5b9392505050565b600181811c90821680620002d257607f821691505b60208210811415620002f457634e487b7160e01b600052602260045260246000fd5b50919050565b60805161190a6200031d600039600081816102cc0152610bef015261190a6000f3fe608060405234801561001057600080fd5b50600436106101a95760003560e01c80635acfbbd3116100f9578063a457c2d711610097578063d505accf11610071578063d505accf14610413578063dd62ed3e14610426578063ec79b1851461045f578063f2fde38b1461047257600080fd5b8063a457c2d7146103da578063a9059cbb146103ed578063ba133b331461040057600080fd5b8063715018a6116100d3578063715018a6146103995780637ecebe00146103a15780638da5cb5b146103c157806395d89b41146103d257600080fd5b80635acfbbd31461031c5780636c19e7831461035d57806370a082311461037057600080fd5b806323b872dd116101665780633644e515116101405780633644e515146102c757806339509351146102ee57806340c10f191461030157806354fd4d501461031457600080fd5b806323b872dd1461027e57806330adf81f14610291578063313ce567146102b857600080fd5b806306fdde03146101ae578063095ea7b3146101cc57806318160ddd146101ef5780631c5489b7146102015780632353387b1461023e578063238ac93314610253575b600080fd5b6101b6610485565b6040516101c391906114d5565b60405180910390f35b6101df6101da36600461150b565b610517565b60405190151581526020016101c3565b6003545b6040519081526020016101c3565b6101df61020f366004611535565b600a60209081526000948552604080862082529385528385208152918452828420909152825290205460ff1681565b61025161024c36600461158f565b61052d565b005b600854610266906001600160a01b031681565b6040516001600160a01b0390911681526020016101c3565b6101df61028c366004611676565b610881565b6101f37f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c981565b604051601281526020016101c3565b6101f37f000000000000000000000000000000000000000000000000000000000000000081565b6101df6102fc36600461150b565b6108d8565b61025161030f36600461150b565b61090f565b6101b661091d565b6101f361032a3660046116b2565b6001600160a01b039283166000908152600960209081526040808320948352938152838220929094168152925290205490565b61025161036b3660046116ee565b6109ab565b6101f361037e3660046116ee565b6001600160a01b031660009081526001602052604090205490565b610251610a1f565b6101f36103af3660046116ee565b60076020526000908152604090205481565b6000546001600160a01b0316610266565b6101b6610a55565b6101df6103e836600461150b565b610a64565b6101df6103fb36600461150b565b610afd565b6101f361040e366004611535565b610b0a565b610251610421366004611709565b610b55565b6101f361043436600461177c565b6001600160a01b03918216600090815260026020908152604080832093909416825291909152205490565b6101f361046d3660046117af565b610df3565b6102516104803660046116ee565b610e84565b606060048054610494906117d4565b80601f01602080910402602001604051908101604052809291908181526020018280546104c0906117d4565b801561050d5780601f106104e25761010080835404028352916020019161050d565b820191906000526020600020905b8154815290600101906020018083116104f057829003601f168201915b5050505050905090565b6000610524338484610f1f565b50600192915050565b80516041146105835760405162461bcd60e51b815260206004820152601860248201527f696e76616c6964207369676e6174757265206c656e677468000000000000000060448201526064015b60405180910390fd5b336000908152600a6020908152604080832089845282528083206001600160a01b0388168452825280832086845290915290205460ff16156105c457600080fd5b4685146105d057600080fd5b6040516bffffffffffffffffffffffff1933606090811b82166020840152603483018990526054830188905286901b1660748201526088810184905260a8810183905260009060c80160405160208183030381529060405280519060200120905060008160405160200161067091907f19457468657265756d205369676e6564204d6573736167653a0a3332000000008152601c810191909152603c0190565b60408051601f19818403018152918152815160209283012091850151908501516060860151929350909160001a7f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a082111561070d5760405162461bcd60e51b815260206004820152601b60248201527f696e76616c6964207369676e6174757265202773272076616c75650000000000604482015260640161057a565b8060ff16601b148061072257508060ff16601c145b61076e5760405162461bcd60e51b815260206004820152601b60248201527f696e76616c6964207369676e6174757265202776272076616c75650000000000604482015260640161057a565b60085460408051600081526020810180835287905260ff84169181019190915260608101859052608081018490526001600160a01b039091169060019060a0016020604051602081039080840390855afa1580156107d0573d6000803e3d6000fd5b505050602060405103516001600160a01b0316146107ed57600080fd5b6107f73388611044565b336000818152600a602090815260408083208f845282528083206001600160a01b038e168085529083528184208d8552835292819020805460ff1916600117905580518c81529182018b905291928e9290917f9b8cc913c3e25613faea2e6cfeb6dce457ef77c33f5d9f12119326580bec128f910160405180910390a45050505050505050505050565b6001600160a01b038316600090815260026020908152604080832033845290915281205460001981146108c2576108c285336108bd8685611825565b610f1f565b6108cd858585611123565b506001949350505050565b3360008181526002602090815260408083206001600160a01b038716845290915281205490916105249185906108bd90869061183c565b6109198282611044565b5050565b6006805461092a906117d4565b80601f0160208091040260200160405190810160405280929190818152602001828054610956906117d4565b80156109a35780601f10610978576101008083540402835291602001916109a3565b820191906000526020600020905b81548152906001019060200180831161098657829003601f168201915b505050505081565b6000546001600160a01b031633146109d55760405162461bcd60e51b815260040161057a90611854565b600880546001600160a01b0319166001600160a01b0383169081179091556040517fbb10aee7ef5a307b8097c6a7f2892b909ff1736fd24a6a5260640c185f7153b690600090a250565b6000546001600160a01b03163314610a495760405162461bcd60e51b815260040161057a90611854565b610a5360006112f2565b565b606060058054610494906117d4565b3360009081526002602090815260408083206001600160a01b038616845290915281205482811015610ae65760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b606482015260840161057a565b610af33385858403610f1f565b5060019392505050565b6000610524338484611123565b60096020528360005260406000206020528260005260406000206020528160005260406000208181548110610b3e57600080fd5b906000526020600020016000935093505050505481565b83421115610b6257600080fd5b6001600160a01b038781166000818152600760208181526040808420805482517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c981860152808401889052978e166060890152608088018d905260a0880181905260c08089018d90528351808a03909101815260e08901845280519085012061190160f01b6101008a01527f00000000000000000000000000000000000000000000000000000000000000006101028a0152610122808a01919091528351808a0390910181526101429098019092528651968301969096209484529190529192600192909190610c5390849061183c565b90915550506001600160a01b038781169089161415610c7157600080fd5b873b15610d4a57604080516020810185905280820184905260f886901b6001600160f81b0319166060820152815160418183030181526061820192839052630b135d3f60e11b9092526001600160a01b038a1691631626ba7e91610cd9918591606501611889565b60206040518083038186803b158015610cf157600080fd5b505afa158015610d05573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d2991906118aa565b6001600160e01b031916631626ba7e60e01b14610d4557600080fd5b610dde565b6040805160008082526020820180845284905260ff871692820192909252606081018590526080810184905260019060a0016020604051602081039080840390855afa158015610d9e573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116610dbe57600080fd5b886001600160a01b0316816001600160a01b031614610ddc57600080fd5b505b610de9888888610f1f565b5050505050505050565b6000610dff3383611342565b33600081815260096020908152604080832088845282528083206001600160a01b0388168085529083528184208054600181018255818652948490208501889055825185815293840188905294909289927f88a9fbb0dbf3ab14fab2aaeca87654c792e7f2de49b08a01bdc60820e4429e46910160405180910390a495945050505050565b6000546001600160a01b03163314610eae5760405162461bcd60e51b815260040161057a90611854565b6001600160a01b038116610f135760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161057a565b610f1c816112f2565b50565b6001600160a01b038316610f815760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b606482015260840161057a565b6001600160a01b038216610fe25760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b606482015260840161057a565b6001600160a01b0383811660008181526002602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b03821661109a5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640161057a565b80600360008282546110ac919061183c565b90915550506001600160a01b038216600090815260016020526040812080548392906110d990849061183c565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b6001600160a01b0383166111875760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b606482015260840161057a565b6001600160a01b0382166111e95760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b606482015260840161057a565b6001600160a01b038316600090815260016020526040902054818110156112615760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b606482015260840161057a565b6001600160a01b0380851660009081526001602052604080822085850390559185168152908120805484929061129890849061183c565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516112e491815260200190565b60405180910390a350505050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b0382166113a25760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b606482015260840161057a565b6001600160a01b038216600090815260016020526040902054818110156114165760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b606482015260840161057a565b6001600160a01b0383166000908152600160205260408120838303905560038054849290611445908490611825565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001611037565b6000815180845260005b818110156114ae57602081850181015186830182015201611492565b818111156114c0576000602083870101525b50601f01601f19169290920160200192915050565b6020815260006114e86020830184611488565b9392505050565b80356001600160a01b038116811461150657600080fd5b919050565b6000806040838503121561151e57600080fd5b611527836114ef565b946020939093013593505050565b6000806000806080858703121561154b57600080fd5b611554856114ef565b935060208501359250611569604086016114ef565b9396929550929360600135925050565b634e487b7160e01b600052604160045260246000fd5b60008060008060008060c087890312156115a857600080fd5b86359550602087013594506115bf604088016114ef565b9350606087013592506080870135915060a087013567ffffffffffffffff808211156115ea57600080fd5b818901915089601f8301126115fe57600080fd5b81358181111561161057611610611579565b604051601f8201601f19908116603f0116810190838211818310171561163857611638611579565b816040528281528c602084870101111561165157600080fd5b8260208601602083013760006020848301015280955050505050509295509295509295565b60008060006060848603121561168b57600080fd5b611694846114ef565b92506116a2602085016114ef565b9150604084013590509250925092565b6000806000606084860312156116c757600080fd5b6116d0846114ef565b9250602084013591506116e5604085016114ef565b90509250925092565b60006020828403121561170057600080fd5b6114e8826114ef565b600080600080600080600060e0888a03121561172457600080fd5b61172d886114ef565b965061173b602089016114ef565b95506040880135945060608801359350608088013560ff8116811461175f57600080fd5b9699959850939692959460a0840135945060c09093013592915050565b6000806040838503121561178f57600080fd5b611798836114ef565b91506117a6602084016114ef565b90509250929050565b6000806000606084860312156117c457600080fd5b833592506116a2602085016114ef565b600181811c908216806117e857607f821691505b6020821081141561180957634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b6000828210156118375761183761180f565b500390565b6000821982111561184f5761184f61180f565b500190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b8281526040602082015260006118a26040830184611488565b949350505050565b6000602082840312156118bc57600080fd5b81516001600160e01b0319811681146114e857600080fdfea264697066735822122071f637aad0049328bb7d77eada0e6f31d97c595054cb6dae926b47ac7c11ad3064736f6c63430008090033";
//# sourceMappingURL=TestEthereumMix__factory.js.map