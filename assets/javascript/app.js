/* Psuedo Code - Trivia Game

Page/Site Loads

Main content area shows Title and Start Button. 
    
    When Start Button is Clicked
        - Area where button was is cleared
        - Timer Appears at the top of the page & starts counting down
        - Questions are Loaded to the Page w/ Answers underneath as Radio Buttons.
        - Done Button is loaded to the bottom of the page 

    While answering questions:
        - Correct Answers are Recorded
        - Wrong Answers are Recorded
        - Unanswered questions are Recorded

    If Timer Hits Zero:
        - Questions & Done button are cleared
        - Displays "All Done" Message
        - Shows Correct, Wrong, and Unanswered count 

    If Done Button is Clicked:
        - Questions & Done button are cleared
        - Display "All Done" Message
        - Show Correct, Wrong, and Unanswered count. 

        ----- Ignore This Object. Started with it, but then decided to hard code in html instead ------
        var questionsObj = {
    trivQuestions: [
        {quest: "Who wore #33 for the Celtics?", answer1: "Larry Bird", answer2: "Paul Pierce", answer3: "Walter McCarty", answer4: "Jason Tatum"},
        {quest: "The Celtics have how many NBA Championships?", answer1: "11", answer2: "19", answer3: "17", answer4: "14"},
        {quest: "'The Hit Dog' is the nickname for whom?", answer1: "David Ortiz", answer2: "Mo Vaughn", answer3: "John Olerud", answer4: "Nomar Garciapara"},
        {quest: "Name the Traitor", answer1: "Rajon Rondo", answer2: "Kevin Garnett", answer3: "Avery Bradley", answer4: "Ray Allen"},
        {quest: "In the 1997 NBA Draft, the Celtics selected who with their first pick?", answer1: "Chauncey Billups", answer2: "Tony Battie", answer3: "Ron Mercer", answer4: "Kenny Anderson"},
    ]
}

*/

$(document).ready(function () {

    var correctAnswers = 0;
    var wrongAnswers = 0;
    var unAnswered = 0
    var timeLeft = 31;
    var timerCount;

    // Better to hard code questions in HTML then hide section with css attribute?
    // Reference later: https://stackoverflow.com/questions/3269136/how-to-add-style-displayblock-to-an-element-using-jquery


    // --------- On Start Button Click Function -----------
    $("#button-start").on("click", function () {
        $("#start-section").empty();
        $("#game-section").show();
        $("#game-rules").empty();
        timerCount = setInterval(countdown, 1000);
        countdown();

    })

    // --------- On Done Button Click Function -----------
    $("#button-done").on("click", function () {
        $("#results-section").show();
        $("#game-section").hide();
        checkAnswers();
        checkUnAnswered();
        $("#numCorrect").text(correctAnswers);
        $("#numWrong").text(wrongAnswers);
    })


    // -------------- Countdown Function ----------
    function countdown() {
        if (timeLeft === 0) {
            clearTimeout(timerCount);
            $("#game-section").hide();
            $("#results-section").show();
            checkAnswers();
            checkUnAnswered();
            $("#numCorrect").text(correctAnswers);
            $("#numWrong").text(wrongAnswers);
        } else {
            timeLeft--;
            $("#countdown").text(timeLeft);
        }

        // -------------------- Changes Countdown Box Color At & Under 10 Seconds------
        if (timeLeft <= 10){
            $("div#timer").attr({class: "timerWarning"});
        }

    }

    // --------------- Check Answers Function -------

    function checkAnswers() {

        for (var i = 1; i <= 5; i++) {
            var radios = document.getElementsByName('answer' + i);
            for (var j = 0; j < radios.length; j++) {
                var checkedRadios = radios[j];
                if (checkedRadios.value === "correct" && checkedRadios.checked) {
                    correctAnswers++;
                } else if (checkedRadios.value === "wrong" && checkedRadios.checked) {
                    wrongAnswers++;
                }
            }
        }
    }

    // ------------------ Calculates Unanswered questions ------- 
    function checkUnAnswered (){
        unAnswered = 5 - (correctAnswers + wrongAnswers);
        $("#numUnAns").text(unAnswered);
    }
});