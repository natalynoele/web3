import "dotenv/config";
import Web3 from "web3";

async function sendTransaction() {
  try {
    const [, , amount, to] = process.argv;
    const privateKey = process.env.PRIVATE_KEY;
    const url = process.env.RPC_URL;

    if (!amount || !to) {
      throw new Error("Usage: node index.js <amount> <receiver_public_key>");
    }

    if (!privateKey || !url) {
      throw new Error("Missing RPC_URL or PRIVATE_KEY in .env");
    }

    const web3 = new Web3(url);
    const account = web3.eth.accounts.privateKeyToAccount(privateKey);
    web3.eth.accounts.wallet.add(account);

    const valueWei = web3.utils.toWei(amount, "ether");

    const tx = {
      from: account.address,
      to,
      value: valueWei,
      gas: 21000,
    };

    console.log("Sending transaction...");

    const receipt = await web3.eth.sendTransaction(tx);

    console.log("TX Hash:", receipt.transactionHash);
  } catch (error) {
    console.error("Transaction failed:", error.message);
  }
}

sendTransaction();
