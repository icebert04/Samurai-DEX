require("@nomiclabs/hardhat-waffle");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/CUHyEDWFSX39K0lUUub58mqzj7iNNio3',
      accounts: [
        '67cadb0451890473021615f06979ff452161384a7315e465cc55dd9a2ba7993e'
      ]
    }
  }
};
