/* globals Test, Functions */
/* exported FizzBuzz */

// First test for the Intelligence Test
var FizzBuzz = (function () {
    var content,     // Main container, all things will be placed within this
        choiceList,  // Array containing each choice button node
        testScore,   // Amount of points the player has achieved
        header,      // Header for this test
        i;           // Iterator
    
    content = document.getElementById("content");
    header = Functions.getHeader("Test 2 - FizzBuzz");
    
    // Function to run when a choice button is clicked
    function choiceClickEvent() {
        var yourBut, // The correct answer to this test
            usersChoice,   // The users choice
            resultBox,     // Div containing img and resultText
            img,           // Result image
            resultText;    // Result text
            
        
        yourBut = "2";
        usersChoice = this.id;
        
        resultBox = document.createElement("div");
        resultBox.className = "resultBox";
        
        img = document.createElement("img");
        img.className = "icon";
        
        resultText = document.createElement("p");
            
        // Mark the button that was clicked
        this.classList.add("clicked");
        
        // Disable all buttons
        for (i = 0; i < choiceList.length; i += 1) {
            choiceList[i].classList.remove("clickable");
            choiceList[i].removeEventListener("click", choiceClickEvent);
        }
        
        // Check and set result
        if (usersChoice === yourBut) {
            testScore = 3;
            
            img.src = "images/greenCheck.png";
            resultText.innerHTML = "";
        } else {
            img.src = "images/redCross.png";
            resultText.innerHTML = "The correct answer was: 16";
        }
        
        // Fill resultBox
        resultBox.appendChild(img);
        resultBox.appendChild(resultText);
        resultBox.appendChild(Test.getNextButton("Memory"));
        
        // Add to content
        content.appendChild(resultBox);
    }
    
    // Initiate the test
    function init() {
        var question,     // Paragraph containing this tests question
            choices,      // List of text for each choice button
            choice,       // Choice button
            fizzSequence; // Array containing the fizzbuzz sequence
        
        // Set default values for variables
        fizzSequence = ["Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz", "?"];
        question = document.createElement("p");
        
        // The "\xa0\xa0" represents two blank spaces
        question.innerHTML = fizzSequence.join("\xa0\xa0");
        testScore = 0;
        
        choices = [
            "Fizz", 
            "Buzz", 
            "16", 
            "FizzBuzz"
        ];
        choiceList = [];
        
        for (i = 0; i < choices.length; i += 1) {
            choice = document.createElement("button");
            choice.id = i;
            choice.className = "choice clickable";
            choice.style.width = "25%";
            choice.innerHTML = choices[i];
            choice.addEventListener("click", choiceClickEvent);
            
            choiceList.push(choice);
        }
        
        // Clear page
        content.innerHTML = "";
        
        // Fill page
        content.appendChild(header);
        content.appendChild(question);
        
        for (i = 0; i < choices.length; i += 1) {
            content.appendChild(choiceList[i]);
        }
    }
    
    
    // The user interface which will be returned to FizzBuzz
    var fizzbuzz = {
        // Prints the introduction page for this test
        "printIntro": function () { 
            var introText = (
                "This test is much like the last one, but instead of a question " + 
                "you will be shown a sequence of numbers and words.<br>Your goal is " +
                "to figure out which of the four options should come next."
            );
            var startBtn = Functions.getStartButton(init);
            
            Functions.printIntro(header, introText, startBtn);
        },
        "getTestScore": function () {
            return testScore;
        }
    };
    return fizzbuzz;
})();
