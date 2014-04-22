Parse.initialize("Gy5zoQPReNBVWCK3JP9EUSnFpBAlmeSfg5deDtCq", "eYfKlYkY777qlJg0eMUqtUQYmXF5tlqs6uUlbhug");

$("button#submit").click( function() {
  if( $("#friend").val() == "")
    $("div#searchResult").html('<font color="red">Vennligst skriv noe');
 
	else{
        var friendQuery = new Parse.Query(Parse.User);
        friendQuery.contains("canonicalName", $("#friend").val().toLocaleLowerCase());
        friendQuery.find({
            success: function(friends){
                var htmlResult = "";
                for(x in friends){
                    htmlResult += friends[x].attributes.name;
                    htmlResult += "<br>";
                }
                $("div#searchResult").html(htmlResult);
                
                if(friends.length === 0){
                    $("div#searchResult").html("Fant ingen samsvar");   
                }
                
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