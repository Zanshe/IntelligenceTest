/* globals Test, Functions */
/* exported Memory */

// First test for the Intelligence Test
var Memory = (function () {
    var header; // Header for the test 
    
    header = Functions.getHeader("Memory");
    
    
    // Initiates the test
    function init() {
        
    }
    
    // The user interface which will be returned to FizzBuzz
    var memory = {
        // Prints the introduction page for this test
        "printIntro": function () { 
            var introText = "Test 3 intro placeholder";
            var startBtn = Functions.getStartButton(init);
            
            Functions.printIntro(header, introText, startBtn);
        },
        "getTestScore": function () {
            return testScore;
        }
    };
    return memory;
})();