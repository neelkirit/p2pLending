pragma solidity ^0.4.18;

contract Lending {
    
    struct Lender
    { 
        string bhamashahId;
        string name;
        uint32 loanAmount;
        string personalMessage;
    } 

    Lender[] lenders; 

    function Lending(bytes32[] lenderDetails) public {
        for (uint i = 0; i < lenderDetails.length; i++) {
            lenders.push(Lender({
                bhamashahId: lenderDetails[i][0],
                name: lenderDetails[i][1],
                loanAmount: lenderDetails[i][2],
                personalMessage: lenderDetails[i][3]
            }));
        }
    }
    
    function AddLender(string bhamashahId, string name, uint32 loanAmount, string personalMessage) public { 
        lenders.push(Lender(bhamashahId, name, loanAmount, personalMessage)); 
    }

    function getLenders() public constant returns (Lender[]) {
        return lenders; 
    }
}