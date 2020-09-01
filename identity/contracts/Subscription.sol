pragma solidity ^0.4.25;

contract Subscription {
    string private _subscription;
    bool private _terminated;
    address private _owner;
    
    /**
     * Constructor parameters:
     *      address   owner
     *      string    credentials
     * Set owner to address owner
     */
    constructor(string memory subscription) public {
        _owner = msg.sender;
        _subscription = subscription;
    }
    
    /**
     * Set the credentials
     * onlyOwner
     */
    function setSubscription(string subscription) public onlyOwner {
        require(!_terminated);
        _subscription = subscription;
    }
    
    /**
     * Get the subscription
     * @return subscription as a string
     */
    function getSubscription() public view returns (string) {
        require(!_terminated);
        return _subscription;
    }
    
     /**
     * Terminate the contract
     * onlyOwner
     */
    function terminate() public onlyOwner {
        _terminated = true;
    }
    
    /**
     * Get the terminated status
     * @return terminated as a bool
     */
    function isTerminated() public view returns (bool) {
        return _terminated;
    }
    
    /**
     * @return the address of the owner.
     */
    function getOwner() public onlyOwner view returns (address) {
        return _owner;
    }
  
    /**
     * @return true if `msg.sender` is the owner of the contract.
     */
    function isOwner() private view returns (bool) {
        return msg.sender == _owner;
    }

    /**
     * @dev Throws if called by any account other than the owner.
     */
    modifier onlyOwner() {
        require(isOwner());
        _;
    }
}