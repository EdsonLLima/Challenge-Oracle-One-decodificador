let inputText = document.getElementById("input-text");
inputText.focus();
// inputText.value = "heroi";
let msgEncript = document.getElementById("msg");
// console.log((msgEncript.value = inputText.value));

let buttonEncrypt = document.getElementById("button-encrypt");

buttonEncrypt.addEventListener("click", (event) => {
  event.preventDefault();
  letterCode();
});

let letterCode = () => {
  //recebe conteudo do input e convert as vogais
  let getInputText = inputText.value
    .replace(/[e\é\ê]/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

  msgEncript.value = getInputText; //add conteudo no input msg
};
// letterCode();
// let letterDecoding = () => {
//   let inputText = document.getElementById("input-text").value;
//   //recebe conteudo do input e convert as vogais
//   let getInputText = inputText
//     .replace(/enter/gi, "e")
//     .replace(/imes/gi, "i")
//     .replace(/ai/gi, "a")
//     .replace(/ober/gi, "o")
//     .replace(/ufat/gi, "u");

//   let msgEncript = document.getElementById("msg");
//   msgEncript.value = getInputText; //add conteudo no input msg

//   return console.log(msgEncript.value);
// };

/* Regras Codificador: 
"e" é convertido para "enter" 
"i" é convertido para "imes"
"a" é convertido para "ai"
"o" é convertido para "ober"
"u" é convertido para "ufat"
Apenas letras minúsculas
Não permite acentuação   
*/
