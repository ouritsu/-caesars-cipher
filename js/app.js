import { encrypter } from './encrypt';

const inputResultWord = document.querySelector(".encryptedSentenceArea input");
const messageOutputArea = document.querySelector(".message");

let messageToUser = document.querySelector('div p');

const button = document.querySelector(".button");
button.addEventListener("click", startEncrypter);

const inputUserWord = document.querySelector(".whriteSentenceArea input");
inputUserWord.addEventListener("keyup", event => {
  if (event.keyCode === 13) startEncrypter();
});

function startEncrypter() {

  const wordToEncrypt = inputUserWord.value;

  function clearInputsAndErrors() {
    button.textContent = "START";
    inputUserWord.value = "";
    messageOutputArea.classList.remove('displayError');
    inputUserWord.readOnly = false;
    inputResultWord.value = "";
    inputUserWord.focus();
  }

  function afterError() {
    messageOutputArea.classList.add('displayError');
    inputResultWord.value = "";
    inputUserWord.focus();
    if (wordToEncrypt) button.textContent = "CLEAR";
  }

  function emptyInput() {
    inputUserWord.readOnly = false;
  }

  function useEncrypter() {
    messageOutputArea.classList.remove('displayError');
    button.textContent = "CLEAR";
    inputResultWord.value = encrypter(wordToEncrypt);
  }

  if (button.innerHTML === "CLEAR") {
    clearInputsAndErrors();
    return;
  }

  try {
    encrypter(wordToEncrypt);
  } catch (error) {
    messageToUser.innerHTML = error.message.toUpperCase();
    afterError();
    return;
  }

  if (wordToEncrypt) {
    useEncrypter();
  }

  if (!wordToEncrypt) {
    emptyInput();
  }
}
