module.exports = {
    "abi": [
        {
            "constant": true,
            "inputs": [],
            "name": "trustedClaimHolder",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_identity",
                    "type": "address"
                },
                {
                    "name": "claimType",
                    "type": "uint256"
                },
                {
                    "name": "blockNumber",
                    "type": "uint256"
                }
            ],
            "name": "checkClaim",
            "outputs": [
                {
                    "name": "claimValid",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_identity",
                    "type": "address"
                },
                {
                    "name": "claimType",
                    "type": "uint256"
                },
                {
                    "name": "blockNumber",
                    "type": "uint256"
                }
            ],
            "name": "claimIsValid",
            "outputs": [
                {
                    "name": "claimValid",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "sig",
                    "type": "bytes"
                },
                {
                    "name": "dataHash",
                    "type": "bytes32"
                }
            ],
            "name": "getRecoveredAddress",
            "outputs": [
                {
                    "name": "addr",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "name": "_trustedClaimHolder",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "_identity",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "claimType",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "blockNumber",
                    "type": "uint256"
                }
            ],
            "name": "ClaimValid",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "_identity",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "claimType",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "blockNumber",
                    "type": "uint256"
                }
            ],
            "name": "ClaimInvalid",
            "type": "event"
        }
    ],
    "data": "608060405234801561001057600080fd5b506040516020806109cf83398101806040528101908080519060200190929190505050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505061094c806100836000396000f300608060405260043610610062576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063369383541461006757806352c98e33146100be578063a09b2e011461012d578063c3b129e31461019c575b600080fd5b34801561007357600080fd5b5061007c610253565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156100ca57600080fd5b50610113600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919080359060200190929190505050610278565b604051808215151515815260200191505060405180910390f35b34801561013957600080fd5b50610182600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919080359060200190929190505050610385565b604051808215151515815260200191505060405180910390f35b3480156101a857600080fd5b50610211600480360381019080803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091929192908035600019169060200190929190505050610848565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000610285848484610385565b15610306577fcb7ed3abf69daa42771ae18b5e8821f0f9715e5adef6c325dc9236d4d0c2dee9848484604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001838152602001828152602001935050505060405180910390a16001905061037e565b7f663624d8bbee7096cf8a54af072988db8e9b15ccd9af31770ae61805901fcc16848484604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001838152602001828152602001935050505060405180910390a1600090505b9392505050565b60008060008060608060008060008060008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168d8d604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014018381526020018281526020019350505050604051809103902094508d73ffffffffffffffffffffffffffffffffffffffff1663c9100bcb866040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050600060405180830381600087803b15801561049157600080fd5b505af11580156104a5573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f8201168201806040525060e08110156104cf57600080fd5b81019080805190602001909291908051906020019092919080519060200190929190805164010000000081111561050557600080fd5b8281019050602081018481111561051b57600080fd5b815185600182028301116401000000008211171561053857600080fd5b5050929190602001805164010000000081111561055457600080fd5b8281019050602081018481111561056a57600080fd5b815185600182028301116401000000008211171561058757600080fd5b505092919060200180516401000000008111156105a357600080fd5b828101905060208101848111156105b957600080fd5b81518560018202830111640100000000821117156105d657600080fd5b505092919060200180519060200190929190505050905050809a50819b50829c50839d50849e5050505050508d8d87604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c0100000000000000000000000002815260140183815260200182805190602001908083835b602083101515610681578051825260208201915060208101905060208303925061065c565b6001836020036101000a0380198251168184511680821785525050505050509050019350505050604051809103902093508360405180807f19457468657265756d205369676e6564204d6573736167653a0a333200000000815250601c018260001916600019168152602001915050604051809103902092506107048784610848565b915081604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c01000000000000000000000000028152601401915050604051809103902090506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d202158d8260036040518363ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180836000191660001916815260200182815260200192505050602060405180830381600087803b1580156107fa57600080fd5b505af115801561080e573d6000803e3d6000fd5b505050506040513d602081101561082457600080fd5b81019080805190602001909291905050509a50505050505050505050509392505050565b6000806000806000604187511415156108645760009450610916565b6020870151935060408701519250606087015160001a9150601b8260ff16101561088f57601b820191505b600186838686604051600081526020016040526040518085600019166000191681526020018460ff1660ff1681526020018360001916600019168152602001826000191660001916815260200194505050505060206040516020810390808403906000865af1158015610906573d6000803e3d6000fd5b5050506020604051035190508094505b50505050929150505600a165627a7a723058208762e35063c575791e2e822e1f6fc246f9c575a55d316702c5e0bd1a2538bc070029"
}