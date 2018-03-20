pragma solidity ^0.4.18;

contract matchLoan {

    bytes32[] public matchDetails;
    bytes32[] public matchTerms;

    function matchLoan(bytes32[] matchDetails,bytes32[] matchTerms) public {
        matchDetails = matchDetails;
        matchTerms = matchTerms;
    }

    function addToMatchPool(string matchedLoan) public {
        uint8 flag = 0;

        for(uint i = 0; i < matchDetails.length; i++) {
            if (matchDetails[i] == stringToBytes32(matchedLoan)) {
                flag = 1;
            }
        }
        if(flag == 0) {
            matchDetails.push(stringToBytes32(matchedLoan));
        }
        
    }

    function addToMatchTermsPool(string matchTerm) public {
        uint8 flag = 0;

        for(uint i = 0; i < matchTerms.length; i++) {
            if (matchTerms[i] == stringToBytes32(matchTerm)) {
                flag = 1;
            }
        }
        if(flag == 0) {
            matchTerms.push(stringToBytes32(matchTerm));
        }
        
    }

    function getMatchListLength() returns (uint256) {
        return matchDetails.length;
    }

    function getMatchTermsListLength() returns (uint256) {
        return matchTerms.length;
    }

    function GetMatches() public returns (bytes32[]) {
        return matchDetails; 
    }

    function getMatchFromPool(uint8 id) returns (string) {
        return bytes32ToString(matchDetails[id]);
    }

    function getMatchTermsFromPool(uint8 id) returns (string) {
        return bytes32ToString(matchTerms[id]);
    }

    function ignoreMatch(uint8 index) public returns (bytes32[]) {
        if(index < matchDetails.length)
          matchDetails[index] = stringToBytes32("xxxx");
        
        return matchDetails;
    }

    function ignoreMatchTerm(uint8 index) public returns (bytes32[]) {
        if(index < matchTerms.length)
          matchTerms[index] = stringToBytes32("xxxx");
        
        return matchTerms;
    }

    function removeMatch(uint8 index) public returns (bytes32[]) {
        for (uint i = index; i<matchDetails.length-1; i++){
            matchDetails[i] = matchDetails[i+1];
        }
                
        delete matchDetails[matchDetails.length-1];
        matchDetails.length--;
        return matchDetails;
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