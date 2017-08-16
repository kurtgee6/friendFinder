$(document).ready(function () {
    //on click listener for when submit button is clicked
    $("#submitButton").click(function () {
        //emptyUserArr
        var emptyUserArr = [];
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

        //questionObject push into emptyUserArr array 
        emptyUserArr.push(questionObject);

        //check user information in console
        console.log("NEW USER INFORMATION");
        console.log(emptyUserArr);
    });
});


//create a check function
//if user is similar to the another user
//modal pops up and user info is displayed.
