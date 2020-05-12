function caesar13(inputStartWord) {

  function validationGate(inputStartWord) {
    if (inputStartWord === '') throw new Error('empty input');
    if (!new RegExp(/^[a-zA-Z0-9/?]*$/g).test(inputStartWord)) throw new Error('invalid chars');
    return encrypt(inputStartWord);
  }

  function encrypt(properInputStartWord) {
    const startWord = [...properInputStartWord];
    const startWordCharCodes = startWord.map(char => char.charCodeAt(0));
    const resultWordCharCodes = startWordCharCodes.map(startCharCode => add13(startCharCode));
    const resultWord = resultWordCharCodes.map(resultCharCode => String.fromCharCode(resultCharCode));
    return resultWord;
  }

  const add13 = (startCharCode) => {
    const checkDigital = isDigital(startCharCode) ? startCharCode : false;
    const result = isLowerOrUpper(startCharCode) ? (97 + ((startCharCode + 13) - 97) % 26) : (65 + ((startCharCode + 13) - 65) % 26);
    return checkDigital || result;
  }

  const isDigital = (startCharCode) => startCharCode >= 48 && startCharCode <= 57;
  const isLowerOrUpper = (startCharCode) => startCharCode >= 97 ? true : false;
  const startEncrytpOutputResult = validationGate(inputStartWord).join('');
  return startEncrytpOutputResult;
}

export { caesar13 };
