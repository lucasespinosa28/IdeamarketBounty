# IdeamarketBounty

this project has two contracts that allow you to implement a reward contract with a stopwatch and store their results

1- contract storage will be used to store every bounty created

storage contract as four functions

function getBounty pass the name bounty and will return the address bounty 

addVerified function connect your bounty contract and check if it has been verified, if verified, it will be saved in the storage contract 

function verifiedsList returns the list of the verified users using the addVerified 

2- contract Bounty

to deploy a bounty contract you will need 4 things

1- the person's name will be rewarding  
2- the maximum number of days to verify the identity to get the bounty
3-an ERC20 token address to use as a reward 
4- the hash of result of the password after using the keccak256, you will need to send this text/password to the person who wants to use the bounty to confirm his identity, send the text/password not the hash

function deposit, when your use this function you will send ERC20  tokens into contract this token are used as a reward if the contract was verified

function withdraw, if the identity is not verified before the time expires, you will get the tokens back, It is only allowed to withdraw if the time runs out 

function totalRewards, the name explains  self 

function isVerified, return true if the identity was verified 

function symbol returns the symbol of the  erc20  token you are using as a reward

function decimals return the decimals of the erc20 token you are using as a reward

how the password works

imagine the password is :
 "welcome version enlist meadow skirt leopard luggage finish hamster brain sure fortune" 

when you use keccak256 its text will be turned into a hash 

0xb468a1122da277b0271acc68a7512be62d6b8cbaf94741ac64b42392d6ad2ac3

you will only store the hash, not the password itself

you will need to send the text (not the hash) to people that want to be verified

how to function confirmIdentity work

the person that wants to verify if the account will call this function using the password(text) that was sent to her if the time did not are expired  and the password hash and storage hash is the same the identity will be verified and the reward will send

the contract owner can add more time using the function updateTimer
