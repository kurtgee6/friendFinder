$(document).ready(function () {
    //on click listener for when submit button is clicked
    $("#submitButton").click(function () {
        var emptyUserArr = [];
        //user input name value
        var name = $('#name').val().trim();
        //user input image value
        var image = $('#image').attr('src');

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

        //question values pushed into object
        var questionObject = {
            question1: parseInt(valQues1),
            question2: parseInt(valQues2),
            question3: parseInt(valQues3),
            question4: parseInt(valQues4),
            question5: parseInt(valQues5),
            question6: parseInt(valQues6),
            question7: parseInt(valQues7),
            question8: parseInt(valQues8),
            question9: parseInt(valQues9),
            question10: parseInt(valQues10)
        }

        emptyUserArr.push(name);
        emptyUserArr.push(image);
        emptyUserArr.push(questionObject);

        //        //console log 
        console.log(emptyUserArr); //        console.log("My name is: " + name);
        //        console.log("My image is: " + image);
        //        console.log(questionObject);
    });
});


//push values into empty array
