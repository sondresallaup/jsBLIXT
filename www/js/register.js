Parse.initialize("Gy5zoQPReNBVWCK3JP9EUSnFpBAlmeSfg5deDtCq", "eYfKlYkY777qlJg0eMUqtUQYmXF5tlqs6uUlbhug");


$("button#submit").click( function() {
    document.getElementById("okButton").innerHTML='<i class="icon ion-loading-c"></i>';
  if( $("#username").val() == "" || $("#password").val() == "" || $("#repeatPassword").val() == "" || $("#name").val() == "" || $("#zip_number").val() == "" || $("#adress").val() == "" ){
      document.getElementById("okButton").innerHTML='Registrer deg';
    $("div#registermsg").html('<font color="red">Vennligst fyll ut alle feilt');}

	else{

		if($("#password").val() == $("#repeatPassword").val()){
			//TODO: sjekke passordlengde

			var user = new Parse.User();
			user.set("username", $("#username").val());
			user.set("name", $("#name").val());
            
            user.set("canonicalName", $("#name").val().toLowerCase());
            
			user.set("password", $("#password").val());
			user.set("email", $("#username").val());
			user.set("adressStreet", $("#adress").val());
			user.set("adressZip", $("#zip_number").val());
			user.set("adressCountry", "NO");
			  
			user.signUp(null, {
			  success: function(user) {
			    window.location = ('../walkthrough/');
			  },
			  error: function(user, error) {
			    // TODO: feilmelding basert på error.code
                  document.getElementById("okButton").innerHTML='Registrer deg';
			    $("div#registermsg").html("Error: " + error.code + " " + error.message);
			  }
			});


	}
	else{
        document.getElementById("okButton").innerHTML='Registrer deg';
		$("div#registermsg").html('<font color="red">Passordene samsvarer ikke');
	}


	}

 
	$("#registerform").submit( function() {
	   return false;	
	});
 
});





// http://stackoverflow.com/questions/10834796/validate-that-a-string-is-a-positive-integer
function isNormalInteger(str) {
    var n = ~~Number(str);
    return String(n) === str && n >= 0;
}