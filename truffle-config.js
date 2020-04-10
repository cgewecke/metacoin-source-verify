require('dotenv').config()

const HDWalletProvider = require('@truffle/hdwallet-provider');

const privateKey = process.env.PRIVATE_KEY;
const ropstenInfura = `https://ropsten.infura.io/v3/${process.env.INFURA_ID}`;
const rinkebyInfura = `https://rinkeby.infura.io/v3/${process.env.INFURA_ID}`;
const goerliInfura =  `https://goerli.infura.io/v3/${process.env.INFURA_ID}`;

const config = {
  networks: {
    ropsten: {
      provider: () => new HDWalletProvider(privateKey, ropstenInfura),
      network_id: 3,
      gas: 5500000,
      skipDryRun: true
    },
    rinkeby: {
      provider: () => new HDWalletProvider(privateKey, rinkebyInfura),
      network_id: 4,
      gas: 5500000,
      skipDryRun: true
    },
    goerli: {
      provider: () => new HDWalletProvider(privateKey, rinkebyInfura),
      network_id: 5,
      gas: 5500000,
      skipDryRun: true
    }
  },
  compilers: {
    solc: {
      version: "0.6.2",
    }
  }
};

module.exports = config;
