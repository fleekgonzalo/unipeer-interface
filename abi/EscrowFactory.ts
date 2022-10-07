/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { Escrow } from "./Escrow";

export class EscrowFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<Escrow> {
    return super.deploy(overrides || {}) as Promise<Escrow>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Escrow {
    return super.attach(address) as Escrow;
  }
  connect(signer: Signer): EscrowFactory {
    return super.connect(signer) as EscrowFactory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Escrow {
    return new Contract(address, _abi, signerOrProvider) as Escrow;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "AmountLocked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "AmountUnlocked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "ChainlinkCancelled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "ChainlinkFulfilled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "ChainlinkRequested",
    type: "event",
  },
  {
    inputs: [],
    name: "comptroller",
    outputs: [
      {
        internalType: "address payable",
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
        name: "_oracle",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "_requestId",
        type: "bytes32",
      },
      {
        internalType: "address payable",
        name: "_buyer",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "expectResponseFor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "feeThousandthsPercent",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_requestId",
        type: "bytes32",
      },
      {
        internalType: "bool",
        name: "successful",
        type: "bool",
      },
    ],
    name: "fulfillFiatPayment",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getUnlockedBalance",
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
        name: "_owner",
        type: "address",
      },
      {
        internalType: "address payable",
        name: "_comptroller",
        type: "address",
      },
      {
        internalType: "string",
        name: "_paymentid",
        type: "string",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_feeThousandthsPercent",
        type: "uint16",
      },
      {
        internalType: "uint256",
        name: "_minFeeAmount",
        type: "uint256",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "minFeeAmount",
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
    inputs: [],
    name: "paymentid",
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
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "address payable",
        name: "_to",
        type: "address",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x6080604052600160075534801561001557600080fd5b50611b94806100256000396000f3fe6080604052600436106100aa5760003560e01c80635fe3b567116100645780635fe3b567146101b25780638a677532146101dd5780638da5cb5b14610206578063e63542b214610231578063e6bd276a1461025c578063f5d3647514610285576100b1565b8062f714ce146100b65780630bc2aad2146100df57806312065fe01461010a578063267b0798146101355780634571e3a6146101605780634db0875d14610189576100b1565b366100b157005b600080fd5b3480156100c257600080fd5b506100dd60048036038101906100d89190611325565b6102b0565b005b3480156100eb57600080fd5b506100f4610398565b60405161010191906119c1565b60405180910390f35b34801561011657600080fd5b5061011f6103ac565b60405161012c91906119dc565b60405180910390f35b34801561014157600080fd5b5061014a6103b4565b60405161015791906119dc565b60405180910390f35b34801561016c57600080fd5b50610187600480360381019061018291906111de565b6103ce565b005b34801561019557600080fd5b506101b060048036038101906101ab91906112e9565b61055d565b005b3480156101be57600080fd5b506101c7610715565b6040516101d49190611804565b60405180910390f35b3480156101e957600080fd5b5061020460048036038101906101ff919061124a565b61073b565b005b34801561021257600080fd5b5061021b610876565b60405161022891906117e9565b60405180910390f35b34801561023d57600080fd5b5061024661089c565b604051610253919061181f565b60405180910390f35b34801561026857600080fd5b50610283600480360381019061027e91906112ad565b61093a565b005b34801561029157600080fd5b5061029a610a63565b6040516102a791906119dc565b60405180910390f35b3373ffffffffffffffffffffffffffffffffffffffff16600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610340576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161033790611941565b60405180910390fd5b816103496103b4565b101561038a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610381906118a1565b60405180910390fd5b6103948282610a69565b5050565b600160029054906101000a900461ffff1681565b600047905090565b60006103c96103c16103ac565b600054610a77565b905090565b60018054906101000a900460ff16806103eb57506103ea610ac1565b5b806104035750600160009054906101000a900460ff16155b610442576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161043990611901565b60405180910390fd5b600060018054906101000a900460ff1615905080156104905760018060016101000a81548160ff02191690831515021790555060018060006101000a81548160ff0219169083151502179055505b6104a16101ea64174876e80061055d565b84600a60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555083600b60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508282600c9190610534929190611049565b5080156105565760006001806101000a81548160ff0219169083151502179055505b5050505050565b60018054906101000a900460ff168061057a5750610579610ac1565b5b806105925750600160009054906101000a900460ff16155b6105d1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105c890611901565b60405180910390fd5b600060018054906101000a900460ff16159050801561061f5760018060016101000a81548160ff02191690831515021790555060018060006101000a81548160ff0219169083151502179055505b620100008361ffff1610610668576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161065f90611921565b60405180910390fd5b7f80000000000000000000000000000000000000000000000000000000000000008211156106cb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106c290611961565b60405180910390fd5b82600160026101000a81548161ffff021916908361ffff1602179055508160028190555080156107105760006001806101000a81548160ff0219169083151502179055505b505050565b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b3373ffffffffffffffffffffffffffffffffffffffff16600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146107cb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107c290611841565b60405180910390fd5b6107d481610ad8565b60405180604001604052808373ffffffffffffffffffffffffffffffffffffffff168152602001828152506009600085815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550602082015181600101559050506108708484610af2565b50505050565b600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600c8054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156109325780601f1061090757610100808354040283529160200191610932565b820191906000526020600020905b81548152906001019060200180831161091557829003601f168201915b505050505081565b61094382610bec565b61094b6110c9565b600960008481526020019081526020016000206040518060400160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600182015481525050905060096000848152602001908152602001600020600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055600182016000905550508115610a5057610a4b81602001518260000151600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16610cf5565b610a5e565b610a5d8160200151610d1f565b5b505050565b60025481565b610a738183610d39565b5050565b6000610ab983836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250610e2d565b905092915050565b6000803090506000813b9050600081149250505090565b6000610ae382610e88565b9050610aee81610ea1565b5050565b80600073ffffffffffffffffffffffffffffffffffffffff166008600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610b95576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b8c906119a1565b60405180910390fd5b826008600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050565b806008600082815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610c8e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c8590611981565b60405180910390fd5b6008600082815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055807f7cc135e0cebb02c3480ae5d74d377283180a2601f8f644edf7987b009316c63a60405160405180910390a25050565b610cfe83610d1f565b610d088383610a69565b610d1a610d1484610f4e565b82610a69565b505050565b6000610d2a82610e88565b9050610d3581610f91565b5050565b80471015610d7c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d73906118e1565b60405180910390fd5b60008273ffffffffffffffffffffffffffffffffffffffff1682604051610da2906117d4565b60006040518083038185875af1925050503d8060008114610ddf576040519150601f19603f3d011682016040523d82523d6000602084013e610de4565b606091505b5050905080610e28576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e1f906118c1565b60405180910390fd5b505050565b6000838311158290610e75576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e6c919061181f565b60405180910390fd5b5060008385039050809150509392505050565b600080829050610e9781610f4e565b8101915050919050565b80610eaa6103b4565b1015610eeb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ee290611861565b60405180910390fd5b610ef760005482610ff4565b6000819055503073ffffffffffffffffffffffffffffffffffffffff167f7e0c0ed60a2a0ef9b1bb08761b5e143931d7497adb4dc96589ebd6e8602f660a82604051610f4391906119dc565b60405180910390a250565b600080620186a0600160029054906101000a900461ffff1661ffff16840281610f7357fe5b0490506002548110610f855780610f89565b6002545b915050919050565b610f9d60005482610a77565b6000819055503073ffffffffffffffffffffffffffffffffffffffff167f8e20e207297d21d1d77d10ac449db977072fbc89623f4e54280eb935d752f42682604051610fe991906119dc565b60405180910390a250565b60008082840190508381101561103f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161103690611881565b60405180910390fd5b8091505092915050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061108a57803560ff19168380011785556110b8565b828001600101855582156110b8579182015b828111156110b757823582559160200191906001019061109c565b5b5090506110c591906110f9565b5090565b6040518060400160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600081525090565b5b808211156111125760008160009055506001016110fa565b5090565b60008135905061112581611ad4565b92915050565b60008135905061113a81611aeb565b92915050565b60008135905061114f81611b02565b92915050565b60008135905061116481611b19565b92915050565b60008083601f84011261117c57600080fd5b8235905067ffffffffffffffff81111561119557600080fd5b6020830191508360018202830111156111ad57600080fd5b9250929050565b6000813590506111c381611b30565b92915050565b6000813590506111d881611b47565b92915050565b600080600080606085870312156111f457600080fd5b600061120287828801611116565b94505060206112138782880161112b565b935050604085013567ffffffffffffffff81111561123057600080fd5b61123c8782880161116a565b925092505092959194509250565b6000806000806080858703121561126057600080fd5b600061126e87828801611116565b945050602061127f87828801611155565b93505060406112908782880161112b565b92505060606112a1878288016111c9565b91505092959194509250565b600080604083850312156112c057600080fd5b60006112ce85828601611155565b92505060206112df85828601611140565b9150509250929050565b600080604083850312156112fc57600080fd5b600061130a858286016111b4565b925050602061131b858286016111c9565b9150509250929050565b6000806040838503121561133857600080fd5b6000611346858286016111c9565b92505060206113578582860161112b565b9150509250929050565b61136a81611a30565b82525050565b61137981611a1e565b82525050565b600061138a826119f7565b6113948185611a0d565b93506113a4818560208601611a90565b6113ad81611ac3565b840191505092915050565b60006113c5602583611a0d565b91507f457363726f773a2063616c6c6572206973206e6f742074686520636f6d70747260008301527f6f6c6c65720000000000000000000000000000000000000000000000000000006020830152604082019050919050565b600061142b602683611a0d565b91507f457468416461707465723a20696e73756666696369656e742066756e6473207460008301527f6f206c6f636b00000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000611491601b83611a0d565b91507f536166654d6174683a206164646974696f6e206f766572666c6f7700000000006000830152602082019050919050565b60006114d1602f83611a0d565b91507f457363726f773a20696e73756666696369656e7420756e6c6f636b656420667560008301527f6e647320746f20776974686472617700000000000000000000000000000000006020830152604082019050919050565b6000611537603a83611a0d565b91507f416464726573733a20756e61626c6520746f2073656e642076616c75652c207260008301527f6563697069656e74206d617920686176652072657665727465640000000000006020830152604082019050919050565b600061159d601d83611a0d565b91507f416464726573733a20696e73756666696369656e742062616c616e63650000006000830152602082019050919050565b60006115dd602e83611a0d565b91507f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008301527f647920696e697469616c697a65640000000000000000000000000000000000006020830152604082019050919050565b6000611643600e83611a0d565b91507f666565202520746f6f20686967680000000000000000000000000000000000006000830152602082019050919050565b6000611683602083611a0d565b91507f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726000830152602082019050919050565b60006116c3601583611a0d565b91507f6d696e466565416d6f756e7420746f6f206869676800000000000000000000006000830152602082019050919050565b6000611703600083611a02565b9150600082019050919050565b600061171d602883611a0d565b91507f536f75726365206d75737420626520746865206f7261636c65206f662074686560008301527f20726571756573740000000000000000000000000000000000000000000000006020830152604082019050919050565b6000611783601a83611a0d565b91507f5265717565737420697320616c72656164792070656e64696e670000000000006000830152602082019050919050565b6117bf81611a58565b82525050565b6117ce81611a86565b82525050565b60006117df826116f6565b9150819050919050565b60006020820190506117fe6000830184611370565b92915050565b60006020820190506118196000830184611361565b92915050565b60006020820190508181036000830152611839818461137f565b905092915050565b6000602082019050818103600083015261185a816113b8565b9050919050565b6000602082019050818103600083015261187a8161141e565b9050919050565b6000602082019050818103600083015261189a81611484565b9050919050565b600060208201905081810360008301526118ba816114c4565b9050919050565b600060208201905081810360008301526118da8161152a565b9050919050565b600060208201905081810360008301526118fa81611590565b9050919050565b6000602082019050818103600083015261191a816115d0565b9050919050565b6000602082019050818103600083015261193a81611636565b9050919050565b6000602082019050818103600083015261195a81611676565b9050919050565b6000602082019050818103600083015261197a816116b6565b9050919050565b6000602082019050818103600083015261199a81611710565b9050919050565b600060208201905081810360008301526119ba81611776565b9050919050565b60006020820190506119d660008301846117b6565b92915050565b60006020820190506119f160008301846117c5565b92915050565b600081519050919050565b600081905092915050565b600082825260208201905092915050565b6000611a2982611a66565b9050919050565b6000611a3b82611a66565b9050919050565b60008115159050919050565b6000819050919050565b600061ffff82169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b83811015611aae578082015181840152602081019050611a93565b83811115611abd576000848401525b50505050565b6000601f19601f8301169050919050565b611add81611a1e565b8114611ae857600080fd5b50565b611af481611a30565b8114611aff57600080fd5b50565b611b0b81611a42565b8114611b1657600080fd5b50565b611b2281611a4e565b8114611b2d57600080fd5b50565b611b3981611a58565b8114611b4457600080fd5b50565b611b5081611a86565b8114611b5b57600080fd5b5056fea26469706673582212207738a24c1d053089972e77420e7b13a83e75fd99195c84c8298f136cba7b9c4464736f6c634300060c0033";
