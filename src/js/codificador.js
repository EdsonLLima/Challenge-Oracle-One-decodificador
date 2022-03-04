let inputText = document.getElementById("input-text");
inputText.focus();

let msgEncript = document.getElementById("msg");

let buttonEncrypt = document.getElementById("button-encrypt");

buttonEncrypt.addEventListener("click", (event) => {
  event.preventDefault();
  encryptLetters(); //Criptografa as letras
  cleaningInput();
});

let encryptLetters = () => {
  //recebe conteudo do input e convert as vogais
  let getInputText = inputText.value
    .replace(/[e\é\ê]/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

  msgEncript.value = getInputText.toLowerCase(); //add conteudo no input msg
  console.log(msgEncript.value);
};

let cleaningInput = () => {
  inputText.value = "";
};

/* Regras Codificador: 
"e" é convertido para "enter" 
"i" é convertido para "imes"
"a" é convertido para "ai"
"o" é convertido para "ober"
"u" é convertido para "ufat"
Apenas letras minúsculas
Não permite acentuação   
*/
