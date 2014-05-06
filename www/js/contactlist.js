$("div#contactlist").html('<font size="10"><i class="icon ion-loading-c"></i></font>');

function printUsersNameByEmail(email) {
    var returnValue = "";
    var getUserQuery = new Parse.Query(Parse.User);
    getUserQuery.equalTo("username", email);
    getUserQuery.find({
        success: function test(contact) {
            return "foo bar ";
             returnValue += '<a class="item item-avatar" href="#"><img src="../img/defaultprofilepic.jpg"><h2>';
                    //returnValue += contact.attributes.name;
                    //returnValue += contact.get("name");
                    returnValue += "</h2><p>";
                     returnValue += "</p></a>";
            
                     return returnValue;
            
        },
            error: function(){
            return "error";
        }
    });
    return test;
}

var currentUser = Parse.User.current();
var contactlist = Parse.Object.extend("Friends");
var friendQuery = new Parse.Query(contactlist);
        friendQuery.contains("from_user", currentUser.get("username"));
        friendQuery.find({
            success: function(friends){
                var htmlResult = "";
                for(x in friends){
                    var email = friends[x].attributes.to_user;
                    var returnValue = "";
                    var getUserQuery = new Parse.Query(Parse.User);
                    getUserQuery.equalTo("username", email);
                    getUserQuery.find({
                        success: function (contact) {
                             returnValue += '<a class="item item-avatar" href="#"><img src="../img/defaultprofilepic.jpg"><h2>';
                                    returnValue += contact[0].get("name");
                                    returnValue += "</h2><p>";
                                     returnValue += "</p></a>";

                                     htmlResult =  returnValue;
                            
                            $("div#contactlist").html(htmlResult);

                        },
                            error: function(){
                            return "error";
                        }
                    });    
                    
                }
                
                if(friends.length === 0){
                    $("div#contactlist").html("Legg til noen kontakter!");   
                }
                
            },
            error: function(){
            $("div#contactlist").html("Error:");
        }
        });


