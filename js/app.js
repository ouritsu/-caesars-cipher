import encrypter from './encrypt';

const inputUserWord = document.querySelector(".whriteSentenceArea input");
const button = document.querySelector(".button");
const inputResultWord = document.querySelector(".encryptedSentenceArea input");
let buttonTextFlag = true;

button.addEventListener("click", () => {
  if (buttonTextFlag) {
    const userWord = inputUserWord.value;
    const encryptedWord = encrypter(userWord);
    inputResultWord.value = encryptedWord;

    button.textContent = "CLEAR";
    buttonTextFlag = !buttonTextFlag;
  } else {
    inputUserWord.value = "";
    inputResultWord.value = "";

    button.textContent = "START";
    buttonTextFlag = !buttonTextFlag;
  }
})