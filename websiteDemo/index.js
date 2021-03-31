import data from '../StorageAbi.js'

const ethereumButton = document.getElementById("metamaskBtn");
const bountyStorage = document.getElementById("bountyStorage");

ethereumButton.addEventListener('click', () => {
    ethereum.request({ method: 'eth_requestAccounts' });
});


let accounts = [];

async function getAccount() {
    accounts = await ethereum.request({ method: 'eth_requestAccounts' });
}


const callContract = document.getElementById("callContract");
const storadeAddress = document.getElementById("storadeAddress");
const listVerifieds = document.getElementById("ListVerifieds"); 

const provider = new ethers.providers.Web3Provider(window.ethereum)

async function getValueAsync() {
    const contract = new ethers.Contract(storadeAddress.value, data.abi, provider);
    const verifieds = await contract.verifiedsList();
    listVerifieds.innerHTML = verifieds;
    console.log(bountyStorage);
    bountyStorage.value = storadeAddress.value;
    console.log("click");
    console.log(storadeAddress.value);
    console.log(verifieds);

};

callContract.addEventListener("click", () => {
    getValueAsync();
});

const saveBountyName = document.getElementById("saveBountyName");
const saveBountyAddress = document.getElementById("saveBountyAddress");
const saveBounty = document.getElementById("saveBounty"); 
const saveTx = document.getElementById("saveTx"); 

async function setValueAsync(_address) {
    const signer = (new ethers.providers.Web3Provider(window.ethereum)).getSigner(accounts[0]);
    const contract = new ethers.Contract(_address, data.abi, signer);
    const tx = await contract.saveBounty(saveBountyName.value, saveBountyAddress.value);
    const receipt = await tx.wait();
    saveTx.innerHTML += receipt.transactionHash;
    console.log(receipt);
}
saveBounty.addEventListener("click", () => {
    getAccount();
    setValueAsync(storadeAddress.value);
});

