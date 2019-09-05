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

*/

$(document).ready(function() {

var correctAnswers = 0;
var wrongAnswers = 0;
var unAnswered = 0

var questionsObj = {
    trivQuestions: [
        {quest: "Who wore #33 for the Celtics?", answer1: "Larry Bird", answer2: "Paul Pierce", answer3: "Walter McCarty", answer4: "Jason Tatum"},
        {quest: "The Celtics Have How Many NBA Championships?", answer1: "11", answer2: "19", answer3: "17", answer4: "14"},
        {quest: "'The Hit Dog' is the nickname for whom?", answer1: "David Ortiz", answer2: "Mo Vaughn", answer3: "John Olerud", answer4: "Nomar Garciapara"},
    ]
}

console.log(questionsObj.trivQuestions[0].quest);









});