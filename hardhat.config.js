require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/pSs3WjYxV-JUfBFEsog-0grBgSKmilud',
      accounts: ['private_key'],
    },
  },
};