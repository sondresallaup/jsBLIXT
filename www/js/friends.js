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
                    htmlResult += '<a class="item item-avatar" href="#"><img src="../img/defaultprofilepic.jpg"><h2>';
                    htmlResult += friends[x].attributes.name;
                    htmlResult += "</h2><p>";
                    htmlResult += friends[x].attributes.username;
                    htmlResult += "</p></a>";
                    //var friendString = "'" + friends[x].attributes.username + "'";
                    /*var addFriendButton = htmlResult + '<a href="#" onclick="addFriend(' + friendString + ');" class="btn btn-default btn-xs" role="button">Legg til kontakt</a>';
                    var deleteFriendButton = htmlResult + '<a href="#" onclick="deleteFriend(' + friendString + ');" class="btn btn-default btn-xs" role="button">Slett kontakt</a>';*/
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

function isFriends(to_user){
    var Friends = Parse.Object.extend("Friends");
    var query = new Parse.Query(Friends);
    var numberFriends = 0;
     var from_user = getCurrentUser().get("username");
    query.equalTo("from_user", from_user);
    query.equalTo("to_user", to_user);
    query.find({
        success: function(result){
            numberFriends = result.length;
            console.log(numberFriends);
        }
    });
    console.log(numberFriends);
    return (numberFriends > 0);
}


function addFriend(to_user){
        var ParseFriends = Parse.Object.extend("Friends");
        var parseFriends = new ParseFriends();
        var from_user = getCurrentUser().get("username");
        parseFriends.set("from_user", from_user);
        parseFriends.set("to_user", to_user);

        parseFriends.save(null, {
            success: function(parseFriends) {
                alert("Kontakt lagt til");   
            },
            error: function(parseFriends, error) {
                alert(error);   
            }
        });
    
}
    
function deleteFriend(to_user){
    var Friends = Parse.Object.extend("Friends");
    var query = new Parse.Query(Friends);
     var from_user = getCurrentUser().get("username");
    query.equalTo("from_user", from_user);
    query.equalTo("to_user", to_user);
    query.first({
        success: function(object){
            object.destroy({
                success: function(delObject){
                    alert("Kontakt slettet");
                },
                error: function(delObject, error){
                    alert(error);   
                }
            });
        }
    });
    console.log(numberFriends);
    return (numberFriends > 0);
}

function printContactList(){
    var Friends = Parse.Object.extend("Friends");
    var friendsQuery = new Parse.Query(Friends);
    var user = getCurrentUser().get("username");
    var contactListHtml;
    friendsQuery.equalTo("from_user", user);
    friendsQuery.find({
        success: function(results){
            
        },
        error: function(results, error){
            alert(error);
        }
        
    });
}
