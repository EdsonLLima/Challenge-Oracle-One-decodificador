let buttonCopy = document.getElementById("button-copy");

buttonCopy.addEventListener("click", (event) => {
  event.preventDefault();
  copyText();
  inputText.focus;
});

function copyText() {
  let copy = navigator.clipboard.writeText(msgEncript.value);
  if (msgEncript.value == "") {
    alert("Impossivel copiar! A caixa de texto está vazia!");
  } else {
    copy;
    msgEncript.value = "";
  }
}
