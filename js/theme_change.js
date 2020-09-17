function fn() {
  if (document.getElementById("toggle").checked) {
    var element = document.getElementById("editor");
    element.classList.remove("color-inv");
  } else {
    var element = document.getElementById("editor");
    element.classList.add("color-inv");
  }
}
