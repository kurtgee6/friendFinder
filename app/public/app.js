var currentURL = window.location.origin;

$(document).ready(function () {
    //on click listener for when submit button is clicked
    $("#submitButton").click(function () {
        //user input name value
        var name = $('#name').val().trim();
        //user input image value
        var image = $('#image').val().trim();

        //user input question values
        var valQues1 = $('#q1').val();
        var valQues2 = $('#q2').val();
        var valQues3 = $('#q3').val();
        var valQues4 = $('#q4').val();
        var valQues5 = $('#q5').val();
        var valQues6 = $('#q6').val();
        var valQues7 = $('#q7').val();
        var valQues8 = $('#q8').val();
        var valQues9 = $('#q9').val();
        var valQues10 = $('#q10').val();

        //values declared again inside questionObject
        var questionObject = {
            name: name,
            image: image,
            scores: [parseInt(valQues1),
            parseInt(valQues2),
            parseInt(valQues3),
            parseInt(valQues4),
            parseInt(valQues5),
            parseInt(valQues6),
            parseInt(valQues7),
            parseInt(valQues8),
            parseInt(valQues9),
            parseInt(valQues10)]
        }


        //check user information in console
        console.log("NEW USER INFORMATION");
        console.log(questionObject);
        console.log("\n");

        //gets a total sum of the users input array
        var sumUser = questionObject.scores;

        console.log(sumUser.reduce(function (prev, cur) {
            return prev + cur;
        }));

        console.log("\n");
        console.log("DATABASE INFORMATION");


        //post to the friends table "/api/friends"
        currentURL;

        //posting to /api/friends 
        $.post(currentURL + "/api/friends", questionObject, function (data) {
            runFriendsData();
            return true;
        });

    });

    //function that grabs friends data 
    function runFriendsData() {
        //current URL
        currentURL;

        //AJAX call to grab data
        $.ajax({
                url: currentURL + "/api/friends/",
                method: "GET"
            })
            .done(function (friends) {
                console.log("------------------------------------");
                console.log("URL: " + currentURL + "/api/friends");
                console.log("------------------------------------");
                console.log(friends);
                
                //empty Array
                var emptyArr = [];
            
                //for loop to loop through friends array
                 for (var i = 0; i < friends.length; i++) {
                    //push into empty array
                    emptyArr.push(friends[i]);

                    };
            
                    //getting random person from data 
                    var rand = emptyArr[Math.floor(Math.random() * emptyArr.length)];
            
                    //pulling data from rand and setting to new variables
                    var oldUser = rand.name;
                    var oldPhoto = rand.image;
                    
                    //displaying to modal once button is clicked
                    $("#friendName").text(oldUser);
                    $("#friendImage").attr("src", oldPhoto);
                        
        });
    };

});



//the final step I need to create is a comparison function
//the function is supposed to compare users input from data stored in friend.js
//end result of that function is to display the compatibility inside the modal
