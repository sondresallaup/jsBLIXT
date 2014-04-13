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
				if(data.sucess){
			  		localStorage.setItem('user_id', data.success);
			  		checkCookie();
			  	}
			  	else{
		  			$("div#loginmsg").html(data);
			  	}
			},'json');
 
	$("#loginform").submit( function() {
	   return false;	
	});
 
});

function isUser_id(string){
	return (string != false);
}