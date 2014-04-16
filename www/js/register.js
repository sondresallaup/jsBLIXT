$("button#submit").click( function() {
  if( $("#username").val() == "" || $("#password").val() == "" || $("#repeatPassword").val() == "" || $("#name").val() == "" || $("#zip_number").val() == "" || $("#adress").val() == "" )
    $("div#registermsg").html('<font color="red">Vennligst fyll ut alle feilt');
  else
    $.post( $("#registerform").attr("action"),
	        $("#registerform :input").serializeArray(),
			function(data) {
					if(isNormalInteger(data)){
						localStorage.setItem('user_id', data);
						window.location = ('main.html');
					}
					else{
						$("div#registermsg").html(data);
					}
				

			});
 
	$("#registerform").submit( function() {
	   return false;	
	});
 
});

// http://stackoverflow.com/questions/10834796/validate-that-a-string-is-a-positive-integer
function isNormalInteger(str) {
    var n = ~~Number(str);
    return String(n) === str && n >= 0;
}