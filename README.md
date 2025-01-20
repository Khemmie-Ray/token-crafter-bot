# TokenCrafter Bot

TokenCrafter Bot is a decentralized token deployment bot that allows users to create their own tokens on the Starknet blockchain. Through an intuitive interface, users can easily deploy custom tokens by providing details such as token name, symbol, total supply, and their Twitter username. This bot simplifies the token creation process, making it accessible for both developers and non-technical users.

## Features

- **Token Deployment**: Allows users to deploy custom tokens by providing a few essential details.
- **Easy Integration**: Built on Starknet, the bot leverages decentralized smart contracts for token creation.
- **User-Friendly Interface**: A simple chatbot interface with clear instructions for users to input their token information.
- **Transaction Monitoring**: The bot monitors the transaction status and updates the user about the transaction’s success or failure.
- **Error Handling**: Displays helpful error messages for invalid or missing inputs.

## Tech Stack

- **React**: Frontend UI for the chatbot interface.
- **Starknet**: Blockchain for token deployment.
- **Ethers.js, Starknet.js, Starknet react**: Library used for interacting with the Starknet network.
- **React-Icons**: Used for bot icon integration.
- **Toastify**: Used for showing transaction success and failure notifications.
- **TailwindCSS**: Utility-first CSS framework for styling the UI.
- **Smart Contracts - Cairo**: Deployed on the Starknet blockchain to handle token creation.

## Usage

1. **Start the Bot**: Click on the `Send Message` button to open the chatbot.
2. **Deploy Token**:
    - Provide a **Token Name** (e.g., "My Token").
    - Provide a **Token Symbol** (e.g., "MTK").
    - Set a **Total Supply** for your token (e.g., "1000000").
    - Enter your **Twitter Username**.
3. **Deploy**: Once the form is filled, click **Deploy Token** to start the deployment process.
4. **Transaction Monitoring**: The bot will notify you when your transaction is pending, successful, or failed.

## How It Works

1. **User Input**: The bot prompts the user to input the following information:
    - Token Name
    - Token Symbol
    - Total Supply
    - Twitter Username
2. **Smart Contract Interaction**: The bot uses the Starknet contract to create a new token with the provided details.
3. **Transaction Confirmation**: After submitting, the bot will confirm if the token creation was successful or if any errors occurred during the transaction.
