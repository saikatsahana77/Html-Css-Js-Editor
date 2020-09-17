function download(filename, text) {
  var element = document.createElement("a");
  element.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(text)
  );
  element.setAttribute("download", filename);

  element.style.display = "none";
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

function fn4() {
  window.editor = ace.edit("editor");
  var k = editor.getValue();
  swal({
    title: "Save File As: ",
    text: "Enter the File Name (without .html)",
    content: "input",
    buttons: {
      cancel: true,
      confirm: "Submit",
    },
  }).then((value) => {
    if (value) {
      var value1 = value + ".html";
      download(value1, k);
      swal({
        title: "Thank You",
        text: "Yor File Will Be Downloaded Soon",
        icon: "success",
      });
    } else {
      swal({
        title: "Oops",
        text: "Please Enter a Valid File Name",
        icon: "error",
      });
    }
  });
}
