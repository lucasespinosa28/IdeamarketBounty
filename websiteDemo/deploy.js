import data from '../StorageAbi.js'

const ethereumButton = document.getElementById("metamaskBtn");

ethereumButton.addEventListener('click', () => {
    ethereum.request({ method: 'eth_requestAccounts' });
});

const deployStorage = document.getElementById("deployStorage");
const storageAddress = document.getElementById("storageAddress");

let accounts = [];

async function getAccount() {
    accounts = await ethereum.request({ method: 'eth_requestAccounts' });
}

deployStorage.addEventListener("click", () => {
    getAccount();
    deployAsync();
});

async function deployAsync() {
    const signer = (new ethers.providers.Web3Provider(window.ethereum)).getSigner(accounts[0]);
    const factory = new ethers.ContractFactory(data.abi, data.bytecode, signer);
    const contract = await factory.deploy();
    storageAddress.innerHTML = contract.address;
}
