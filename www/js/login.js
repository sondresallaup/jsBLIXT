function checkCookie(){

	if(getLoggedInUsers_id() != "" && getLoggedInUsers_id() != null){
		window.location = ('pages/main.html');
	}
}






$("button#submit").click( function() {
  if( $("#username").val() == "" || $("#password").val() == "" )
    $("div#loginmsg").html('<font color="red">Vennligst skriv brukernavn og passord');
  else{

  	Parse.User.logIn($("#username").val(), $("#passord").val(), {
  success: function(user) {
    alert("yay");
  },
  error: function(user, error) {
    alert("yoy");
  }
});
  }
    
				else{
					$("div#loginmsg").html('<font color="red">Feil brukernavn eller passord');
				}

			});
 
	$("#loginform").submit( function() {
	   return false;	
	});
 
});

function isUser_id(string){
	return (string != "false");
}


/*
$.post( $("#loginform").attr("action"),
	        $("#loginform :input").serializeArray(),
			function(data) {
				if(data != "false"){
					$("div#loginmsg").html(data);
					checkCookie();
				}

*/