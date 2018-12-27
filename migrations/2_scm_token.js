var SCMToken = artifacts.require("./SCMToken.sol");

module.exports = function(deployer) {
  deployer.deploy(SCMToken);
};
