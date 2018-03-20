
$( document ).ready(function() {
    $("#box2").hide();
    $("#box3").hide();
    $("#box3-2").hide();
    $("#box4").hide();
    $("#box5").hide();
    $("#box6").hide();
    var borrowerDetails,bAadhar,bName,bDOB,bRationCard,bBhamashah,bAddress,bLandline,bMobile,bCat,bFathersName,bSpouse,bGender,bEconomicGroup,bEducation,bIncome,bBankName,bBankAc,bBankIFSC,bBankBranch,risk = "";
    var jsonData,interest,csv,days = "";
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
        interest = $("#interest").val();
        days = $("#days").val();

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


            csv = bBhamashah+","+loanAmount+","+interest+","+days;





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


    

    //Box 3  Submit
    $("#selectionPage").click(function(){ 
        $("#box3").hide();
        $("#box3-2").show();
    });

    //Box 3-2 Submit
    $("#call_smart_contract").click(function(){ 
        // Add Lender Smart Contract
        web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
        abi = JSON.parse('[{"constant":false,"inputs":[{"name":"lenderDetail","type":"string"}],"name":"AddLender","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"GetLenderListLength","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"lenderList","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"GetLenders","outputs":[{"name":"listOfLenders","type":"bytes32[]"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"x","type":"bytes32"}],"name":"bytes32ToString","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"id","type":"uint8"}],"name":"GetLenderFromPool","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"source","type":"string"}],"name":"stringToBytes32","outputs":[{"name":"result","type":"bytes32"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"lenderDetails","type":"bytes32[]"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]');
        borrowerContract = web3.eth.contract(abi);
        contractInstance = borrowerContract.at('0xda5712f03fb5e3467acfd5c024203eb53f9aae02');
        contractInstance.AddLender(csv,{from: web3.eth.accounts[0]});
        $("#box3-2").hide();
        $("#box4").show();
        fetchBorrowerFromBlockchain();
    });

    // $("#call_smart_contract_borrower").click(function(){ 
    function fetchBorrowerFromBlockchain(){
        web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
        abi = JSON.parse('[{"constant":false,"inputs":[],"name":"getBorrowerListLength","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"index","type":"uint8"}],"name":"removeBorrower","outputs":[{"name":"","type":"bytes32[]"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"borrower","type":"string"}],"name":"addToBorrowerPool","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"id","type":"uint8"}],"name":"getBorrowerFromPool","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"x","type":"bytes32"}],"name":"bytes32ToString","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"GetBorrowers","outputs":[{"name":"","type":"bytes32[]"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"borrowerDetails","type":"bytes32[]"}],"name":"Borrower","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"borrowerDetails","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"source","type":"string"}],"name":"stringToBytes32","outputs":[{"name":"result","type":"bytes32"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"index","type":"uint8"}],"name":"ignoreBorrower","outputs":[{"name":"","type":"bytes32[]"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]');
        borrowerContract = web3.eth.contract(abi);
        contractInstance = borrowerContract.at('0x6ee2d6caa178bbc1ac01fde81eb39956d6739472');
        console.log(csv);

        var  totalBorrower = contractInstance.getBorrowerListLength.call( {from: web3.eth.accounts[0]});
        totalBorrower = totalBorrower.c[0];

        for( i = 0 ; i < totalBorrower; i++) {
            var str = contractInstance.getBorrowerFromPool.call(i,{from: web3.eth.accounts[0]});
            console.log(str);
            if(str!="xxxx"){
                var arr = str.split(",");
                
                $("#box4").append("<div class='col s12 m6'> <div class='card medium loan-card'> <div class='card-image activator waves-effect waves-block waves-light' style='padding:10%''><br> Principal Amount:"+arr[1]+"<br><br> Interest: "+arr[2]+"<br> </div> <div class='card-content'> <span class='card-title activator grey-text text-darken-4'>View Loan Details<i class='material-icons right'>more_vert</i></span> <p><a class='waves-effect waves-light btn' onclick='match("+i+")''>Accept Loan Request</a></p> </div> <div class='card-reveal'> <span class='card-title'><i class='material-icons right'>close</i></span> <table> <tbody> <tr> <td>Aadhar</td> <td id='aadhar"+i+"'></td> </tr> <tr> <td>DoB</td> <td id='dob"+i+"'></td> </tr> <tr> <td>Bhamashah</td> <td id='bhamashah"+i+"'></td> </tr> <tr> <td>Category</td> <td id='cat"+i+"'></td> </tr> <tr> <td><strong>Economic </strong></td> <td ><strong id='economicGroup"+i+"'></strong></td> </tr> <tr> <td><strong>Education</strong></td> <td ><strong id='education"+i+"'></strong></td> </tr> <tr> <td><strong>Income</strong></td> <td ><strong id='income"+i+"'></strong></td> </tr> </tbody> </table> </div> </div> </div>");
                //Fetch Bhamashsh Details
                fetchBhamashahDetails(arr[0],i);
            }
            
        }
    }

    function fetchBhamashahDetails(bId,i) {
        jQuery.ajax({
                type: "GET",
                url: "https://apitest.sewadwaar.rajasthan.gov.in/app/live/Service/hofAndMember/ForApp/"+bId+"?client_id=ad7288a4-7764-436d-a727-783a977f1fe1",
                // data: $scope.awardsDetails,
                // contentType: "application/json",
                complete: function(data) {
                    borrowerDetails = JSON.parse(data.responseText);
                    console.log("Received");
                    console.log(borrowerDetails);
                }
            });
        if(borrowerDetails != null) {
            console.log("Here"+i);
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


            $("#aadhar"+i).html(bAadhar);
            $("#name"+i).html(bName);
            $("#dob"+i).html(bDOB);
            $("#rationCard"+i).html(bRationCard);
            $("#bhamashah"+i).html(bBhamashah);
            $("#address"+i).html(bAddress);
            $("#landline"+i).html(bLandline);
            $("#mobile"+i).html(bMobile);
            $("#cat"+i).html(bCat);

            $("#father"+i).html(bFathersName);
            $("#spouse"+i).html(bSpouse);
            $("#gender"+i).html(bGender);

            $("#economicGroup"+i).html(bEconomicGroup);
            $("#education"+i).html(bEducation);
            $("#income"+i).html(bIncome);

            $("#loan"+i).html(loanAmount);
            $("#bankName"+i).html(bBankName);
            $("#bankAc"+i).html(bBankAc);
            $("#bankIFSC"+i).html(bBankIFSC);
            $("#bankBranch"+i).html(bBankBranch);
        }
    }


    //Box 3-2  Submit
    $("#show_dashboard").click(function(){ 
        $("#box3-2").hide();
        $("#box5").show();
        //Match Smart Contract
        web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
        abi = JSON.parse('[{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"matchTerms","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"id","type":"uint8"}],"name":"getMatchFromPool","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"GetMatches","outputs":[{"name":"","type":"bytes32[]"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"getMatchTermsListLength","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"id","type":"uint8"}],"name":"getMatchTermsFromPool","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"matchTerm","type":"string"}],"name":"addToMatchTermsPool","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"matchedLoan","type":"string"}],"name":"addToMatchPool","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"matchDetails","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"x","type":"bytes32"}],"name":"bytes32ToString","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"getMatchListLength","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"index","type":"uint8"}],"name":"ignoreMatch","outputs":[{"name":"","type":"bytes32[]"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"source","type":"string"}],"name":"stringToBytes32","outputs":[{"name":"result","type":"bytes32"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"index","type":"uint8"}],"name":"removeMatch","outputs":[{"name":"","type":"bytes32[]"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"index","type":"uint8"}],"name":"ignoreMatchTerm","outputs":[{"name":"","type":"bytes32[]"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"matchDetails","type":"bytes32[]"},{"name":"matchTerms","type":"bytes32[]"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]');
        matchContract = web3.eth.contract(abi);
        contractInstance = matchContract.at('0x5b599bf255fa4f12564eeab46bde22b503283cda');
        console.log(csv);

        var  str = contractInstance.getMatchFromPool.call(0,{from: web3.eth.accounts[0]});
        arr = str.split(',');
        
        

        jQuery.ajax({
                type: "GET",
                url: "https://apitest.sewadwaar.rajasthan.gov.in/app/live/Service/hofAndMember/ForApp/"+arr[1]+"?client_id=ad7288a4-7764-436d-a727-783a977f1fe1",
                // data: $scope.awardsDetails,
                // contentType: "application/json",
                complete: function(data) {
                    borrowerDetails = JSON.parse(data.responseText);
                    console.log("Received");
                    console.log(borrowerDetails);
                }
            });
        if(borrowerDetails != null) {
            console.log("Here");
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


            $("#b-aadhar").html(bAadhar);
            $("#b-name").html(bName);
            $("#b-dob").html(bDOB);
            $("#b-rationCard").html(bRationCard);
            $("#b-bhamashah").html(bBhamashah);
            $("#b-address").html(bAddress);
            $("#b-landline").html(bLandline);
            $("#b-mobile").html(bMobile);
            $("#b-cat").html(bCat);

            $("#b-father").html(bFathersName);
            $("#b-spouse").html(bSpouse);
            $("#b-gender").html(bGender);

            $("#b-economicGroup").html(bEconomicGroup);
            $("#b-education").html(bEducation);
            $("#b-income").html(bIncome);

            $("#b-loan").html(loanAmount);
            $("#b-bankName").html(bBankName);
            $("#b-bankAc").html(bBankAc);
            $("#b-bankIFSC").html(bBankIFSC);
            $("#b-bankBranch").html(bBankBranch);
        }
    });


    //Box 5  Submit
    $("#prev").click(function(){ 
        $("#box3-2").show();
        $("#box5").hide();
    });





});


