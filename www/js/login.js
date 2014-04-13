function checkCookie(){
	if(localStorage.getItem('user_id') != "" && localStorage.getItem('user_id') != null){
		window.location = ('pages/main.html');
	}
}

function isInt(string){
	return !isNaN(string);
}

$("button#submit").click( function() {
 
  if( $("#username").val() == "" || $("#password").val() == "" )
    $("div#loginmsg").html('<font color="red">Vennligst skriv brukernavn og passord');
  else
    $.post( $("#loginform").attr("action"),
	        $("#loginform :input").serializeArray(),
			function(data) {
				if(isInt(data)){
			  		localStorage.setItem('user_id', data);
			  		checkCookie();
			  	}
			  	else{
		  			$("div#loginmsg").html(data);
			  	}
			});
 
	$("#loginform").submit( function() {
	   return false;	
	});
 
});