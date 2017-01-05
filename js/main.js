/* globals Quiz, FizzBuzz, Memory, Functions*/
/* exported Test */

// Main module
var Test = (function () {
    var content,       // Main container
        header,        // Header for the front page
        text,          // Text for the front page
        nextBtn,       // Button which takes the user to the first test
        currentTestNr, // Int number stating which test is currently being run
        currentTest;   // Alias for the module containing the current test
    
    // Sets currentTest to the currently relevant module(test).
    function getTest() {
        switch (currentTestNr) {
        case 0:
            currentTest = Quiz;
            break;
        case 1:
            currentTest = Quiz;
            break;
        case 2:
            currentTest = FizzBuzz;
            break;
        case 3:
            currentTest = Memory;
            break;
        case 4:
            currentTest = "test 4 placehold";
            break;
        case 5:
            currentTest = "test 5 placehold";
            break;
        }
    }
    
    // Set values to variables
    content = document.getElementById("content");
    header = Functions.getHeader("Welcome!");
    currentTestNr = 0;
    text = (
        "Intro placeholder"
    );
    
    // Set properties for the "next"-button, which will move the user between each test
    nextBtn = document.createElement("button");
    nextBtn.innerHTML = "Go to the first test ➜";
    nextBtn.className = "advanceBtn";
    nextBtn.addEventListener("click", function () {
        // Set currentTest
        currentTestNr += 1;
        getTest();
        
        // Calls the test to print its introduction page
        currentTest.printIntro();
    });
    
    Functions.printIntro(header, text, nextBtn);
    
    
    // Log instructions to console
    console.log(
        "Test module is now ready for use.\n" +
        "Test.reset() to reset the current test and go back to it's introduction page.\n" +
        "Test.goTo('testname') to go directly to a specific test. Tests available are: Quiz, FizzBuzz, Memory, Ability, Perception"
    )
    
    return {
        "getNextButton": function (testName) {
            nextBtn.innerHTML = "Proceed to the " + testName + " test ➜";
            
            return nextBtn;
        },
        "reset": function () {
            // Go back to the introduction page for the current test
            currentTest.printIntro();
        },
        // Start a specific test
        // param "test": Name of the test
        "goTo": function (test) {
            switch (test.toLowerCase()) {
            case "quiz": 
                currentTestNr = 1;
                break;
            case "fizzbuzz": 
                currentTestNr = 2;
                break;
            case "memory": 
                currentTestNr = 3;
                break;
            case "perception": 
                currentTestNr = 4;
                break;
            case "ability": 
                currentTestNr = 5;
                break;
            }
            
            getTest();
            currentTest.printIntro();
        }
    };
})();