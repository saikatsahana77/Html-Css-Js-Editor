function fn2() {
  if (document.getElementById("chkbox").checked) {
    window.editor = ace.edit("editor");
    editor.setOptions({
      showLineNumbers: true,
      showGutter: true,
    });
  } else {
    window.editor = ace.edit("editor");
    editor.setOptions({
      showLineNumbers: false,
      showGutter: false,
    });
  }
}
