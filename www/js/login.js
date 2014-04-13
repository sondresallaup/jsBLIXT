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
			  localStorage.setItem('user_id', data);
			  $("div#loginmsg").html(localStorage.getItem('user_id'));
			});
 
	$("#loginform").submit( function() {
	   return false;	
	});
 
});