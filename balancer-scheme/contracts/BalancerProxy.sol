pragma solidity >=0.5.13;

import "@daostack/arc/contracts/controller/Avatar.sol";
import './interfaces/IConfigurableRightsPool.sol';

contract BalancerProxy {
    bool               		public initialized;
    Avatar             		public avatar;
    IConfigurableRightsPool public crpool;
    
    modifier initializer() {
        require(!initialized, "BalancerProxy: proxy already initialized");
        initialized = true;
        _;
    }

    modifier protected () {
        require(initialized,                   "BalancerProxy: proxy not initialized");
        require(msg.sender == address(avatar), "BalancerProxy: protected operation");
        _;
    }

    function initialize(Avatar _avatar, IConfigurableRightsPool _crpool/*, IBPool _bpool,*/) external initializer {
        require(_avatar != Avatar(0),             	   "BalancerProxy: avatar cannot be null");
        require(_crpool != IConfigurableRightsPool(0), "BalancerProxy: crpool cannot be null");

        avatar = _avatar;
        crpool = _crpool;
    }
}