require("@nomicfoundation/hardhat-toolbox");

const SEPOLIA_URL = "https://eth-sepolia.g.alchemy.com/v2/hP78WhFemrdoGUusrnLiqXe2nIkxjf4G";
const PRIVATE_KEY = "b9954ffe38cff520a970632904805fb9b4d1a582db6f559680916e23727ebe52";

module.exports = {
  solidity: "0.8.19",
  networks:{
    sepolia:{
      url:SEPOLIA_URL,
      accounts:[PRIVATE_KEY]
    }
  }
};
