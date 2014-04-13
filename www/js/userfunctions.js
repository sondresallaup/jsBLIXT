function checkIfLoggedIn(){
	if(localStorage.getItem('user_id') == "" || localStorage.getItem('user_id') == null){
		window.location = ('../index.html');
	}
}