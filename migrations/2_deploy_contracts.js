const WINRCrowdsale = artifacts.require('./WINRCrowdsale.sol');

module.exports = (deployer) => {
    //http://www.onlineconversion.com/unix_time.htm
    var owner = "0x22fF906881cF77210756784427C8E14CD5Db9bf3";

    deployer.deploy(WINRCrowdsale, owner, wallet);

};
