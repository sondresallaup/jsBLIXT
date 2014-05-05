var currentUser = Parse.User.current();
var contactlist = Parse.Object.extend("Friends");
var friendQuery = new Parse.Query(contactlist);
        friendQuery.contains("from_user", currentUser.get("username"));
        friendQuery.find({
            success: function(friends){
                var htmlResult = "";
                for(x in friends){
                    htmlResult += '<a class="item item-avatar" href="#"><img src="../img/defaultprofilepic.jpg"><h2>';
                    htmlResult += friends[x].attributes.to_user;
                    htmlResult += "</h2><p>";/*
                    var friendString = "'" + friends[x].attributes.username + "'";
                    htmlResult += '<button onclick="addFriend(' + friendString + ');" class="button button-outline button-positive button-small">Legg til</button>';*/
                    htmlResult += "</p></a>";
                    //var friendString = "'" + friends[x].attributes.username + "'";
                    /*var addFriendButton = htmlResult + '<a href="#" onclick="addFriend(' + friendString + ');" class="btn btn-default btn-xs" role="button">Legg til kontakt</a>';
                    var deleteFriendButton = htmlResult + '<a href="#" onclick="deleteFriend(' + friendString + ');" class="btn btn-default btn-xs" role="button">Slett kontakt</a>';*/
                }
                
                $("div#contactlist").html(htmlResult);
                
                if(friends.length === 0){
                    $("div#contactlist").html("Legg til noen kontakter!");   
                }
                
            },
            error: function(){
            $("div#contactlist").html("Error:");
        }
        });


function printUsersNameByEmail(email){
    var getUserQuery = new Parse.Query(Parse.User);
    getUserQuery.equalTo("email",email);
    getUserQuery.find({
        success: function(){
               
            
        }
    });
}