// Editor
const editor = () => {

    // Declaration
    // The approach of declaring a variable without assigning can cause issues
    // and undesired results
    //
    // RESEARCH FOR YOU
    // What would the default value for a declared variable without any instantiation be?
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

    // EXERCISE
    // Add a button to this page that updates the output with the HTML content
    // You will need to do some research into what an event listener is and try
    // and hook into the CLICK event.

    // return(`
    //     <style>${cssContent}</style>
    //     ${htmlContent}
    // `);
}

/*
This is called an Immediately Invoked Function
 */
(() => {
    document.getElementById("canvas").innerHTML = editor();

    /* This variable is not necessary because the document call directly */
    const jsContent = document.getElementById("js").value;
    document.getElementById("js").innerHTML = jsContent;
})()
