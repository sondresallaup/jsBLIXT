Parse.initialize("Gy5zoQPReNBVWCK3JP9EUSnFpBAlmeSfg5deDtCq", "eYfKlYkY777qlJg0eMUqtUQYmXF5tlqs6uUlbhug");

function checkIfLoggedIn(){
	var currentUser = Parse.User.current();
	if(!currentUser){
		window.location = ('../index.html');
	}
}

function getLoggedInUsers_id(){
	$.get( "http://sondresallaup.com/ikea/jsBLIXT/functions/getLoggedInUsers_id.php", function( data ) {
  		return data;
	});
}