
$( document ).ready(function() {
    $("#box2").hide();
    $("#box3").hide();
    var borrowerDetails,bAadhar,bName,bDOB,bRationCard,bIncome,loanAmount = "";

    //Box 1  Submit
    $("#getBhamashah").click(function(){ 
            var bId = $("#bhamashah_id").val();
            console.log("https://apitest.sewadwaar.rajasthan.gov.in/app/live/Service/hofAndMember/ForApp/"+bId+"?client_id=ad7288a4-7764-436d-a727-783a977f1fe1");
            // require(validCandidate(candidate));
            // fetch details from Bhamashah
            jQuery.ajax({
                type: "GET",
                url: "https://apitest.sewadwaar.rajasthan.gov.in/app/live/Service/family/details/"+bId+"?client_id=ad7288a4-7764-436d-a727-783a977f1fe1",
                // data: $scope.awardsDetails,
                // contentType: "application/json",
                complete: function(data) {
                    // ACTION ON SUCCESS
                        console.log("Success");
                        // console.log(data.responseText);
                        borrowerDetails = JSON.parse(data.responseText);
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
        if(borrowerDetails != null) {
            bAadhar = borrowerDetails.AADHAR_ID;
            bName = borrowerDetails.NAME_ENG;
            bDOB = borrowerDetails.DOB
            bRationCard = borrowerDetails.RATION_CARD_NO;
            bIncome = borrowerDetails.INCOME_DESC_EN;
            if(bIncome == null) {
                bIncome = "Less than 5000";
            }
        }

        $("#aadhar").html(bAadhar);
        $("#name").html(bName);
        $("#dob").html(bDOB);
        $("#rationCard").html(bRationCard);
        $("#income").html(bIncome);
        $("#loan").html(loanAmount);
    });

    //Box 3  Submit
    $("#call_smart_contract").click(function(){ 
        
    });


});


