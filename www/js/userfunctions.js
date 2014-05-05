Parse.initialize("Gy5zoQPReNBVWCK3JP9EUSnFpBAlmeSfg5deDtCq", "eYfKlYkY777qlJg0eMUqtUQYmXF5tlqs6uUlbhug");

function checkIfLoggedIn(){
	var currentUser = Parse.User.current();
	if(!currentUser){
		window.location = ('../index.html');
	}
}

function getCurrentUser(){
    var currentUser = Parse.User.current();
    return currentUser;
}

