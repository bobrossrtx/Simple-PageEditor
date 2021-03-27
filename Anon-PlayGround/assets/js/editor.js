// Editor
const editor = () => {

    // Declaration
    // The approach of declaring a variable without assigning can cause issues
    // and undesired results
    //
    // RESEARCH
    // What would the default value for a declared variable without any instantiation be? undefined
    //
    // The use of the var keyword is deprecated because of the possibility of hoisting,
    // so the modern approach is to use either let or const.
    //
    // HOISTING
    // Means that the javaScript engine will ignore the scope and hoist the variable to
    // the top of the scope so that it is in scope when it is required.  VERY BAD!!!
    //
    // Only use let when the contents of the variable is to be changed (mutable)
    // Only use const when the contents of the variable is not to be changed (immutable)
    //
    // Variable naming can be a real bone of contention so best to be concise and use a set
    // convention for naming from one of the following styles:
    //
    // Camel Case: htmlContent - Best practice
    // Pascal Case: HtmlContent
    // Snake Case: html_content
    //
    // All caps should be reserved for naming constants
    // var HTML_content;
    // var CSS_content;
    //
    // Assignment
    // HTML_content = document.getElementById("html").value;
    // CSS_content = document.getElementById("css").value;
    //
    // So for the purposes of this script const can be used

    // Because both these values are not going to change const can be used here
    const cssContent = document.getElementById("css").value;
    const htmlContent = document.getElementById("html").value;
    
    if (cssContent !== "") {
        output = (`
            <style>${cssContent}</style>
            ${htmlContent}
        `);
    } else {
        output = `${htmlContent}`
    }
    
    
    document.getElementById("canvas").innerHTML = output;
}

const editorJS = () => {
    // So you've defined this constant here but it isn't used and so can be removed
    // const test = document.getElementById("run").onclick

    // So I bet when you clicked the button, nothing happened and the browser appeared to crash
    // Let me explain:
    // You grab the contents of #js hered
    let jsContent = document.getElementById("js").value;

    // then you set a counter to 0.
    // Can you explain to me what you are trying to achieve with this counter?
    let jsCount = 0;
    // I was thinking, if I had appended a new script each time the run button was pressed, it would add 0, 1, 2, so on to the id of each script element which would run the code each time
    /* Eg.
        <script id="js0">New Code</script> <!-- Runs when run is clicked for 1st time -->
        <script id="js1">New Code</script> <!-- Runs when run is clicked for 2nd time -->
        <script id="js1">New Code</script> <!-- So on -->
    */

    // This condition will always evaluate to true because at this point
    // jsContent is just jsContent
    if (jsContent === jsContent) {

        // You alter the content of jsContent here to wrap what had been written
        // with a script tag.  But this is never used inside this condition and
        // so won't be evaluated at all
        jsContent = `<script id="js${jsCount}">${jsContent}</script>`;

        // This creates a script element.
        let script = document.createElement("script");

        // Here the id attribute will be #js0
        script.setAttribute('id', `js${jsCount}`)

        // You append the script tag to the DOM (Document Object Model) here
        document.body.appendChild(script);

        // This does nothing except throws an exception
        // Expression statement is not assignment or call
        // To explain:
        // document is defined as part of the standard library libDOM
        // getElementById is a method of document which will return a reference
        // to an element located within the DOM
        //
        // But here you are just making a reference to the method and not executing it.
        //
        // To execute the method you need to use the method correctly as you did with jsContent above

        // document.getElementById

        // This is your problem because you have setup a never ending loop
        // with no way to get out of it, so the minute the button is clicked
        // this loop is entered and jsCount continues to be incremented
        //
        // Think of it this way
        // Start Loop with condition
        //   - is the condition true: YES <---
        //   - increment counter             |
        //   - loop to condition -------------
        //
        // With no way of testing a value this will never stop executing
        // until the compiler panics
        while (true) {
            jsCount++;
        }
    }

}

/*
Story:
    If I'm a user, I want to be able to click run and the when the javascript is changed, it executes.
Problem:
    When I update the JS, it doesn't execute / work.
    Counter Method:
        Thrown into infinite loop
        Tried to make jsCount += 1 each time the run button was pushed
        JS output = (
            <script id="js0">Js code</script>
            <script id="js1">Js code</script>
            <script id="js2">Js code</script>
        )
Criteria:
    Users can input code/markup in the textarea inputs, and when ran, runs all input entered onto the canvas.
    Non counter method.
*/

/*
This is called an Immediately Invoked Function
 */
(() => {
    // So what you've done here is added an eventListener to the editor itself
    // this is unnecessary.
    // document.getElementById("run").addEventListener(
    //     "click",
    //     editor
    // ); 
    // I believe this is required since editor + editorJS are both separate functions

    // This is the correct way to add an eventListener, well done!
    document.getElementById("run").addEventListener(
        "click",
        editorJS // Problem here is, If I'm only running editorJS, it won't execute the editor function, which is for the HTML/CSS input
    );
    
})()
