// Editor
var editor = () => {
    var HTML_content;
    var CSS_content;

    HTML_content = document.getElementById("html").value;
    CSS_content = document.getElementById("css").value;

    return(`
        <style>${CSS_content}</style>
        ${HTML_content}
    `);
}


document.getElementById("canvas").innerHTML = editor();

var JS_content;
JS_content = document.getElementById("js").value;
document.getElementById("JS_content").innerHTML = JS_content;