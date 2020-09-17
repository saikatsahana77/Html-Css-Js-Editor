document.getElementById("import-btn").addEventListener("change", function () {
  window.editor = ace.edit("editor");
  var fr = new FileReader();
  fr.onload = function () {
    var k = fr.result;
    editor.setValue(k, 1);
  };

  fr.readAsText(this.files[0]);
});
