pragma solidity >=0.5.0;

contract Credentials {
    address payable _owner;
    string private _credentials;
    address private _projectDidAddress;
    string private _expireTime;
    address private _notificationContractAddress;
    string private _identifyBy;
    bool private _oneTimeCall;

    bool private _terminated;
    mapping (address => bool) private accessList;

    /**
     * Constructor parameters:
     *      string    credentials
     *      address   projectDidAddress
     *      string    expireTime
     *      address   notificationContractAddress
     *      string    identifyBy
     * Set owner to address owner
     */
    constructor(
        string memory credentials,
        address projectDidAddress,
        string memory expireTime,
        address notificationContractAddress,
        string memory identifyBy,
        bool oneTimeCall
    ) public {
        _owner = msg.sender;
        _credentials = credentials;
        _projectDidAddress = projectDidAddress;
        _expireTime = expireTime;
        _notificationContractAddress = notificationContractAddress;
        _identifyBy = identifyBy;
        _oneTimeCall = oneTimeCall;

        setAddressAccess(msg.sender, true);
        setAddressAccess(projectDidAddress, true);
    }

    /**
     * Set the credentials
     * onlyOwner
     */
    function setCredentials(string memory credentials) public onlyOwner {
        require(!_terminated);
        _credentials = credentials;
    }

    /**
     * Get the credentials
     * @return credentials as a string
     */
    function getCredentials() public hasAccess() view returns (string memory) {
        require(!_terminated);
        return _credentials;
    }

    /**
    * Terminate the contract
    * onlyOwner
    */
    function terminate() public hasAccess() {
        _terminated = true;
        selfdestruct(_owner);
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
    function getOwner() public view returns (address) {
        return _owner;
    }

    /**
     * @return true if `msg.sender` is the owner of the contract.
     */
    function isOwner() private view returns (bool) {
        return msg.sender == _owner;
    }

    function setAddressAccess(address accessAddress, bool status) public onlyOwner() {
        accessList[accessAddress] = status;
    }

    function getExpireTime() public view returns (string memory) {
        return _expireTime;
    }

    function getProjectDidContract() public view returns (address) {
        return _projectDidAddress;
    }

    function getNotificationContractAddress() public view returns (address) {
        return _notificationContractAddress;
    }

    function setNotificationContractAddress(address notificationContractAddress) public onlyOwner() {
        _notificationContractAddress = notificationContractAddress;
    }

    function setIdentifyBy(string memory identifyBy) public onlyOwner {
        _identifyBy = identifyBy;
    }

    function identifyBy() public hasAccess() view returns (string memory) {
        return _identifyBy;
    }

    function addressHasAccess(address accessAddress) public view returns (bool) {
        return accessList[accessAddress];
    }

    function isOneTimeCall() public hasAccess() view returns (bool) {
        return _oneTimeCall;
    }

    modifier hasAccess() {
        require(accessList[msg.sender]);
        _;
    }

    /**
     * Throws if called by any account other than the owner.
     */
    modifier onlyOwner() {
        require(isOwner());
        _;
    }
}
