pragma solidity ^0.4.18;

contract Auditing {
    
    bytes32[] public auditList;

    function Auditing(bytes32[] lenderDetails) {
        lenderList = lenderDetails;
    }
    
    function AddLender(string lenderDetails) public { 
        lenderList.push(stringToBytes32(lenderDetails)); 
    }

    function getLenders() public constant returns (bytes32[] lenderList) {
        return lenderList; 
    }

    function stringToBytes32(string memory source) returns (bytes32 result) {
        bytes memory tempEmptyStringTest = bytes(source);
        if (tempEmptyStringTest.length == 0) {
            return 0x0;
        }

        assembly {
            result := mload(add(source, 32))
        }
    }
}