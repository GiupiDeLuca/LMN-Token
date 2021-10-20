const { default: Web3 } = require("web3");

const EVM_REVERT = "VM Exception while processing transaction: revert";

const tokens = (n) => {
  return new web3.utils.BN(web3.utils.toWei(n.toString(), "ether"));
};

module.exports = {
  tokens,
  EVM_REVERT,
};
