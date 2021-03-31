export default
    {
    "_format": "hh-sol-artifact-1",
        "contractName": "Storage",
            "sourceName": "contracts/Storage.sol",
                "abi": [
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "previousOwner",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "newOwner",
                                "type": "address"
                            }
                        ],
                        "name": "OwnershipTransferred",
                        "type": "event"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "string",
                                "name": "name",
                                "type": "string"
                            }
                        ],
                        "name": "addVerified",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "string",
                                "name": "",
                                "type": "string"
                            }
                        ],
                        "name": "getBounty",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "owner",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "renounceOwnership",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "string",
                                "name": "name",
                                "type": "string"
                            },
                            {
                                "internalType": "address",
                                "name": "_contract",
                                "type": "address"
                            }
                        ],
                        "name": "saveBounty",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "newOwner",
                                "type": "address"
                            }
                        ],
                        "name": "transferOwnership",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "verifiedsList",
                        "outputs": [
                            {
                                "internalType": "string[]",
                                "name": "",
                                "type": "string[]"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    }
                ],
                    "bytecode": "0x608060405234801561001057600080fd5b5060006100216100c460201b60201c565b9050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3506100cc565b600033905090565b610cec806100db6000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80637412c6d91161005b5780637412c6d9146100da5780638da5cb5b146100f6578063a61db0e614610114578063f2fde38b146101305761007d565b8063116d3f731461008257806357f56061146100a0578063715018a6146100d0575b600080fd5b61008a61014c565b6040516100979190610a56565b60405180910390f35b6100ba60048036038101906100b591906107e7565b610225565b6040516100c79190610a3b565b60405180910390f35b6100d861026e565b005b6100f460048036038101906100ef9190610828565b6103a8565b005b6100fe610485565b60405161010b9190610a3b565b60405180910390f35b61012e600480360381019061012991906107e7565b6104ae565b005b61014a600480360381019061014591906107be565b6104ed565b005b60606001805480602002602001604051908101604052809291908181526020016000905b8282101561021c57838290600052602060002001805461018f90610bfe565b80601f01602080910402602001604051908101604052809291908181526020018280546101bb90610bfe565b80156102085780601f106101dd57610100808354040283529160200191610208565b820191906000526020600020905b8154815290600101906020018083116101eb57829003601f168201915b505050505081526020019060010190610170565b50505050905090565b6002818051602081018201805184825260208301602085012081835280955050505050506000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b610276610696565b73ffffffffffffffffffffffffffffffffffffffff16610294610485565b73ffffffffffffffffffffffffffffffffffffffff16146102ea576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102e190610a98565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b6103b0610696565b73ffffffffffffffffffffffffffffffffffffffff166103ce610485565b73ffffffffffffffffffffffffffffffffffffffff1614610424576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161041b90610a98565b60405180910390fd5b806002836040516104359190610a24565b908152602001604051809103902060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6001819080600181540180825580915050600190039060005260206000200160009091909190915090805190602001906104e992919061069e565b5050565b6104f5610696565b73ffffffffffffffffffffffffffffffffffffffff16610513610485565b73ffffffffffffffffffffffffffffffffffffffff1614610569576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161056090610a98565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156105d9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105d090610a78565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600033905090565b8280546106aa90610bfe565b90600052602060002090601f0160209004810192826106cc5760008555610713565b82601f106106e557805160ff1916838001178555610713565b82800160010185558215610713579182015b828111156107125782518255916020019190600101906106f7565b5b5090506107209190610724565b5090565b5b8082111561073d576000816000905550600101610725565b5090565b600061075461074f84610ae9565b610ab8565b90508281526020810184848401111561076c57600080fd5b610777848285610bbc565b509392505050565b60008135905061078e81610c9f565b92915050565b600082601f8301126107a557600080fd5b81356107b5848260208601610741565b91505092915050565b6000602082840312156107d057600080fd5b60006107de8482850161077f565b91505092915050565b6000602082840312156107f957600080fd5b600082013567ffffffffffffffff81111561081357600080fd5b61081f84828501610794565b91505092915050565b6000806040838503121561083b57600080fd5b600083013567ffffffffffffffff81111561085557600080fd5b61086185828601610794565b92505060206108728582860161077f565b9150509250929050565b60006108888383610914565b905092915050565b61089981610b8a565b82525050565b60006108aa82610b29565b6108b48185610b4c565b9350836020820285016108c685610b19565b8060005b8581101561090257848403895281516108e3858261087c565b94506108ee83610b3f565b925060208a019950506001810190506108ca565b50829750879550505050505092915050565b600061091f82610b34565b6109298185610b5d565b9350610939818560208601610bcb565b61094281610c8e565b840191505092915050565b600061095882610b34565b6109628185610b7f565b9350610972818560208601610bcb565b80840191505092915050565b600061098b602683610b6e565b91507f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008301527f64647265737300000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006109f1602083610b6e565b91507f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726000830152602082019050919050565b6000610a30828461094d565b915081905092915050565b6000602082019050610a506000830184610890565b92915050565b60006020820190508181036000830152610a70818461089f565b905092915050565b60006020820190508181036000830152610a918161097e565b9050919050565b60006020820190508181036000830152610ab1816109e4565b9050919050565b6000604051905081810181811067ffffffffffffffff82111715610adf57610ade610c5f565b5b8060405250919050565b600067ffffffffffffffff821115610b0457610b03610c5f565b5b601f19601f8301169050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b6000610b9582610b9c565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b82818337600083830152505050565b60005b83811015610be9578082015181840152602081019050610bce565b83811115610bf8576000848401525b50505050565b60006002820490506001821680610c1657607f821691505b60208210811415610c2a57610c29610c30565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b610ca881610b8a565b8114610cb357600080fd5b5056fea264697066735822122013b422fbff0a8f62990ad9b01372c207a620e1cc0524a56de01b0731976b37a364736f6c63430008000033",
                        "deployedBytecode": "0x608060405234801561001057600080fd5b506004361061007d5760003560e01c80637412c6d91161005b5780637412c6d9146100da5780638da5cb5b146100f6578063a61db0e614610114578063f2fde38b146101305761007d565b8063116d3f731461008257806357f56061146100a0578063715018a6146100d0575b600080fd5b61008a61014c565b6040516100979190610a56565b60405180910390f35b6100ba60048036038101906100b591906107e7565b610225565b6040516100c79190610a3b565b60405180910390f35b6100d861026e565b005b6100f460048036038101906100ef9190610828565b6103a8565b005b6100fe610485565b60405161010b9190610a3b565b60405180910390f35b61012e600480360381019061012991906107e7565b6104ae565b005b61014a600480360381019061014591906107be565b6104ed565b005b60606001805480602002602001604051908101604052809291908181526020016000905b8282101561021c57838290600052602060002001805461018f90610bfe565b80601f01602080910402602001604051908101604052809291908181526020018280546101bb90610bfe565b80156102085780601f106101dd57610100808354040283529160200191610208565b820191906000526020600020905b8154815290600101906020018083116101eb57829003601f168201915b505050505081526020019060010190610170565b50505050905090565b6002818051602081018201805184825260208301602085012081835280955050505050506000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b610276610696565b73ffffffffffffffffffffffffffffffffffffffff16610294610485565b73ffffffffffffffffffffffffffffffffffffffff16146102ea576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102e190610a98565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b6103b0610696565b73ffffffffffffffffffffffffffffffffffffffff166103ce610485565b73ffffffffffffffffffffffffffffffffffffffff1614610424576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161041b90610a98565b60405180910390fd5b806002836040516104359190610a24565b908152602001604051809103902060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6001819080600181540180825580915050600190039060005260206000200160009091909190915090805190602001906104e992919061069e565b5050565b6104f5610696565b73ffffffffffffffffffffffffffffffffffffffff16610513610485565b73ffffffffffffffffffffffffffffffffffffffff1614610569576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161056090610a98565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156105d9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105d090610a78565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600033905090565b8280546106aa90610bfe565b90600052602060002090601f0160209004810192826106cc5760008555610713565b82601f106106e557805160ff1916838001178555610713565b82800160010185558215610713579182015b828111156107125782518255916020019190600101906106f7565b5b5090506107209190610724565b5090565b5b8082111561073d576000816000905550600101610725565b5090565b600061075461074f84610ae9565b610ab8565b90508281526020810184848401111561076c57600080fd5b610777848285610bbc565b509392505050565b60008135905061078e81610c9f565b92915050565b600082601f8301126107a557600080fd5b81356107b5848260208601610741565b91505092915050565b6000602082840312156107d057600080fd5b60006107de8482850161077f565b91505092915050565b6000602082840312156107f957600080fd5b600082013567ffffffffffffffff81111561081357600080fd5b61081f84828501610794565b91505092915050565b6000806040838503121561083b57600080fd5b600083013567ffffffffffffffff81111561085557600080fd5b61086185828601610794565b92505060206108728582860161077f565b9150509250929050565b60006108888383610914565b905092915050565b61089981610b8a565b82525050565b60006108aa82610b29565b6108b48185610b4c565b9350836020820285016108c685610b19565b8060005b8581101561090257848403895281516108e3858261087c565b94506108ee83610b3f565b925060208a019950506001810190506108ca565b50829750879550505050505092915050565b600061091f82610b34565b6109298185610b5d565b9350610939818560208601610bcb565b61094281610c8e565b840191505092915050565b600061095882610b34565b6109628185610b7f565b9350610972818560208601610bcb565b80840191505092915050565b600061098b602683610b6e565b91507f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008301527f64647265737300000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006109f1602083610b6e565b91507f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726000830152602082019050919050565b6000610a30828461094d565b915081905092915050565b6000602082019050610a506000830184610890565b92915050565b60006020820190508181036000830152610a70818461089f565b905092915050565b60006020820190508181036000830152610a918161097e565b9050919050565b60006020820190508181036000830152610ab1816109e4565b9050919050565b6000604051905081810181811067ffffffffffffffff82111715610adf57610ade610c5f565b5b8060405250919050565b600067ffffffffffffffff821115610b0457610b03610c5f565b5b601f19601f8301169050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b6000610b9582610b9c565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b82818337600083830152505050565b60005b83811015610be9578082015181840152602081019050610bce565b83811115610bf8576000848401525b50505050565b60006002820490506001821680610c1657607f821691505b60208210811415610c2a57610c29610c30565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b610ca881610b8a565b8114610cb357600080fd5b5056fea264697066735822122013b422fbff0a8f62990ad9b01372c207a620e1cc0524a56de01b0731976b37a364736f6c63430008000033",
                            "linkReferences": { },
"deployedLinkReferences": { }
}