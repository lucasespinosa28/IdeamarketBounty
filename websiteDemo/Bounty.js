import data from '../BountyAbi.js'
import token from '../ERC20Abi.js'

const ethereumButton = document.getElementById("metamaskBtn");

ethereumButton.addEventListener('click', () => {
    ethereum.request({ method: 'eth_requestAccounts' });
});

const bountyName = document.getElementById("bountyName");
const bountyDay = document.getElementById("bountyDay");
const bountyToken = document.getElementById("bountyToken");
const bountyHash = document.getElementById("bountyHash");
const bountyStorage = document.getElementById("bountyStorage");
const deployBounty = document.getElementById("deployBounty");
const bountyAddress = document.getElementById("bountyAddress");
const saveBountyName = document.getElementById("saveBountyName");
const saveBountyAddress = document.getElementById("saveBountyAddress");

let accounts = [];

async function getAccount() {
    accounts = await ethereum.request({ method: 'eth_requestAccounts' });
}

async function deployAsync() {
    const signer = (new ethers.providers.Web3Provider(window.ethereum)).getSigner(accounts[0]);
    const factory = new ethers.ContractFactory(data.abi, data.bytecode, signer);

    const contract = await factory.deploy(bountyName.value, bountyDay.value, bountyToken.value, bountyHash.value, bountyStorage.value);
    bountyAddress.innerHTML = contract.address;
}

deployBounty.addEventListener("click", () => {
    getAccount();
    deployAsync();
    saveBountyName.value = bountyName.value;
    saveBountyAddress.value = bountyAddress.innerHTML;
});

const bountyAmount = document.getElementById("bountyAmount"); 
const approveToken = document.getElementById("approveToken"); 
const sendTokenBtn = document.getElementById("sendToken"); 

const approveTx = document.getElementById("approveTx"); 

async function ApproveToken(_singer) {
    let wei = ethers.utils.parseEther(bountyAmount.value.toString());
    const contract = new ethers.Contract(bountyToken.value, token.abi, _singer);
    const tx = await contract.approve(bountyAddress.innerHTML, ((bountyAmount.value) * 1e18).toString());
    const receipt = await tx.wait();
    approveTx.innerHTML += receipt.transactionHash;
    console.log(receipt);
}

const sendTx = document.getElementById("sendTx"); 

async function sendToken(_singer) {
    const contract = new ethers.Contract(bountyAddress.innerHTML, data.abi, _singer);
    const tx = await contract.deposit(((bountyAmount.value) * 1e18).toString());
    const receipt = await tx.wait();
    sendTx.innerHTML += receipt.transactionHash;
    console.log(receipt);
}

approveToken.addEventListener("click", () => {
    const signer = (new ethers.providers.Web3Provider(window.ethereum)).getSigner(accounts[0]);
    console.log(approveToken);
    console.log("click");
    getAccount();
    ApproveToken(signer);
});

sendTokenBtn.addEventListener("click", () => {
    const signer = (new ethers.providers.Web3Provider(window.ethereum)).getSigner(accounts[0]);
    console.log(sendTokenBtn);
    console.log("click");
    getAccount();
    sendToken(signer);
});

