/* globals Test, Functions */
/* exported Quiz */

// First test for the Intelligence Test
var Quiz = (function() {
    var content = document.getElementById("content"),
        question = document.createElement("P"),
        choices = document.createElement("div"),
        startBtn = document.createElement("button"),
        choiceList = [], 
        testScore, resultBox, questionNr, correctAnswer, i;
        
        
    // Contains all questions, and their respective choices and answers
    var register = [
        {
        "question": "What is blue and smells like red paint?",
        "choices": ["The sky", "Blue paint", "A sapphire"],
        "answer": 1
        },
        {
        "question": "What is the solution to this equation?<br>2(30+5)(4x0) = ?",
        "choices": ["70", "280", "0"],
        "answer": 2
        },
        {
        "question": "What is the sixth month after April called?",
        "choices": ["October", "November", "September"],
        "answer": 0
        }
    ];
    
    
    // Create and set properties for the "choice" buttons
    for (i = 0; i < 3; i += 1) {
        var choice = document.createElement("button");
        choice.className = "choice clickable";
        choice.id = i;
        choice.addEventListener("click", choiceClickEvent);
        
        choices.appendChild(choice);
        choiceList.push(choice);
    }
    
    // Set properties for the button on the introduction page
    startBtn.innerHTML = "Start Test";
    startBtn.className = "advanceBtn";
    startBtn.addEventListener("click", function () {
        init();
    });
    
    
    /* Functions */
        
    // Sets the currently relevant question, choices and correct answer
    function setup() {
        var currQuestion = register[questionNr];
        
        question.innerHTML = "<b>Question " + (questionNr + 1) + "/3:</b><br>" + currQuestion.question;
        choiceList[0].innerHTML = "1. " + currQuestion.choices[0];
        choiceList[1].innerHTML = "X. " + currQuestion.choices[1];
        choiceList[2].innerHTML = "2. " + currQuestion.choices[2];
        correctAnswer = currQuestion.answer;
    }
    
    // Enables all choice buttons
    function enableChoiceButtons() {
        for (i = 0; i < 3; i += 1) {
            choiceList[i].addEventListener("click", choiceClickEvent);
            choiceList[i].classList.remove("clicked");
            choiceList[i].classList.toggle("clickable", true);
        }
    }
        
    // Initiates the quiz
    function init() {
        testScore = 0;
        
        // Re-enable buttons, in case of reset
        enableChoiceButtons();
        
        // Sets the quiz to the first question
        questionNr = 0;
        setup();
        
        // Clear page and fill it with the elements needed for the quiz
        content.innerHTML = "<h1>Test 1 - Quiz</h1><hr>";
        content.appendChild(question);
        content.appendChild(choices);
    }
    
    function nextBtnClickEvent() {
        // Remove resultBox
        content.removeChild(resultBox);
        
        // Re-enable buttons
        enableChoiceButtons();
        
        // Set next question
        questionNr += 1;
        setup();
    }
    
    // Click event for choice buttons
    function choiceClickEvent(e) {
        var playersChoice = parseInt(e.target.id),
            resultText = document.createElement("p"),
            nextBtn = document.createElement("button"),
            img = document.createElement("img");
            
        resultBox = document.createElement("div");
            
        // Add style
        resultBox.className = "resultBox";
        img.className = "icon";
            
        // Set properties for button which will take the user to the next question
        nextBtn.className = "advanceBtn";
        nextBtn.innerHTML = "Next question ➜";
        nextBtn.addEventListener("click", nextBtnClickEvent);
            
        
        // Change style of the clicked button
        e.target.classList.add("clicked");
        
        // Disable buttons
        for (i = 0; i < 3; i += 1) {
            choiceList[i].removeEventListener("click", choiceClickEvent);
            choiceList[i].classList.remove("clickable");
        }
        
        // Check and set result
        if (playersChoice === correctAnswer) {
            testScore += 3;
            
            img.src = "images/greenCheck.png";
            resultText.innerHTML = "";
        } else {
            img.src = "images/redCross.png";
            resultText.innerHTML = "The correct answer was: " + register[questionNr].choices[correctAnswer];
        }
        
        // Add elements to the resultBox, which will show the user whether he was correct or not, 
        // along with a button to take the user to the next question
        resultBox.appendChild(img);
        resultBox.appendChild(resultText);
        
        // Check if there are any more questions
        if (questionNr !== 2) {
            // Button proceeds to next question
            resultBox.appendChild(nextBtn);
        } else {
            // Get button from the main Test module, which leads to the next test
            resultBox.appendChild(Test.getNextButton("FizzBuzz"));
        }
        
        // Add to content
        content.appendChild(resultBox);
    }
    
    return {
        "printIntro": function () {
            var header = Functions.getHeader("Test 1 - Quiz");
            var introText = (
                "In this test you will be asked a question, to which you will be given three " +
                "options to answer with.<br>" +
                "After you've made your choice you will see your result and the correct answer " +
                "if you chose wrong. Then you can go on to the next question.<br>"
            );
            var startBtn = Functions.getStartButton(init);
            
            // Prints the introduction page for this test
            Functions.printIntro(header, introText, startBtn);
        },
        "testScore": function () {
            return testScore;
        }
    };
})();