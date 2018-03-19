pragma solidity ^0.4.18;

contract borrower {


    bytes32[] public borrowerDetails;

    function Borrower(bytes32[] borrowerDetails) public {
        borrowerDetails = borrowerDetails;
    }

    function addToBorrowerPool(string borrower) public {
        uint8 flag = 0;

        for(uint i = 0; i < borrowerDetails.length; i++) {
            if (borrowerDetails[i] == stringToBytes32(borrower)) {
                flag = 1;
            }
        }
        if(flag == 0) {
            borrowerDetails.push(stringToBytes32(borrower));
            // borrowerPool[borrowerPool.length-1]  = borrower;
        }
    }

    function getBorrowerFromPool(uint8 id) returns (string) {
        return bytes32ToString(borrowerDetails[id]);
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