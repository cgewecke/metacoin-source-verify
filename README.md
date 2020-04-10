## Metacoin

Simple project to test [ethereum/source-verify][1]'s chain monitor.

+ compiles Truffle's metacoin contracts with `truffle compile`
+ uploads the generated metadata and corresponding Solidity sources to IPFS (via Infura gateway)
+ deploys to either Ropsten or Rinkeby

A running source-verify monitor will auto-detect this deployment and save entries to the
metadata repository for the chain / addresses displayed in the Truffle migrations output.

[1]: https://github.com/ethereum/source-verify

## Install
```
npm install
```

## Configure

You'll need to create a `.env` file in the project root and set values for
+ an Infura project ID
+ the private key to an account with a testnet ether balance

```
INFURA_ID=1d13168ffb894ad2827f...
PRIVATE_KEY=A4AA598CD030E2E22A9A3C...
```

## Deploy

Your choice of:
```
npm run deploy:ropsten
npm run deploy:rinkeby
npm run deploy:goerli
```

**Example Output**

```
Compiling your contracts...
===========================
> Compiling ./contracts/ConvertLib.sol
> Compiling ./contracts/MetaCoin.sol
> Compiling ./contracts/Migrations.sol
> Artifacts written to /Users/cgewecke/code/ef/metacoin-source-verify/build/contracts
> Compiled successfully using:
   - solc: 0.6.2+commit.bacdbe57.Emscripten.clang

Uploading sources & metadata to IPFS (Infura Gateway)...
========================================================

ConvertLib
----------
metadata: QmRKdDVtYcZXHij4k9dtfBVyZW3B4S5d4meT7MET6SQRce
source:   QmQRjB1rSC8C38rX55ALgNosgsusHK71Tf7r4xHtqPuSd7

MetaCoin
--------
metadata: QmVEg5D6iaSnehzUduBt7jEktjnbGtzwo7majjSDxWkKqU
source:   QmYnHz8mARA92zvohkHSvXKg6hWQSqMP26KHc1Nt3GNqpv

Migrations
----------
metadata: QmehcZQiXbwZ8JLyd6sTLJ7hakHxwsfX3ZnMfWARWCqVm2
source:   QmZFZNLk25y7UBLDNnjAzoH8SXBPfEN6bWNzGZ2x9C9aVK

Finished.


Starting migrations...
======================
> Network name:    'ropsten'
> Network id:      3
> Block gas limit: 0x7a121d


1_deploy_contracts.js
=====================

   Deploying 'ConvertLib'
   ----------------------
   > transaction hash:    0xd231cd6a912f39b09df27f15a24859af215e83d962b36ef3f71f61d615d32b41
   > Blocks: 0            Seconds: 8
   > contract address:    0x9241a1B593706251D4CCAa1Fa5b4e5173E45d4Bd
   > block number:        7410340
   > block timestamp:     1582772143
   > account:             0xAcb3e9205229D212Db914a92C77856b228B0a4E4
   > balance:             2.212909797689363869
   > gas used:            95686
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00191372 ETH


   Linking
   -------
   * Contract: MetaCoin <--> Library: ConvertLib (at address: 0x9241a1B593706251D4CCAa1Fa5b4e5173E45d4Bd)

   Deploying 'MetaCoin'
   --------------------
   > transaction hash:    0x3e4e5205616d93ab03c042a174f51e15d81f24c7e3515576e1392d586f003159
   > Blocks: 1            Seconds: 44
   > contract address:    0x8c67f9eF948F8a6Aba00EAbE10719E248c77eAE8
   > block number:        7410342
   > block timestamp:     1582772201
   > account:             0xAcb3e9205229D212Db914a92C77856b228B0a4E4
   > balance:             2.207174177689363869
   > gas used:            286781
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00573562 ETH

   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00764934 ETH


Summary
=======
> Total deployments:   2
> Final cost:          0.00764934 ETH
```
