# Web3 Token Transfer Script

A Node.js script for sending tokens (ETH, MATIC, BNB, etc.) across EVM-compatible blockchain networks using web3.js.

---

## 🚀 Features

- Send native tokens using a private key
- Supports any EVM-compatible network
- Outputs transaction hash to console
- Basic error handling (RPC, balance, invalid inputs)
- Simple CLI usage

---

## 🧰 Tech Stack

- Node.js >= 18
- web3.js v4

---

## 📁 Project Structure

```
web3-token-transfer/
├── index.js          # Main script
├── package.json      # Dependencies
├── .env.example      # Environment variables template
└── README.md
```

---

## 🔐 Environment Setup

Create a `.env` file based on `.env.example`:

```env
RPC_URL=https://mainnet.infura.io/v3/YOUR_PROJECT_ID
PRIVATE_KEY=0xYOUR_PRIVATE_KEY
```

⚠️ **Never commit your private key.**

---

## ▶️ Usage

Run the script using Node.js:

```bash
node index.js <AMOUNT> <RECEIVER_ADDRESS>
```

### Example

```bash
node index.js 0.05 0xAbc123456789abcdef...
```

The script will:

1. Sign the transaction with the provided private key
2. Send the transaction to the network
3. Output the transaction hash to the console

---
