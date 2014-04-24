function checkCookie(){

	var currentUser = Parse.User.current();
	if(currentUser){
		window.location = ('pages/main.html');
	}
}



Parse.initialize("Gy5zoQPReNBVWCK3JP9EUSnFpBAlmeSfg5deDtCq", "eYfKlYkY777qlJg0eMUqtUQYmXF5tlqs6uUlbhug");


$("button#submit").click( function() {
  if( $("#username").val() == "" || $("#password").val() == "" ){
      document.getElementById("card").style.display = "block";
    $("div#loginmsg").html('<font color="red">Vennligst skriv brukernavn og passord');
  }
	else{

		Parse.User.logIn($("#username").val(), $("#password").val(), {
		  success: function(user) {
		    window.location = ('pages/main.html');
		  },
		  error: function(user, error) {
              document.getElementById("card").style.display = "block";
		    $("div#loginmsg").html('<font color="red">Feil brukernavn og/eller passord');
		  }
		});
	}

 
	$("#loginform").submit( function() {
	   return false;	
	});
 
});


