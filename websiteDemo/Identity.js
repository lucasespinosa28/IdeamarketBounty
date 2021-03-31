import data from '../BountyAbi.js'
import storage from '../StorageAbi.js'

const ethereumButton = document.getElementById("metamaskBtn");

ethereumButton.addEventListener('click', () => {
    ethereum.request({ method: 'eth_requestAccounts' });
});

const storageContract = document.getElementById("storageContract");
const bountyName = document.getElementById("bountyName");
const getAddress = document.getElementById("getAddress"); 
const bountyAddress = document.getElementById("bountyAddress")

let accounts = [];
const provider = new ethers.providers.Web3Provider(window.ethereum)

async function getAccount() {
    accounts = await ethereum.request({ method: 'eth_requestAccounts' });
}

async function getBountyAddress(_name) {
    const contract = new ethers.Contract(storageContract.value, storage.abi, provider);
    const address = await contract.getBounty(_name);
    bountyAddress.innerText = address;
};

const informations = document.getElementsByClassName("informations");

async function bountyInformation() {
    const contract = new ethers.Contract(bountyAddress.innerText, data.abi, provider);
    const beginningTimer = (await contract.beginningTimer()).toString();
    console.log(beginningTimer);
    const dateBeginningTimer = new Date(Number(beginningTimer) * 1000).toLocaleString()
    const endingTimer = await (await contract.endingTimer()).toString();
    console.log(endingTimer);
    const dateEndingTimer = new Date(Number(endingTimer) * 1000).toLocaleString();
    informations[0].innerHTML = dateBeginningTimer;
    informations[1].innerHTML = dateEndingTimer;
    informations[2].innerHTML = await contract.symbol();
    informations[3].innerHTML = await contract.totalRewards();
}

async function bountyUpdate() {
    const contract = new ethers.Contract(bountyAddress.innerText, data.abi, provider);
    informations[4].innerHTML = await contract.isVerified();
    informations[5].innerHTML = await contract.symbol();
    informations[6].innerHTML = await contract.totalRewards();
}


getAddress.addEventListener("click", () => {
    getAccount();
    getBountyAddress(bountyName.value);
});

const getInformation = document.getElementById("getInformation");

getInformation.addEventListener("click", () => {
    getAccount();
    bountyInformation();
});

const updateInformation = document.getElementById("updateInformation");

updateInformation.addEventListener("click", () => {
    getAccount();
    bountyUpdate();
});

const Password = document.getElementById("Password");
const confirmBtn = document.getElementById("confirmBtn");

async function confirmIdentity() {
    const signer = (new ethers.providers.Web3Provider(window.ethereum)).getSigner(accounts[0]);
    const contract = new ethers.Contract(bountyAddress.innerText, data.abi, signer);
    const tx = await contract.confirmIdentity(Password.value);
    const receipt = await tx.wait();
    confirmTx.innerHTML += receipt.transactionHash;
    console.log(receipt);
}
console.log(confirmBtn);
confirmBtn.addEventListener("click", () => {
    getAccount();
    confirmIdentity();
});
//async function ApproveToken(_singer) {
//    const contract = new ethers.Contract(bountyToken.value, token.abi, _singer);
//    const tx = await contract.approve(bountyAddress.innerHTML, bountyAmount.value);
//    const receipt = await tx.wait();
//    console.log(receipt);
//}

//async function sendToken(_singer) {
//    const contract = new ethers.Contract(bountyAddress.innerHTML, data.abi, _singer);
//    const tx = await contract.deposit(bountyAmount.value);
//    const receipt = await tx.wait();
//    console.log(receipt);
//}

//approveToken.addEventListener("click", () => {
//    const signer = (new ethers.providers.Web3Provider(window.ethereum)).getSigner(accounts[0]);
//    console.log(approveToken);
//    console.log("click");
//    getAccount();
//    ApproveToken(signer);
//});

//sendTokenBtn.addEventListener("click", () => {
//    const signer = (new ethers.providers.Web3Provider(window.ethereum)).getSigner(accounts[0]);
//    console.log(sendTokenBtn);
//    console.log("click");
//    getAccount();
//    sendToken(signer);
//});

