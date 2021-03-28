//custom jquery for form validation

$(document).ready(function(){
  	
	 // Defining error variables with a default value
    var firstnameErr = lastnameErr = phoneErr = officeErr = emailErr = passwordErr = confirm_passwordErr = genderErr = interestErr = aboutyouErr = dobErr = true;
   

  	// Defining a function to display error message
	function printError(elemId, hintMsg) {
	  $("#" + elemId).html(hintMsg);
	}
	
	// check the valid dob
	function checkDob() { 
		
		var mm = $("#id_month").val();
	    var dd = $("#id_day").val();
	    var yy = $("#id_year").val();

	    //check DOB
	    var valid_mm = "month" !== mm;
    	var valid_dd = "day" !== dd;
    	var valid_yy = "year" !== yy;

    	//check mm/dd/yy is valid or not
    	var valid_mm_dd_yy = valid_mm && valid_dd && valid_yy == true;
    	
    	return valid_mm_dd_yy;		//return true or false
	}

	/* ------ on change event start -------*/

	$("select").on("change", function(){
	    var mm = $("#id_month").val();
	    var dd = $("#id_day").val();
	    var yy = $("#id_year").val();

	    var valid_Dob = checkDob();
	    
	    //calculate Age
	    if (valid_Dob) {
        	
        	printError("dobErr", "");
	        $("#dobErr").removeClass("mystyle");
	        dobErr = false;

	        var dob = mm + "/" + dd + "/" + yy;
	      
	        var today = new Date();                 // Current Date
	        var birthDate = new Date(dob);    		// Date of Birth 

	        var today_Y = today.getFullYear();      // current year
	        var today_M = today.getMonth();         // DOB year
	        
	        var birthDate_Y = birthDate.getFullYear();  // current month
	        var birthDate_M = birthDate.getMonth();     // DOB month
	        
	        var age_Y =  today_Y - birthDate_Y;
	        
	        if (today_M >= birthDate_M) {
	            var monthAge = today_M - birthDate_M;
	        } else {  
	            age_Y--;  
	            var monthAge = 12 + today_M - birthDate_M;  
	        } 
	        $("#age").val(age_Y + "." + monthAge + " years");
	        //$("#age").prop('disabled', true);
	    }
	});
	/* ----------- End -------------*/

	// Action perform on ckick event
	$('#submit').on("click",function() {
		
		//Retrieving the values of form elements 
	    var firstname = $('[name="firstname"]').val(); 
	    var lastname = $('[name="lastname"]').val(); 
	    
	    var phone = $('[name="phone"]').val(); 
	    var office = $('[name="office"]').val(); 
	    var email = $('[name="email"]').val(); 
	    
	    var password = $('[name="password"]').val(); 
	    var confirm_password = $('[name="confirm_password"]').val(); 
	    
	    var age = $('[name="age"]').val(); 
	    var gender = $('[name="gender"]').is(':checked'); 
	     
	    var aboutyou = $('[name="aboutyou"]').val(); 
	    
		// Validate firstname
	    if(firstname == "") {
	        printError("firstnameErr", "Compulsory");
	        $("#firstnameErr").addClass("mystyle");
	        //return false;
	    } else {
	        var regex = /^[a-zA-Z\s]+.{2}$/;                
	        if(regex.test(firstname) === false) {
	            printError("firstnameErr", "Please enter a valid firstname");
	            $("#firstnameErr").addClass("mystyle");
	            //return false;
	        } else {
	            printError("firstnameErr", "");
	            $("#firstnameErr").removeClass("mystyle");
	            firstnameErr = false;
	        }
	    }

	    // Validate lastname
	    if(lastname == "") {
	        printError("lastnameErr", "Compulsory");
	        $("#lastnameErr").addClass("mystyle");
	        //return false;
	    } else {
	        var regex = /^[a-zA-Z\s]+.{2}$/;                
	        if(regex.test(lastname) === false) {
	            printError("lastnameErr", "Please enter a valid lastname");
	            $("#lastnameErr").addClass("mystyle");
	            //return false;
	        } else {
	            printError("lastnameErr", "");
	            $("#lastnameErr").removeClass("mystyle");
	            lastnameErr = false;
	        }
	    }

	    // Validate phone
	    if(phone == "") {
	        printError("phoneErr", "Compulsory, Only Nos, exact 10 digit");
	        $("#phoneErr").addClass("mystyle");
	        //return false;
	    } else {
	        var regex = /^[1-9]\d{9}$/;                
	        if(regex.test(phone) === false) {
	            printError("phoneErr", "Please enter a valid 10 digit");
	            $("#phoneErr").addClass("mystyle");
	            //return false;
	        } else {
	            printError("phoneErr", "");
	            $("#phoneErr").removeClass("mystyle");
	            phoneErr = false;
	        }
	    }

	    // Validate office
	    if(office == "") {
	        printError("officeErr", "Only Nos");
	        $("#officeErr").addClass("mystyle");
	        //return false;
	    } else {
	        var regex = /^[1-9]\d{9}$/;                
	        if(regex.test(office) === false) {
	            printError("officeErr", "Please enter a valid number");
	            $("#officeErr").addClass("mystyle");
	            //return false;
	        } else {
	            printError("officeErr", "");
	            $("#officeErr").removeClass("mystyle");
	            officeErr = false;
	        }
	    }

	    // Validate email
	    if(email == "") {
	        printError("emailErr", "Compulsory, Email validation");
	        $("#emailErr").addClass("mystyle");
	        //return false;
	    } else {
	        var regex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;                
	        if(regex.test(email) === false) {
	            printError("emailErr", "Please enter a valid email address");
	            $("#emailErr").addClass("mystyle");
	            //return false;
	        } else {
	            printError("emailErr", "");
	            $("#emailErr").removeClass("mystyle");
	            emailErr = false;
	        }
	    }

	    // Validate password
	    if(password == "") {
	        printError("passwordErr", "8 to 12 chars, Alphanumeric char, No Special char");
	        $("#passwordErr").addClass("mystyle");
	        //return false;
	    } else {
	        var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*[!@#\$%\^&\*]).{8,12}$/;                
	        if(regex.test(password) === false) {
	            printError("passwordErr", "Please enter a valid password");
	            $("#passwordErr").addClass("mystyle");
	            //return false;
	        } else {
	            printError("passwordErr", "");
	            $("#passwordErr").removeClass("mystyle");
	            passwordErr = false;
	        }
	    }

	    // validate confirm password
	    if(confirm_password == "") {
	        printError("confirm_passwordErr", "Compulsory, Exactly same as Password");
	        $("#confirm_passwordErr").addClass("mystyle");
	        //return false;
	    } else {                
	        if(password !== confirm_password) {
	            printError("confirm_passwordErr", "Please enter a valid password");
	            $("#confirm_passwordErr").addClass("mystyle");
	            //return false;
	        } else {
	            printError("confirm_passwordErr", "");
	            $("#confirm_passwordErr").removeClass("mystyle");
	            confirm_passwordErr = false;
	        }
	    }

	    //Date of birth
	    var valid_Dob = checkDob();
    	
    	if (!valid_Dob) {
	        printError("dobErr", "DOB Compulsary");
	        $("#dobErr").addClass("mystyle");
        }
	    
	    // Validate gender
	    if(gender == "") {
	        printError("genderErr", "Compulsory");
	        $("#genderErr").addClass("mystyle");
	        //return false;
	    } else {
	        printError("genderErr", "");
	        $("#genderErr").removeClass("mystyle");
	        genderErr = false;
	    }

	    //Interest check validation
	    var check18 = $("#checkbox_sample18").is(':checked');
	    var check19 = $("#checkbox_sample19").is(':checked');
	    var check20 = $("#checkbox_sample20").is(':checked');

	    //check one if check box check or not
	    if(check18 || check19 || check20 == true) {
	        printError("interestErr", "");
	        $("#interestErr").removeClass("mystyle");
	        interestErr = false;
	    } else {
	        printError("interestErr", "It should have min 1 value selected");
	        $("#interestErr").addClass("mystyle");
	        //return false;
	    }

	    // Validate aboutyou
	    if(aboutyou == "") {
	        printError("aboutyouErr", "Compulsory");
	        $("#aboutyouErr").addClass("mystyle");
	        return false;
	    } else {
	        printError("aboutyouErr", "");
	        $("#aboutyouErr").removeClass("mystyle");
	        aboutyouErr = false;
	    }

	    // submit if return false
	    if ((firstnameErr || lastnameErr || phoneErr || officeErr || emailErr || passwordErr || confirm_passwordErr || genderErr || interestErr || aboutyouErr || dobErr) == true) {
	        return false;
	    }else {
	        alert('Your details saved. Go to next step');
	    }
	   
	});
	/* ---- on click event end -------*/

});
