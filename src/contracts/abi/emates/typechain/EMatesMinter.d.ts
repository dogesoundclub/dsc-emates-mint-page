/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface EMatesMinterInterface extends ethers.utils.Interface {
  functions: {
    "emates()": FunctionFragment;
    "emix()": FunctionFragment;
    "limit()": FunctionFragment;
    "mint()": FunctionFragment;
    "mintPrice()": FunctionFragment;
    "mintWithPermit(uint256,uint8,bytes32,bytes32)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setLimit(uint256)": FunctionFragment;
    "setMintPrice(uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "withdrawEmix()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "emates", values?: undefined): string;
  encodeFunctionData(functionFragment: "emix", values?: undefined): string;
  encodeFunctionData(functionFragment: "limit", values?: undefined): string;
  encodeFunctionData(functionFragment: "mint", values?: undefined): string;
  encodeFunctionData(functionFragment: "mintPrice", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "mintWithPermit",
    values: [BigNumberish, BigNumberish, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setLimit",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setMintPrice",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawEmix",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "emates", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "emix", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "limit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mintPrice", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "mintWithPermit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setLimit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setMintPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawEmix",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
    "SetLimit(uint256)": EventFragment;
    "SetMintPrice(uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetLimit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetMintPrice"): EventFragment;
}

export class EMatesMinter extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: EMatesMinterInterface;

  functions: {
    emates(overrides?: CallOverrides): Promise<[string]>;

    "emates()"(overrides?: CallOverrides): Promise<[string]>;

    emix(overrides?: CallOverrides): Promise<[string]>;

    "emix()"(overrides?: CallOverrides): Promise<[string]>;

    limit(overrides?: CallOverrides): Promise<[BigNumber]>;

    "limit()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    mint(overrides?: Overrides): Promise<ContractTransaction>;

    "mint()"(overrides?: Overrides): Promise<ContractTransaction>;

    mintPrice(overrides?: CallOverrides): Promise<[BigNumber]>;

    "mintPrice()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    mintWithPermit(
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "mintWithPermit(uint256,uint8,bytes32,bytes32)"(
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

    setLimit(
      _limit: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setLimit(uint256)"(
      _limit: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setMintPrice(
      _price: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setMintPrice(uint256)"(
      _price: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    withdrawEmix(overrides?: Overrides): Promise<ContractTransaction>;

    "withdrawEmix()"(overrides?: Overrides): Promise<ContractTransaction>;
  };

  emates(overrides?: CallOverrides): Promise<string>;

  "emates()"(overrides?: CallOverrides): Promise<string>;

  emix(overrides?: CallOverrides): Promise<string>;

  "emix()"(overrides?: CallOverrides): Promise<string>;

  limit(overrides?: CallOverrides): Promise<BigNumber>;

  "limit()"(overrides?: CallOverrides): Promise<BigNumber>;

  mint(overrides?: Overrides): Promise<ContractTransaction>;

  "mint()"(overrides?: Overrides): Promise<ContractTransaction>;

  mintPrice(overrides?: CallOverrides): Promise<BigNumber>;

  "mintPrice()"(overrides?: CallOverrides): Promise<BigNumber>;

  mintWithPermit(
    deadline: BigNumberish,
    v: BigNumberish,
    r: BytesLike,
    s: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "mintWithPermit(uint256,uint8,bytes32,bytes32)"(
    deadline: BigNumberish,
    v: BigNumberish,
    r: BytesLike,
    s: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

  "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

  setLimit(
    _limit: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setLimit(uint256)"(
    _limit: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setMintPrice(
    _price: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setMintPrice(uint256)"(
    _price: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  withdrawEmix(overrides?: Overrides): Promise<ContractTransaction>;

  "withdrawEmix()"(overrides?: Overrides): Promise<ContractTransaction>;

  callStatic: {
    emates(overrides?: CallOverrides): Promise<string>;

    "emates()"(overrides?: CallOverrides): Promise<string>;

    emix(overrides?: CallOverrides): Promise<string>;

    "emix()"(overrides?: CallOverrides): Promise<string>;

    limit(overrides?: CallOverrides): Promise<BigNumber>;

    "limit()"(overrides?: CallOverrides): Promise<BigNumber>;

    mint(overrides?: CallOverrides): Promise<BigNumber>;

    "mint()"(overrides?: CallOverrides): Promise<BigNumber>;

    mintPrice(overrides?: CallOverrides): Promise<BigNumber>;

    "mintPrice()"(overrides?: CallOverrides): Promise<BigNumber>;

    mintWithPermit(
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "mintWithPermit(uint256,uint8,bytes32,bytes32)"(
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    setLimit(_limit: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "setLimit(uint256)"(
      _limit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setMintPrice(
      _price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setMintPrice(uint256)"(
      _price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawEmix(overrides?: CallOverrides): Promise<void>;

    "withdrawEmix()"(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): EventFilter;

    SetLimit(limit: null): EventFilter;

    SetMintPrice(mintPrice: null): EventFilter;
  };

  estimateGas: {
    emates(overrides?: CallOverrides): Promise<BigNumber>;

    "emates()"(overrides?: CallOverrides): Promise<BigNumber>;

    emix(overrides?: CallOverrides): Promise<BigNumber>;

    "emix()"(overrides?: CallOverrides): Promise<BigNumber>;

    limit(overrides?: CallOverrides): Promise<BigNumber>;

    "limit()"(overrides?: CallOverrides): Promise<BigNumber>;

    mint(overrides?: Overrides): Promise<BigNumber>;

    "mint()"(overrides?: Overrides): Promise<BigNumber>;

    mintPrice(overrides?: CallOverrides): Promise<BigNumber>;

    "mintPrice()"(overrides?: CallOverrides): Promise<BigNumber>;

    mintWithPermit(
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "mintWithPermit(uint256,uint8,bytes32,bytes32)"(
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides): Promise<BigNumber>;

    "renounceOwnership()"(overrides?: Overrides): Promise<BigNumber>;

    setLimit(_limit: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    "setLimit(uint256)"(
      _limit: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setMintPrice(
      _price: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setMintPrice(uint256)"(
      _price: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    withdrawEmix(overrides?: Overrides): Promise<BigNumber>;

    "withdrawEmix()"(overrides?: Overrides): Promise<BigNumber>;
  };

  populateTransaction: {
    emates(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "emates()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    emix(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "emix()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    limit(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "limit()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    mint(overrides?: Overrides): Promise<PopulatedTransaction>;

    "mint()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    mintPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "mintPrice()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    mintWithPermit(
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "mintWithPermit(uint256,uint8,bytes32,bytes32)"(
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides): Promise<PopulatedTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    setLimit(
      _limit: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setLimit(uint256)"(
      _limit: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setMintPrice(
      _price: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setMintPrice(uint256)"(
      _price: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    withdrawEmix(overrides?: Overrides): Promise<PopulatedTransaction>;

    "withdrawEmix()"(overrides?: Overrides): Promise<PopulatedTransaction>;
  };
}
