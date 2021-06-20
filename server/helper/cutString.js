/**
 * This function was designed with an nthChar parameter for extensibility. This parameter has a default value of 3 for the purpose of the string cutting exercise.
 * If a developer chooses to modify this parameter, the function can simply be invoked with the desired number value.
 * @param {*} inputStr
 * @param {*} nthChar
 * @returns
 */

function cutString(inputStr, nthChar = 3) {
  if (inputStr.length < nthChar) {
    return `Your input needs to have at least ${nthChar} characters.`;
  }
  let resultStr = [];

  for (let i = nthChar - 1; i < inputStr.length; i += nthChar) {
    resultStr.push(inputStr[i]);
  }
  return resultStr.join("");
}

module.exports = cutString;
