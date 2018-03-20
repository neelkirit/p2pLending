
$( document ).ready(function() {
    $("#box2").hide();
    $("#box3").hide();
    $("#box4").hide();
    var borrowerDetails,bAadhar,bName,bDOB,bRationCard,bBhamashah,bAddress,bLandline,bMobile,bCat,bFathersName,bSpouse,bGender,bEconomicGroup,bEducation,bIncome,bBankName,bBankAc,bBankIFSC,bBankBranch,risk = "";
    var jsonData, csv = "";
    //Box 1  Submit
    $("#getBhamashah").click(function(){ 
            var bId = $("#bhamashah_id").val();
            console.log("https://apitest.sewadwaar.rajasthan.gov.in/app/live/Service/hofAndMember/ForApp/"+bId+"?client_id=ad7288a4-7764-436d-a727-783a977f1fe1");
            // require(validCandidate(candidate));
            // fetch details from Bhamashah
            jQuery.ajax({
                type: "GET",
                url: "https://apitest.sewadwaar.rajasthan.gov.in/app/live/Service/hofAndMember/ForApp/"+bId+"?client_id=ad7288a4-7764-436d-a727-783a977f1fe1",
                // data: $scope.awardsDetails,
                // contentType: "application/json",
                complete: function(data) {
                    // ACTION ON SUCCESS
                        console.log("Success");
                        // console.log(data.responseText);

                        borrowerDetails = JSON.parse(data.responseText);
                        if(borrowerDetails.bh == "no dta found"){
                            borrowerDetails = '{"hof_Details":{"CATEGORY_DESC_ENG":"SBC","AADHAR_ID":"734094301964","STATE":"Rajasthan","MOTHER_NAME_ENG":"ratna devi","HOUSE_NUMBER_ENG":null,"RELATION_ENG":"Self","DOB":"01/01/1988","ECONOMIC_GROUP":"APL","BUILDING_NO_ENG":"101","BHAMASHAH_ID":"1067-7PVQ-28383","STREET_NAME_ENG":"ward 5","IFSC_CODE":"BARB0BALSAW","M_ID":"0","FAMILYIDNO":"WDDQMOW","PIN_CODE":"321608","LANDLINE_NO":null,"VILLAGE_NAME":"TUDIYANA","GP_WARD":"TUDIYANA","EMAIL":null,"SPOUCE_NAME_ENG":"dhoojiram gurjar","IS_RURAL":"Rural","DISTRICT":"Dausa","EDUCATION_DESC_ENG":"Literate","ACC_NO":"16230100006463","ADDRESS":"101, dhoojiram gurjar, ward 5, TUDIYANA, Mahwa, Dausa","INCOME_DESC_ENG":"20000-50000","BANK_NAME":"BANK OF BARODA","LAND_MARK_ENG":null,"RATION_CARD_NO":"007816701259","NAME_ENG":"mundar devi gurjar","MOBILE_NO":"9982867432","GENDER":"Female","FATHER_NAME_ENG":"pyarelal","FAX_NO":null,"BLOCK_CITY":"Mahwa"},"family_Details":[{"CATEGORY_DESC_ENG":"SBC","STATE":"Rajasthan","MOTHER_NAME_ENG":"suaa devi","HOUSE_NUMBER_ENG":null,"RELATION_ENG":"Husband","DOB":"02/07/1983","MEMBER_AADHAR_ID":"388038964343","ECONOMIC_GROUP":"APL","BUILDING_NO_ENG":"101","BHAMASHAH_ID":"1067-7PVQ-28383","STREET_NAME_ENG":"ward 5","IFSC_CODE":"BARB0BALSAW","M_ID":"4878416","FAMILYIDNO":"WDDQMOW","PIN_CODE":"321608","LANDLINE_NO":null,"VILLAGE_NAME":"TUDIYANA","GP_WARD":"TUDIYANA","EMAIL":null,"SPOUCE_NAME_ENG":"mundar devi gurjar","IS_RURAL":"Rural","DISTRICT":"Dausa","EDUCATION_DESC_ENG":"10 Pass","ACC_NO":"16230100002301","ADDRESS":"101, dhoojiram gurjar, ward 5, TUDIYANA, Mahwa, Dausa","INCOME_DESC_ENG":"20000-50000","BANK_NAME":"BANK OF BARODA","LAND_MARK_ENG":null,"RATION_CARD_NO":"007816701259","NAME_ENG":"dhoojiram gurjar","MOBILE":"0","GENDER":"Male","FATHER_NAME_ENG":"harisingh gurjar","FAX_NO":null,"BLOCK_CITY":"Mahwa"},{"CATEGORY_DESC_ENG":"SBC","STATE":"Rajasthan","MOTHER_NAME_ENG":"mundar devi gurjar","HOUSE_NUMBER_ENG":null,"RELATION_ENG":"Son","DOB":"01/06/2006","MEMBER_AADHAR_ID":"766565486298","ECONOMIC_GROUP":"APL","BUILDING_NO_ENG":"101","BHAMASHAH_ID":"1067-7PVQ-28383","STREET_NAME_ENG":"ward 5","IFSC_CODE":null,"M_ID":"4878417","FAMILYIDNO":"WDDQMOW","PIN_CODE":"321608","LANDLINE_NO":null,"VILLAGE_NAME":"TUDIYANA","GP_WARD":"TUDIYANA","EMAIL":null,"SPOUCE_NAME_ENG":null,"IS_RURAL":"Rural","DISTRICT":"Dausa","EDUCATION_DESC_ENG":"8 Pass","ACC_NO":null,"ADDRESS":"101, dhoojiram gurjar, ward 5, TUDIYANA, Mahwa, Dausa","INCOME_DESC_ENG":"20000-50000","BANK_NAME":null,"LAND_MARK_ENG":null,"RATION_CARD_NO":"007816701259","NAME_ENG":"vedprakash rawat","MOBILE":"0","GENDER":"Male","FATHER_NAME_ENG":"dhoojiram gurjar","FAX_NO":null,"BLOCK_CITY":"Mahwa"},{"CATEGORY_DESC_ENG":"SBC","STATE":"Rajasthan","MOTHER_NAME_ENG":"mundar devi gurjar","HOUSE_NUMBER_ENG":null,"RELATION_ENG":"Son","DOB":"03/07/2008","MEMBER_AADHAR_ID":"796668014335","ECONOMIC_GROUP":"APL","BUILDING_NO_ENG":"101","BHAMASHAH_ID":"1067-7PVQ-28383","STREET_NAME_ENG":"ward 5","IFSC_CODE":null,"M_ID":"4878418","FAMILYIDNO":"WDDQMOW","PIN_CODE":"321608","LANDLINE_NO":null,"VILLAGE_NAME":"TUDIYANA","GP_WARD":"TUDIYANA","EMAIL":null,"SPOUCE_NAME_ENG":null,"IS_RURAL":"Rural","DISTRICT":"Dausa","EDUCATION_DESC_ENG":"5 Pass","ACC_NO":null,"ADDRESS":"101, dhoojiram gurjar, ward 5, TUDIYANA, Mahwa, Dausa","INCOME_DESC_ENG":"20000-50000","BANK_NAME":null,"LAND_MARK_ENG":null,"RATION_CARD_NO":"007816701259","NAME_ENG":"madanmohan rawat","MOBILE":"0","GENDER":"Male","FATHER_NAME_ENG":"dhoojiram gurjar","FAX_NO":null,"BLOCK_CITY":"Mahwa"},{"CATEGORY_DESC_ENG":"SBC","STATE":"Rajasthan","MOTHER_NAME_ENG":"jhuniya","HOUSE_NUMBER_ENG":null,"RELATION_ENG":"Father-in-law","DOB":"01/01/1952","MEMBER_AADHAR_ID":"447306886787","ECONOMIC_GROUP":"APL","BUILDING_NO_ENG":"101","BHAMASHAH_ID":"1067-7PVQ-28383","STREET_NAME_ENG":"ward 5","IFSC_CODE":null,"M_ID":"4878419","FAMILYIDNO":"WDDQMOW","PIN_CODE":"321608","LANDLINE_NO":null,"VILLAGE_NAME":"TUDIYANA","GP_WARD":"TUDIYANA","EMAIL":null,"SPOUCE_NAME_ENG":"suaa devi","IS_RURAL":"Rural","DISTRICT":"Dausa","EDUCATION_DESC_ENG":"10 Pass","ACC_NO":null,"ADDRESS":"101, dhoojiram gurjar, ward 5, TUDIYANA, Mahwa, Dausa","INCOME_DESC_ENG":"20000-50000","BANK_NAME":null,"LAND_MARK_ENG":null,"RATION_CARD_NO":"007816701259","NAME_ENG":"harisingh gurjar","MOBILE":"0","GENDER":"Male","FATHER_NAME_ENG":"kajodya","FAX_NO":null,"BLOCK_CITY":"Mahwa"}]}';
                            borrowerDetails = JSON.parse(borrowerDetails);
                        }
                        console.log(borrowerDetails);
                        $("#box1").hide();
                        $("#box2").show();
                    }
            });

    });
    

    //Box 2  Submit
    $("#verify_details").click(function(){ 
        loanAmount = $("#loan_amount").val();
        $("#box2").hide();
        $("#box3").show();

        borrowerDetails = borrowerDetails.hof_Details;
        console.log(borrowerDetails);
        if(borrowerDetails != null) {
            // Personal Details
            bAadhar = borrowerDetails.AADHAR_ID;
            bName = borrowerDetails.NAME_ENG;
            bDOB = borrowerDetails.DOB;
            bRationCard = borrowerDetails.RATION_CARD_NO;
            bBhamashah = borrowerDetails.BHAMASHAH_ID;
            bAddress = borrowerDetails.ADDRESS + " " + borrowerDetails.PIN_CODE;
            bLandline = borrowerDetails.LANDLINE_NO;
            bMobile = borrowerDetails.MOBILE_NO;
            bCat = borrowerDetails.CATEGORY_DESC_ENG;

            bFathersName = borrowerDetails.FATHER_NAME_ENG;
            bSpouse = borrowerDetails.SPOUCE_NAME_ENG;
            bGender = borrowerDetails.GENDER;

            // Risk Evaluation
            bEconomicGroup = borrowerDetails.ECONOMIC_GROUP;
            bEducation = borrowerDetails.EDUCATION_DESC_ENG;
            bIncome = borrowerDetails.INCOME_DESC_EN;
            if(bIncome == null) {
                bIncome = "Less than 5000";
            }

            // Bank Details
            bBankName = borrowerDetails.BANK_NAME;
            bBankAc = borrowerDetails.ACC_NO;
            bBankIFSC = borrowerDetails.IFSC_CODE;
            bBankBranch = borrowerDetails.BLOCK_CITY;

            switch(checkLoanEligibilty(bEconomicGroup,bEducation,bIncome))
            {
            case 0: risk = 0;
                    break;
            case 1: risk = 2;
                    break;
            case 2: risk = 1;
                    break;
            }   

            // jsonData = {
            //     'bh':bBhamashah,
            //     'loan':loanAmount,
            //     'risk':risk

            // }
            csv = bBhamashah+","+loanAmount+","+risk;
            // jsonData = {
            //     'bAadhar': bAadhar,
            //     'bName':bName,
            //     'bDOB':bDOB,
            //     'bRationCard':bRationCard,
            //     'bBhamashah':bBhamashah,
            //     'bAddress':bAddress,
            //     'bLandline':bLandline,
            //     'bMobile':bMobile,
            //     'bCat':bCat,
            //     'bCat':bCat,
            //     'bFathersName':bFathersName,
            //     'bSpouse':bSpouse,
            //     'bGender':bGender,
            //     'bEconomicGroup':bEconomicGroup,
            //     'bEducation':bEducation,
            //     'bIncome':bIncome,
            //     'bBankName':bBankName,
            //     'bBankAc':bBankAc,
            //     'bBankIFSC':bBankIFSC,
            //     'bBankBranch':bBankBranch
            // };
            
            // jsonData = JSON.stringify(jsonData);




        }

        $("#aadhar").html(bAadhar);
        $("#name").html(bName);
        $("#dob").html(bDOB);
        $("#rationCard").html(bRationCard);
        $("#bhamashah").html(bBhamashah);
        $("#address").html(bAddress);
        $("#landline").html(bLandline);
        $("#mobile").html(bMobile);
        $("#cat").html(bCat);

        $("#father").html(bFathersName);
        $("#spouse").html(bSpouse);
        $("#gender").html(bGender);

        $("#economicGroup").html(bEconomicGroup);
        $("#education").html(bEducation);
        $("#income").html(bIncome);

        $("#loan").html(loanAmount);
        $("#bankName").html(bBankName);
        $("#bankAc").html(bBankAc);
        $("#bankIFSC").html(bBankIFSC);
        $("#bankBranch").html(bBankBranch);

            
        
    });


    function checkLoanEligibilty(eco,edu,inc) {
        return 1;
    }

    //Box 3  Submit
    $("#show_interest").click(function(){ 
        swal({
          title: "Sucess!",
          text: "Your Interest Rate is 4.5%",
          icon: "success",
          button: "Proceed!"
          })
          .then((confirm) => {
            call_smart_contract();
            });
        
            
            
        });
    
    
    $("#call_smart_contract").click(function(){ 
        

    });

    function call_smart_contract() {
            $("#box3").hide();
            $("#box4").show();
            web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
            abi = JSON.parse('[{"constant":false,"inputs":[],"name":"getBorrowerListLength","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"index","type":"uint8"}],"name":"removeBorrower","outputs":[{"name":"","type":"bytes32[]"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"borrower","type":"string"}],"name":"addToBorrowerPool","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"id","type":"uint8"}],"name":"getBorrowerFromPool","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"x","type":"bytes32"}],"name":"bytes32ToString","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"GetBorrowers","outputs":[{"name":"","type":"bytes32[]"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"borrowerDetails","type":"bytes32[]"}],"name":"Borrower","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"borrowerDetails","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"source","type":"string"}],"name":"stringToBytes32","outputs":[{"name":"result","type":"bytes32"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"index","type":"uint8"}],"name":"ignoreBorrower","outputs":[{"name":"","type":"bytes32[]"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]');
            borrowerContract = web3.eth.contract(abi);
            contractInstance = borrowerContract.at('0xa2946ad7bd41632daeb95210d9158c7d8b2bf25c');
            console.log(csv);

            contractInstance.addToBorrowerPool(csv, {from: web3.eth.accounts[0]}, function() {});
    }


});


