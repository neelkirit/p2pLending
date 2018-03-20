pragma solidity ^0.4.18;

contract lender {
    
    bytes32[] public lenderList;

    function lender(bytes32[] lenderDetails) public {
        lenderList = lenderDetails;
    }
    
    function AddLender(string lenderDetail) public { 
        lenderList.push(stringToBytes32(lenderDetail)); 
    }

    function GetLenders() public returns (bytes32[] listOfLenders) {
        return listOfLenders; 
    }

    function stringToBytes32(string memory source) public returns (bytes32 result) {
        bytes memory tempEmptyStringTest = bytes(source);
        if (tempEmptyStringTest.length == 0) {
            return 0x0;
        }

        assembly {
            result := mload(add(source, 32))
        }
    }
}