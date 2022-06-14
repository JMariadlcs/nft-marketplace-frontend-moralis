# NFT MARKETPLACE FRONTEND MORALIS 🦄

This is a one of the two Frontend implementation of a NFT Marketplace from Patrick Alpha's fcc. The backend repo can be found [here](https://github.com/JMariadlcs/nft-marketplace-backend).

The frontend of this project is being implemented in two different ways:

1. Using [Moralis Indexer Frontend](https://github.com/JMariadlcs/nft-marketplace-frontend-moralis).
2. Using TheGraph.

The workshop followed to complete this repo is [this one](https://github.com/PatrickAlphaC/nextjs-nft-marketplace-moralis-fcc).

The repo that we are going to implement is like [this one](https://www.youtube.com/watch?v=gyMwXuJrbJQ&t=15996s).

## PROJECT

Objetives of the frontend project:

1. Home Page: ✅
    1. Show recently listed NFTs.
        1. If you are the owner, you can update the listing.
        2. If you are NOT the owner, you can buy de listing.
2. Sell Page: ✅
    1. You can list your NFT to be sold.

## CREATE SIMILAR PROJECT FROM SCRATCH

-   Create Next.js project:

```bash
yarn create next-app .
```

-   Add Moralis to interact with front-end:

```bash
yarn add moralis react-moralis
```

-   Add Moralis web3uikit to interact with front-end:

```bash
yarn add web3uikit

```

-   Add tailwindcss (CSS formarter):

```bash
yarn add --dev tailwindcss postcss autoprefixer
```

-   Initialize tailwindcss:

```bash
yarn tailwindcss init -p
```

-   Override [tailwind.config.js](https://github.com/JMariadlcs/nft-marketplace-frontend-moralis/blob/main/tailwind.config.js) with the code inside this file.
-   Override [global.css](https://github.com/JMariadlcs/nft-marketplace-frontend-moralis/blob/main/styles/globals.css)

## RUN LOCAL SERVER

```bash
yarn dev
```

You will have your local server running at: `http://localhost:3000`.

-   Open new bash terminal to use while yarn server is running

## USE MORALIS SERVER

We are using Moralis server (centralized) to listen for events. We are indexing the events off-chain and then read them from data-base. Setup a server to listen for these events to be fired and then add them to a database.

To do so:

1. Go to [moralis.io](https://moralis.io/) and create a dApp.
2. Inside [_app.js]:
   Replace

```bash
<MoralisProvider initializeOnMount={false}>
```

by

```bash
  <MoralisProvider appId ="xxx" serverUrl="xxx">
```

**REMINDER**: user enviromental variables.

3. Create an event entry on Moralis database.

    1. Connect it to our blockchain:

    - Go to [backend repo](https://github.com/JMariadlcs/nft-marketplace-backend) and start local blockchain:

    ```bash
    yarn hardhat node
    ```

    - Download your required [frpc](https://github.com/fatedier/frp/releases) version. (If you are MAC user: frp_0.36.2_darwin_amd64).
    - We are using `frpc` and `frpc.ini`

    2. Indicate which contract, events and what do when it hears the events.
