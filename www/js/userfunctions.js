function checkIfLoggedIn(){
	if(getLoggedInUsers_id() == "" || getLoggedInUsers_id() == null){
		window.location = ('../index.html');
	}
}

function getLoggedInUsers_id(){
	$.get( "http://sondresallaup.com/ikea/jsBLIXT/functions/getLoggedInUsers_id.php", function( data ) {
  		return data;
	});
}