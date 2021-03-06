/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { EMatesMinter } from "../EMatesMinter";

export class EMatesMinter__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _emates: string,
    _emix: string,
    _mintPrice: BigNumberish,
    overrides?: Overrides
  ): Promise<EMatesMinter> {
    return super.deploy(
      _emates,
      _emix,
      _mintPrice,
      overrides || {}
    ) as Promise<EMatesMinter>;
  }
  getDeployTransaction(
    _emates: string,
    _emix: string,
    _mintPrice: BigNumberish,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _emates,
      _emix,
      _mintPrice,
      overrides || {}
    );
  }
  attach(address: string): EMatesMinter {
    return super.attach(address) as EMatesMinter;
  }
  connect(signer: Signer): EMatesMinter__factory {
    return super.connect(signer) as EMatesMinter__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): EMatesMinter {
    return new Contract(address, _abi, signerOrProvider) as EMatesMinter;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IEMates",
        name: "_emates",
        type: "address",
      },
      {
        internalType: "contract IEthereumMix",
        name: "_emix",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_mintPrice",
        type: "uint256",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_limit",
        type: "uint256",
      },
    ],
    name: "setLimit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
    ],
    name: "setMintPrice",
    outputs: [],
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
    name: "withdrawEmix",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60c060405234801561001057600080fd5b50604051610a87380380610a8783398101604081905261002f916100f3565b6100383361008b565b6001600160a01b03838116608052821660a05260018190556040518181527f02ebcb79e897ca3a22313ba6de8fc964409964de565fb4bb6a0927871756b88c9060200160405180910390a1505050610136565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b03811681146100f057600080fd5b50565b60008060006060848603121561010857600080fd5b8351610113816100db565b6020850151909350610124816100db565b80925050604084015190509250925092565b60805160a05161090a61017d6000396000818161013e01528181610365015281816104c8015261061c01526000818160ee015281816101c201526102b8015261090a6000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c80638d6a45da116100715780638d6a45da146101605780638da5cb5b146101685780638e9f1d4614610179578063a4d66daf1461018c578063f2fde38b14610195578063f4a0a528146101a857600080fd5b80631249c58b146100b957806327ea6f2b146100d45780632d3aab52146100e95780636817c76c14610128578063715018a61461013157806373b01d2014610139575b600080fd5b6100c16101bb565b6040519081526020015b60405180910390f35b6100e76100e23660046107d8565b6103ed565b005b6101107f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016100cb565b6100c160015481565b6100e7610453565b6101107f000000000000000000000000000000000000000000000000000000000000000081565b6100e7610489565b6000546001600160a01b0316610110565b6100c16101873660046107f1565b6105d5565b6100c160025481565b6100e76101a3366004610834565b610691565b6100e76101b63660046107d8565b610729565b60006002547f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b15801561021957600080fd5b505afa15801561022d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102519190610864565b106102a35760405162461bcd60e51b815260206004820152601c60248201527f454d617465734d696e7465723a204c696d69742065786365656465640000000060448201526064015b60405180910390fd5b6040516335313c2160e11b81523360048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636a62784290602401602060405180830381600087803b15801561030457600080fd5b505af1158015610318573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061033c9190610864565b6001546040516323b872dd60e01b815233600482015230602482015260448101919091529091507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd90606401602060405180830381600087803b1580156103b157600080fd5b505af11580156103c5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103e9919061087d565b5090565b6000546001600160a01b031633146104175760405162461bcd60e51b815260040161029a9061089f565b60028190556040518181527f479881bf41e329f328c21c2cbb11514b05a021cd33ea4e5a576ea6bc03874fd6906020015b60405180910390a150565b6000546001600160a01b0316331461047d5760405162461bcd60e51b815260040161029a9061089f565b6104876000610788565b565b6000546001600160a01b031633146104b35760405162461bcd60e51b815260040161029a9061089f565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063a9059cbb90339083906370a082319060240160206040518083038186803b15801561051c57600080fd5b505afa158015610530573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105549190610864565b6040516001600160e01b031960e085901b1681526001600160a01b0390921660048301526024820152604401602060405180830381600087803b15801561059a57600080fd5b505af11580156105ae573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105d2919061087d565b50565b60015460405163d505accf60e01b815233600482015230602482015260448101919091526064810185905260ff8416608482015260a4810183905260c481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063d505accf9060e401600060405180830381600087803b15801561066857600080fd5b505af115801561067c573d6000803e3d6000fd5b505050506106886101bb565b95945050505050565b6000546001600160a01b031633146106bb5760405162461bcd60e51b815260040161029a9061089f565b6001600160a01b0381166107205760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161029a565b6105d281610788565b6000546001600160a01b031633146107535760405162461bcd60e51b815260040161029a9061089f565b60018190556040518181527f02ebcb79e897ca3a22313ba6de8fc964409964de565fb4bb6a0927871756b88c90602001610448565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000602082840312156107ea57600080fd5b5035919050565b6000806000806080858703121561080757600080fd5b84359350602085013560ff8116811461081f57600080fd5b93969395505050506040820135916060013590565b60006020828403121561084657600080fd5b81356001600160a01b038116811461085d57600080fd5b9392505050565b60006020828403121561087657600080fd5b5051919050565b60006020828403121561088f57600080fd5b8151801515811461085d57600080fd5b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260408201526060019056fea26469706673582212209944c48966b5e673732e705d4acbe7e3985820780a8dc06466de83c60826b0f464736f6c63430008090033";
