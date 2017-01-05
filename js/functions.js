/* exported Functions */

var Functions = (function () {
    return {
        // Create and return a header
        // Param "text": Title text
        "getHeader": function (text) {
            var div, // Header container
                h1,  // Header
                hr;  // Line to denote end of header
                
            h1 = document.createElement("h1");
            h1.innerHTML = text;
            
            hr = document.createElement("hr");
            
            div = document.createElement("div");
            div.appendChild(h1);
            div.appendChild(hr);
            
            return div;
        },
        // Create and return a button intended for the tests introduction page
        // param "init": Function to run when the button is clicked
        "getStartButton": function (init) {
            var button = document.createElement("button");
            button.innerHTML = "Start the test ➜";
            button.className = "advanceBtn";
            button.addEventListener("click", function () {
                init();
            });
            
            return button;
        },
        // Print an introduction page 
        // param "header": Div node containing a h1 and hr
        // param "text":   String to print 
        "printIntro": function (header, text, button) {
            var content,   // Main container
                div,       // Header container
                introText; // P node containing the intro text
                
            content = document.getElementById("content");
            div = document.createElement("div");
            div.style.width = "450px";
            
            introText = document.createElement("p");
            introText.innerHTML = text;
            
            // Put all elements in container
            div.appendChild(header);
            div.appendChild(introText);
            div.appendChild(button);
            
            // Clear page
            content.innerHTML = "";
            
            // Fill page            
            content.appendChild(div);
        }
    };
})();