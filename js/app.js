import encrypter from './encrypt';

const inputUserWord = document.querySelector(".whriteSentenceArea input");
const button = document.querySelector(".button");
const inputResultWord = document.querySelector(".encryptedSentenceArea input");
const messageOutputArea = document.querySelector(".message");

let messageToUser = document.querySelector('div p');

button.addEventListener("click", () => {
  // messageOutputArea.style.display = "none";
  if (button.innerHTML === "CLEAR") {
    inputUserWord.value = "";
    messageOutputArea.style.left = "calc(50% - 200px)";
    inputUserWord.readOnly = false;
    inputResultWord.value = "";
    button.textContent = "START";
    return;
    // if (inputUserWord.value = "") {
    // messageToUser.innerHTML = new Error('empty input').message.toUpperCase();
    // messageOutputArea.style.left = "calc(50%)"
    // }
  }

  function resetInputString() {
    messageOutputArea.classList.remove('showMessage');
    messageToUser.innerHTML = "";
    inputUserWord.value = "";
    inputResultWord.value = "";
    button.textContent = "START";
    messageToUser.innerHTML = new Error('empty input').message.toUpperCase();
    messageOutputArea.style.left = "calc(50%)"
  }

  function useEncrypter() {
    messageOutputArea.style.left = "calc(50% - 200px)";
    try {
      const userWord = inputUserWord.value;
      const encryptedWord = encrypter(userWord);
      console.log(encryptedWord)
      inputResultWord.value = encryptedWord;
      console.log(inputResultWord.value);
      messageOutputArea.classList.remove('showMessage');
      inputUserWord.readOnly = true;

    } catch (e) {
      messageToUser.innerHTML = e.message.toUpperCase();
      messageOutputArea.style.left = "calc(50%)";
      inputUserWord.readOnly = true;
    }
    button.textContent = "CLEAR";
  }

  inputUserWord.value ? useEncrypter() : resetInputString();

})