let buttonDecrypt = document.getElementById("button-decrypt");

buttonDecrypt.addEventListener("click", (event) => {
  event.preventDefault();
  decryptLetters(); //descriptografa as letras
  cleaningInput();
});

let decryptLetters = () => {
  //recebe palavras chaves de criptografia
  let keyWord = ["enter", "imes", "ai", "ober", "ufat"];
  //verifica se existe alguma conjunto de caracateres na estring ou seja se esta criotigrafada
  let checkWord = keyWord.some((word) => InputText.includes(word));
  console.log(typeof checkWord);

  if (checkWord) {
    //recebe conteudo do input e convert as vogais
    let getInputText = inputText.value
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");

    msgEncript.value = getInputText.toLowerCase(); //add conteudo no input msg
    console.log(msgEncript.value);
  } else {
    alert("Oi");
  }
};

/* Regras Decodificador: 
"enter" é convertido para "e" 
"imes" é convertido para "i"
"ai" é convertido para "a"
"ober" é convertido para "o"
"ufat" é convertido para "u"
Apenas letras minúsculas
Não permite acentuação     
*/
