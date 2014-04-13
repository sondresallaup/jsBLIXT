function checkCookie(){
	if(localStorage.getItem('user_id') != "" && localStorage.getItem('user_id') != null){
		window.location = ('pages/main.html');
	}
}


$("button#submit").click( function() {
 
  if( $("#username").val() == "" || $("#password").val() == "" )
    $("div#loginmsg").html('<font color="red">Vennligst skriv brukernavn og passord');
  else
    $.post( $("#loginform").attr("action"),
	        $("#loginform :input").serializeArray(),
			function(data) {
				if(isUser_id(data)){
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

function isUser_id(string){
	return (string != "error");
}