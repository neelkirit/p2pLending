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
        return lenderList; 
    }

    function ignoreProcessedLender(uint8 index) public returns (bytes32[]) {
        if(index < lenderList.length)
          lenderList[index] = stringToBytes32("xxxx");
        
        return lenderList;
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

    function GetLenderListLength() public returns (uint256) {
        return lenderList.length;
    }

    function GetLenderFromPool(uint8 id) public returns (string) {
        return bytes32ToString(lenderList[id]);
    }

    function bytes32ToString(bytes32 x) constant returns (string) {
       bytes memory bytesString = new bytes(32);
       uint charCount = 0;
       for (uint j = 0; j < 32; j++) {
           byte char = byte(bytes32(uint(x) * 2 ** (8 * j)));
           if (char != 0) {
               bytesString[charCount] = char;
               charCount++;
           }
       }
       bytes memory bytesStringTrimmed = new bytes(charCount);
       for (j = 0; j < charCount; j++) {
           bytesStringTrimmed[j] = bytesString[j];
       }
       return string(bytesStringTrimmed);
    }
}