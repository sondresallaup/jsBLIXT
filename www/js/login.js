function checkCookie(){
	if(localStorage.getItem('user_id') == "false"){
		
	}

	else if(localStorage.getItem('user_id') != "" && localStorage.getItem('user_id') != null){
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
				var localStorageDataScript = document.createElement('script');
				localStorageDataScript.type = 'text/javascript';
				localStorageDataScript.src = "<script> localStorage.setItem('user_id'," + data + "); </script>";
				$("div#loginmsg").append(localStorageDataScript);
					
				checkCookie();
			});
 
	$("#loginform").submit( function() {
	   return false;	
	});
 
});

function isUser_id(string){
	return (string != "false");
}