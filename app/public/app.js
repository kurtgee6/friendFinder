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

        console.log("DATABASE INFORMATION");


        //post to the friends table "/api/friends"
        currentURL;

        //posting to /api/friends 
        $.post(currentURL + "/api/friends", questionObject, function (data) {
            runFriendsData();
            return true;
        });

        //displayed in the modal
        $("#friendName").text(questionObject.name);
        $("#friendImage").attr("src", questionObject.image);

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
                console.log("------------------------------------");
            });
    }

});
