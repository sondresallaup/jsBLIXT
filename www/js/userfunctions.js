function checkIfLoggedIn(){
	if(localStorage.getItem('user_id') == "" || localStorage.getItem('user_id') == null || localStorage.getItem('user_id') == "false"){
		window.location = ('../index.html');
	}
}