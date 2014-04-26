var currentUser = Parse.User.current();

function getInputValues() {
    var editProfileForm = document.forms['editProfileForm'];
    editProfileForm.elements["name"].value = currentUser.get("name");
    editProfileForm.elements["adress"].value = currentUser.get("adressStreet");
    editProfileForm.elements["zip_number"].value = currentUser.get("adressZip");
    editProfileForm.elements["email"].value = currentUser.get("email");
}

$("button#submit").click( function() {
    document.getElementById("okButton").innerHTML='<i class="icon ion-loading-c"></i>';
  if( $("#email").val() == "" || $("#name").val() == "" || $("#zip_number").val() == "" || $("#adress").val() == ""){
      document.getElementById("okButton").innerHTML='OK';
    $("div#registermsg").html('<font color="red">Vennligst fyll ut alle feilt');}

	else{
        currentUser.save(null, {
          success: function(currentUser) {
              
             currentUser.set("username", $("#email").val());
        currentUser.set("name", $("#name").val());

        currentUser.set("canonicalName", $("#name").val().toLowerCase());

        currentUser.set("email", $("#email").val());
        currentUser.set("adressStreet", $("#adress").val());
        currentUser.set("adressZip", $("#zip_number").val());
        currentUser.set("adressCountry", "NO");
        currentUser.save();
            document.getElementById("okButton").innerHTML='OK';
          $("div#registermsg").html("<font color='green'>Endringene er gjennomført!");
          },
          error: function(user, error) {
            // TODO: feilmelding basert på error.code
            $("div#registermsg").html("Error: " + error.code + " " + error.message);
          }
        });

	}

 
	$("#editProfileForm").submit( function() {
	   return false;	
	});
 
});