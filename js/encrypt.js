//Szyfr Cezara 

function caesar13(inputStartWord) {

  function validationGate(inputStartWord) {
    const inputFilled = inputStartWord !== "" ? true : false;
    const inputIsTypeofString = typeof inputStartWord === "string" ? true : false;
    return inputFilled && inputIsTypeofString ? encrypt(inputStartWord) : null;
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

  const startEncrytpOutputResult = validationGate(inputStartWord);
  return startEncrytpOutputResult;
}

console.log(caesar13("AbcDfgh"));
console.log(caesar13("Superman33"));
console.log(caesar13(""));
console.log(caesar13(997));

// caesar13();