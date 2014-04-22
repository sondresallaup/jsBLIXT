Parse.initialize("Gy5zoQPReNBVWCK3JP9EUSnFpBAlmeSfg5deDtCq", "eYfKlYkY777qlJg0eMUqtUQYmXF5tlqs6uUlbhug");

$("button#submit").click( function() {
  if( $("#friend").val() == "")
    $("div#searchResult").html('<font color="red">Vennligst skriv noe');
 
	else{
        var friendQuery = new Parse.Query(Parse.User);
        friendQuery.equalTo("name", $("#friend").val());
        friendQuery.find({
            success: function(friends){
                $("div#searchResult").html(this.get("name"));
            },
            error: function(){
            $("div#searchResult").html("Error:");
        }
        });
        
        
		
	}

 
	$("#friendsForm").submit( function() {
	   return false;	
	});
 
});